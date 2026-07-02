/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  collection, 
  doc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  getDoc, 
  getDocs, 
  query, 
  where, 
  orderBy, 
  limit,
  serverTimestamp,
  Timestamp
} from 'firebase/firestore';
import { db } from './firebase';
import type { Project, NewsItem, Partner, Stakeholder, DashboardMetrics } from '../types';

// ==================== PROJECTS ====================

export const projectsCollection = collection(db, 'projects');

export async function createProject(projectData: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>) {
  const docRef = await addDoc(projectsCollection, {
    ...projectData,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return docRef.id;
}

export async function updateProject(projectId: string, updates: Partial<Project>) {
  const docRef = doc(db, 'projects', projectId);
  await updateDoc(docRef, {
    ...updates,
    updatedAt: serverTimestamp(),
  });
}

export async function deleteProject(projectId: string) {
  const docRef = doc(db, 'projects', projectId);
  await deleteDoc(docRef);
}

export async function getProject(projectId: string): Promise<Project | null> {
  const docRef = doc(db, 'projects', projectId);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() } as Project;
  }
  return null;
}

export async function getProjects(filters?: { 
  sector?: string; 
  region?: string; 
  status?: Project['status'];
  limit?: number;
}): Promise<Project[]> {
  let q = query(projectsCollection, orderBy('createdAt', 'desc'));
  
  if (filters?.sector) {
    q = query(q, where('sector', '==', filters.sector));
  }
  
  if (filters?.region) {
    q = query(q, where('region', '==', filters.region));
  }
  
  if (filters?.status) {
    q = query(q, where('status', '==', filters.status));
  }
  
  if (filters?.limit) {
    q = query(q, limit(filters.limit));
  }
  
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Project));
}

// ==================== NEWS ====================

export const newsCollection = collection(db, 'news');

export async function createNews(newsData: Omit<NewsItem, 'id' | 'createdAt' | 'updatedAt'>) {
  const docRef = await addDoc(newsCollection, {
    ...newsData,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return docRef.id;
}

export async function updateNews(newsId: string, updates: Partial<NewsItem>) {
  const docRef = doc(db, 'news', newsId);
  await updateDoc(docRef, {
    ...updates,
    updatedAt: serverTimestamp(),
  });
}

export async function deleteNews(newsId: string) {
  const docRef = doc(db, 'news', newsId);
  await deleteDoc(docRef);
}

export async function getNewsItems(limitCount: number = 10): Promise<NewsItem[]> {
  const q = query(newsCollection, orderBy('createdAt', 'desc'), limit(limitCount));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as NewsItem));
}

// ==================== PARTNERS ====================

export const partnersCollection = collection(db, 'partners');

export async function createPartner(partnerData: Omit<Partner, 'id'>) {
  const docRef = await addDoc(partnersCollection, partnerData);
  return docRef.id;
}

export async function getPartners(category?: string): Promise<Partner[]> {
  let q = query(partnersCollection);
  
  if (category) {
    q = query(q, where('category', '==', category));
  }
  
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Partner));
}

// ==================== STAKEHOLDERS ====================

export const stakeholdersCollection = collection(db, 'stakeholders');

export async function createStakeholder(stakeholderData: Omit<Stakeholder, 'id'>) {
  const docRef = await addDoc(stakeholdersCollection, stakeholderData);
  return docRef.id;
}

export async function getStakeholders(): Promise<Stakeholder[]> {
  const snapshot = await getDocs(stakeholdersCollection);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Stakeholder));
}

// ==================== DASHBOARD METRICS ====================

export async function getDashboardMetrics(): Promise<DashboardMetrics | null> {
  const docRef = doc(db, 'system', 'dashboardMetrics');
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    return docSnap.data() as DashboardMetrics;
  }
  
  // Return default metrics if not set
  return {
    reformSuccessRate: 84,
    projectsVerified: 1240,
    activeDocumentation: 450,
    publicConfidence: 72,
    lastUpdated: Timestamp.now(),
  };
}

export async function updateDashboardMetrics(metrics: Partial<DashboardMetrics>) {
  const docRef = doc(db, 'system', 'dashboardMetrics');
  await updateDoc(docRef, {
    ...metrics,
    lastUpdated: serverTimestamp(),
  });
}

// ==================== SEARCH ====================

export async function searchContent(searchQuery: string): Promise<Array<Project | NewsItem>> {
  const results: Array<Project | NewsItem> = [];
  const searchLower = searchQuery.toLowerCase();
  
  // Search projects
  const projectsSnapshot = await getDocs(query(projectsCollection, limit(20)));
  projectsSnapshot.docs.forEach(doc => {
    const data = doc.data() as Project;
    if (
      data.title?.toLowerCase().includes(searchLower) ||
      data.description?.toLowerCase().includes(searchLower) ||
      data.category?.toLowerCase().includes(searchLower)
    ) {
      results.push({ id: doc.id, ...data });
    }
  });
  
  // Search news
  const newsSnapshot = await getDocs(query(newsCollection, limit(20)));
  newsSnapshot.docs.forEach(doc => {
    const data = doc.data() as NewsItem;
    if (
      data.title?.toLowerCase().includes(searchLower) ||
      data.excerpt?.toLowerCase().includes(searchLower) ||
      data.tag?.toLowerCase().includes(searchLower)
    ) {
      results.push({ id: doc.id, ...data });
    }
  });
  
  return results;
}
