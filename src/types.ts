/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Stat {
  label: string;
  value: string;
  description: string;
}

export interface Project {
  id?: string;
  title: string;
  category: string;
  description: string;
  status: 'Ongoing' | 'Completed' | 'Verified';
  sector?: string;
  region?: string;
  location?: string;
  image?: string;
  impact?: string;
  progress?: number;
  startDate?: string;
  endDate?: string;
  budget?: string;
  createdAt?: any;
  updatedAt?: any;
  createdBy?: string;
}

export interface NewsItem {
  id?: string;
  title: string;
  date: string;
  excerpt: string;
  tag: string;
  content?: string;
  image?: string;
  author?: string;
  createdAt?: any;
  updatedAt?: any;
}

export interface Value {
  title: string;
  description: string;
  icon: string;
}

export interface Partner {
  id?: string;
  name: string;
  logo?: string;
  category: string;
  website?: string;
  description?: string;
}

export interface Stakeholder {
  id?: string;
  name: string;
  role: string;
  organization: string;
  avatar?: string;
  bio?: string;
}

export interface SavedProject {
  projectId: string;
  projectTitle: string;
  savedAt: any;
}

export interface UserProfile {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  notificationsEnabled: boolean;
  newsletterSubscribed: boolean;
  isAdmin?: boolean;
  createdAt: any;
  updatedAt: any;
}

export interface DashboardMetrics {
  reformSuccessRate: number;
  projectsVerified: number;
  activeDocumentation: number;
  publicConfidence: number;
  lastUpdated?: any;
}

export interface SearchResult {
  id: string;
  title: string;
  category: 'Project' | 'News' | 'Document' | 'Story';
  type: string;
  link: string;
  excerpt?: string;
}
