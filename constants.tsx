import { EventData, TeamMember, Activity } from './types';

export const ROTATING_TEXTS = [
  "We 3D-Model!",
  "We Build AI!",
  "We Deploy Cloud!",
  "We Craft UX!",
  "We Compile Future!",
  "We Grow Together!"
];

export const TECH_LOGOS = [
  { name: 'Android', url: 'https://www.vectorlogo.zone/logos/android/android-icon.svg' },
  { name: 'Firebase', url: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg' },
  { name: 'TensorFlow', url: 'https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg' },
  { name: 'Google Cloud', url: 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg' },
  { name: 'React', url: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg' },
  { name: 'Kotlin', url: 'https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg' },
  { name: 'Flutter', url: 'https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg' },
  { name: 'Go', url: 'https://www.vectorlogo.zone/logos/golang/golang-icon.svg' }
];

export const PILLARS = [
  {
    title: 'Discover Technology',
    desc: 'Explore the vast world of Google technologies and open source libraries. Stay ahead of the curve.',
    color: 'bg-green-600',
    icon: 'Search'
  },
  {
    title: 'Build Connections',
    desc: 'Join an always-evolving, inter-connected world. Network with fellow students and industry leaders.',
    color: 'bg-blue-600',
    icon: 'Users'
  },
  {
    title: 'Gain Experience',
    desc: 'Work on real-world projects, hackathons, and community-led initiatives to boost your career.',
    color: 'bg-yellow-600',
    icon: 'Rocket'
  }
];

export const EVENTS: EventData[] = [
  {
    id: '1',
    title: 'Cloud Study Jam',
    date: 'Feb 20, 2025',
    description: 'Deep dive into Google Cloud Platform with hands-on labs and certifications.',
    image: 'https://imgs.search.brave.com/ka2mXvtOn_xjIkOUogR7VZLvr9rCca9ltH9USCiNrKM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y29sbGVnZWJhdGNo/LmNvbS9zdGF0aWMv/Y2xnLWdhbGxlcnkv/b3JpZW50YWwtZ3Jv/dXAtb2YtaW5zdGl0/dXRlcy1iaG9wYWwt/MzU4NzcxLndlYnA',
    type: 'Workshop'
  },
  {
    id: '2',
    title: 'DevFest Bhopal 2025',
    date: 'March 15, 2025',
    description: 'The biggest developer festival in Central India, featuring expert speakers and networking.',
    image: 'https://imgs.search.brave.com/bmOzFenHXIRlEKjsohQaFLOvzNAW3DkTbp7sHDKrHH0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zeW5x/dWVzLWR5bi1jZG4u/czMuYXAtc291dGgt/MS5hbWF6b25hd3Mu/Y29tL29yaWVudGFs/L29jbS1iaG9wYWwv/aW1hZ2VzL3BsYWNl/bWVudC0yMDIxLTEw/LndlYnA',
    type: 'Meetup'
  },
  {
    id: '3',
    title: 'Code-A-Thon 2.0',
    date: 'April 05, 2025',
    description: 'A 24-hour hackathon to build innovative solutions for local community problems.',
    image: 'https://imgs.search.brave.com/fENrtj3HYC-pGe5CSKDo4BTEYc2PNsFAwxWFiQ82hQI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zeW5x/dWVzLWR5bi1jZG4u/czMuYXAtc291dGgt/MS5hbWF6b25hd3Mu/Y29tL29yaWVudGFs/L29jbS1iaG9wYWwv/aW1hZ2VzL29jbS1h/Y3Rpdml0aWVzLTFz/LmpwZw',
    type: 'Hackathon'
  }
];

export const ACTIVITIES: Activity[] = [
  {
    title: 'Android Development',
    description: 'Building modern apps using Kotlin and Jetpack Compose.',
    icon: 'Smartphone',
    color: '#34A853'
  },
  {
    title: 'Web Technologies',
    description: 'Mastering React, Next.js, and modern web standards.',
    icon: 'Globe',
    color: '#4285F4'
  },
  {
    title: 'Machine Learning',
    description: 'Exploring TensorFlow and AI models for real-world tasks.',
    icon: 'Cpu',
    color: '#FBBC05'
  },
  {
    title: 'Cloud Computing',
    description: 'Scalable infrastructure and serverless solutions on GCP.',
    icon: 'Cloud',
    color: '#EA4335'
  }
];

export const TEAM: TeamMember[] = [
  { name: 'Rahul Sharma', role: 'Chapter Lead', image: 'https://imgs.search.brave.com/LKBasxzw6FMHR7oiEvkSywsJQRT-Wwl5rfVI5C8VxdU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtY3NlLmNhbnZh/LmNvbS9ibG9iLzI0/NDg4MzYvMTYwMHct/Qi1jUnlvaDdiOTgu/anBn', social: { linkedin: '#' } },
  { name: 'Priya Verma', role: 'Tech Lead', image: 'https://imgs.search.brave.com/DwpPz-qVe3t3WCgnjqGTIrhNnq7uz0RytQCt5jF2W0Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cHJvZmlsZWJha2Vy/eS5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjUvMDkvcnEw/Z2l4NmgyMHNndnA1/emZsYmZzbjJvamR2/ci5qcGc', social: { github: '#' } },
  { name: 'Amit Patel', role: 'Operations', image: 'https://imgs.search.brave.com/GrTp1tqdj7kiiLYv7ZO5OXu1yjkZcc6XkXFRrJAPfSY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtY3NlLmNhbnZh/LmNvbS9ibG9iLzI0/NDg4NzEvMTYwMHct/YzI0NnkwcjBPdEku/anBn', social: { linkedin: '#' } },
  { name: 'Sneha Gupta', role: 'Design Lead', image: 'https://picsum.photos/seed/sneha/400/400', social: { linkedin: '#' } },
  { name: 'Vikram Singh', role: 'Marketing', image: 'https://picsum.photos/seed/vikram/400/400', social: { twitter: '#' } },
  { name: 'Nisha Rai', role: 'Community Lead', image: 'https://picsum.photos/seed/nisha/400/400', social: { linkedin: '#' } },
  { name: 'Arjun Mehra', role: 'Web Master', image: 'https://picsum.photos/seed/arjun/400/400', social: { github: '#' } },
  { name: 'Isha Khan', role: 'Treasurer', image: 'https://picsum.photos/seed/isha/400/400', social: { linkedin: '#' } }
];

export const NAV_LINKS = [
  { name: 'Home', href: '#' },
  { name: 'Projects', href: '#projects' },
  { name: 'Leadership', href: '#leadership' },
  { name: 'Hackathons', href: '#hackathons' },
  { name: 'Join Us!', href: '#contact' }
];