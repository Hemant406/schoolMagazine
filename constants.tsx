
import { Magazine, School, VideoContent, UserProfile, UserRole } from './types';

export const COLORS = {
  primary: '#0D1B2A',
  secondary: '#1F6FEB',
  accent: '#F9C74F', // Soft Yellow
  bgDark: 'bg-slate-950',
  cardDark: 'bg-slate-900',
};

export const MOCK_SCHOOLS: School[] = [
  {
    id: 's1',
    name: 'Delhi Public School',
    region: 'Delhi, North',
    logo: 'https://picsum.photos/seed/dps/100/100',
    banner: 'https://picsum.photos/seed/dpsb/800/400',
    about: 'Dedicated to excellence in education and fostering creativity since 1949.',
    totalLikes: 12400,
    totalViews: 85000,
  },
  {
    id: 's2',
    name: 'St. Xavier\'s High',
    region: 'Mumbai, West',
    logo: 'https://picsum.photos/seed/stx/100/100',
    banner: 'https://picsum.photos/seed/stxb/800/400',
    about: 'Nurturing young minds through holistic development and artistic expression.',
    totalLikes: 9800,
    totalViews: 62000,
  },
  {
    id: 's3',
    name: 'Heritage International',
    region: 'Bangalore, South',
    logo: 'https://picsum.photos/seed/heritage/100/100',
    banner: 'https://picsum.photos/seed/heritageb/800/400',
    about: 'A global approach to education with deep-rooted cultural values.',
    totalLikes: 15600,
    totalViews: 110000,
  },
];

export const MOCK_MAGAZINES: Magazine[] = [
  {
    id: 'm1',
    title: 'Wings of Change',
    schoolId: 's1',
    schoolName: 'Delhi Public School',
    region: 'Delhi',
    thumbnail: 'https://picsum.photos/seed/mag1/400/600',
    description: 'A special edition focusing on environmental sustainability and youth climate action.',
    likes: 342,
    views: 1205,
    year: 2024,
    language: 'English',
  },
  {
    id: 'm2',
    title: 'The Modern Quill',
    schoolId: 's2',
    schoolName: 'St. Xavier\'s High',
    region: 'Mumbai',
    thumbnail: 'https://picsum.photos/seed/mag2/400/600',
    description: 'Showcasing the finest poetry and digital art from our high school students.',
    likes: 890,
    views: 4500,
    year: 2023,
    language: 'English',
  },
  {
    id: 'm3',
    title: 'Cultural Echoes',
    schoolId: 's3',
    schoolName: 'Heritage International',
    region: 'Bangalore',
    thumbnail: 'https://picsum.photos/seed/mag3/400/600',
    description: 'Exploring the diverse heritage of Karnataka through students\' eyes.',
    likes: 1200,
    views: 5600,
    year: 2024,
    language: 'Kannada',
  },
  {
    id: 'm4',
    title: 'Future Tech Horizons',
    schoolId: 's1',
    schoolName: 'Delhi Public School',
    region: 'Delhi',
    thumbnail: 'https://picsum.photos/seed/mag4/400/600',
    description: 'Discussing AI, robotics, and the future of coding in schools.',
    likes: 560,
    views: 2100,
    year: 2024,
    language: 'English',
  },
];

export const MOCK_VIDEOS: VideoContent[] = [
  {
    id: 'v1',
    title: 'The Art of Storytelling',
    speaker: 'Aman Sharma',
    thumbnail: 'https://picsum.photos/seed/vid1/600/400',
    duration: '12:45',
    description: 'A workshop on how to bring narratives to life in school magazines.',
  },
  {
    id: 'v2',
    title: 'Leadership in Schools',
    speaker: 'Dr. Priya Verma',
    thumbnail: 'https://picsum.photos/seed/vid2/600/400',
    duration: '08:20',
    description: 'Inspiring talk on student-led initiatives and community building.',
  },
  {
    id: 'v3',
    title: 'Design Principles',
    speaker: 'Rohan Mehta',
    thumbnail: 'https://picsum.photos/seed/vid3/600/400',
    duration: '15:10',
    description: 'Learn the basics of layout design and typography for digital publications.',
  },
];

export const INITIAL_USER: UserProfile = {
  id: 'u1',
  name: 'Aryan Kapoor',
  role: UserRole.VIEWER,
  avatar: 'https://api.dicebear.com/7.x/bottts-neutral/svg?seed=Aryan&backgroundColor=b6e3f4,c0aede,d1d4f9',
  bio: 'Passionate student editor and digital artist exploring the nexus of education and technology.',
  region: 'Delhi NCR',
  bookmarks: ['m1', 'm3'],
  viewHistory: ['m1', 'm2', 'm4'],
  achievements: ['Early Reader', 'Creative Critic', 'Top Supporter'],
};
