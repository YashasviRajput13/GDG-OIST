
export interface EventData {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  type: 'Workshop' | 'Meetup' | 'Hackathon';
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export interface Activity {
  title: string;
  description: string;
  icon: string;
  color: string;
}
