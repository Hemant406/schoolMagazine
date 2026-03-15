
export enum AppTab {
  HOME = 'home',
  MAGAZINES = 'magazines',
  SEARCH = 'search',
  VIDEOS = 'videos',
  PROFILE = 'profile',
  TEAM ="team",
  DASHBOARD = 'dashboard', // For organizations
  MANAGE = 'manage'       // For organizations
}

export enum UserRole {
  VIEWER = 'viewer',
  ORGANIZATION = 'organization'
}

export enum ThemeMode {
  LIGHT = 'light',
  DARK = 'dark',
  DEFAULT = 'default'
}

export interface School {
  id: string;
  name: string;
  region: string;
  logo: string;
  banner: string;
  about: string;
  totalLikes: number;
  totalViews: number;
}

export interface Magazine {
  id: string;
  title: string;
  schoolId: string;
  schoolName: string;
  region: string;
  thumbnail: string;
  description: string;
  likes: number;
  views: number;
  year: number;
  language: string;
}

export interface VideoContent {
  id: string;
  title: string;
  speaker: string;
  thumbnail: string;
  duration: string;
  description: string;
}

export interface UserProfile {
  id: string;
  name: string;
  role: UserRole;
  avatar: any;
  bio: string;
  region: string;
  bookmarks: string[]; // Magazine IDs
  viewHistory: string[]; // Magazine IDs
  achievements: string[];
}
