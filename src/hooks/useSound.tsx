import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

interface SoundContextType {
    isMuted: boolean;
    toggleMute: () => void;
    playSound: (soundType: 'hover' | 'click' | 'success' | 'transition') => void;
    startMusic: () => void;
    stopMusic: () => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

// Generate SFX using Web Audio API (no external URLs needed)
const createSFX = (type: 'hover' | 'click' | 'success' | 'transition') => {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    gain.gain.value = 0.08;

    switch (type) {
        case 'hover':
            osc.frequency.value = 800;
            osc.type = 'sine';
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
            osc.start(); osc.stop(ctx.currentTime + 0.08);
            break;
        case 'click':
            osc.frequency.value = 600;
            osc.type = 'square';
            gain.gain.value = 0.05;
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
            osc.start(); osc.stop(ctx.currentTime + 0.06);
            break;
        case 'success':
            osc.frequency.value = 523;
            osc.type = 'sine';
            osc.frequency.setValueAtTime(523, ctx.currentTime);
            osc.frequency.setValueAtTime(659, ctx.currentTime + 0.1);
            osc.frequency.setValueAtTime(784, ctx.currentTime + 0.2);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
            osc.start(); osc.stop(ctx.currentTime + 0.35);
            break;
        case 'transition':
            osc.frequency.value = 300;
            osc.type = 'sine';
            osc.frequency.exponentialRampToValueAtTime(900, ctx.currentTime + 0.15);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
            osc.start(); osc.stop(ctx.currentTime + 0.2);
            break;
    }
};

const MUSIC_URL = 'https://cdn.pixabay.com/audio/2022/02/22/audio_d1718ab41b.mp3'; // Calm ambient loop

export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isMuted, setIsMuted] = useState(() => {
        const saved = localStorage.getItem('gdg_sound_muted');
        return saved ? JSON.parse(saved) : false;
    });

    const musicRef = React.useRef<HTMLAudioElement | null>(null);
    const [isMusicPlaying, setIsMusicPlaying] = useState(false);

    useEffect(() => {
        // Setup music
        const music = new Audio(MUSIC_URL);
        music.loop = true;
        music.volume = 0.15;
        music.preload = 'auto';
        musicRef.current = music;

        return () => {
            if (musicRef.current) {
                musicRef.current.pause();
                musicRef.current = null;
            }
        };
    }, []);

    // Handle mute state changes for music
    useEffect(() => {
        if (musicRef.current) {
            musicRef.current.muted = isMuted;
            if (!isMuted && isMusicPlaying) {
                musicRef.current.play().catch(() => {
                    console.debug('Music play blocked by browser on mute toggle');
                });
            }
        }
    }, [isMuted, isMusicPlaying]);

    const toggleMute = useCallback(() => {
        setIsMuted((prev: boolean) => {
            const newState = !prev;
            localStorage.setItem('gdg_sound_muted', JSON.stringify(newState));
            return newState;
        });
    }, []);

    const playSound = useCallback((soundType: 'hover' | 'click' | 'success' | 'transition') => {
        if (isMuted) return;
        try {
            createSFX(soundType);
        } catch {
            console.debug('Audio playback blocked by browser');
        }
    }, [isMuted, audioCache]);

    const startMusic = useCallback(() => {
        if (musicRef.current && !isMusicPlaying) {
            setIsMusicPlaying(true);
            musicRef.current.play().catch(() => {
                console.debug('Initial music playback blocked by browser');
            });
        }
    }, [isMusicPlaying]);

    const stopMusic = useCallback(() => {
        if (musicRef.current && isMusicPlaying) {
            setIsMusicPlaying(false);
            musicRef.current.pause();
        }
    }, [isMusicPlaying]);

    return (
        <SoundContext.Provider value={{ isMuted, toggleMute, playSound, startMusic, stopMusic }}>
            {children}
        </SoundContext.Provider>
    );
};

export const useSound = () => {
    const context = useContext(SoundContext);
    if (!context) {
        throw new Error('useSound must be used within a SoundProvider');
    }
    return context;
};
