/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  createProject, 
  createNews, 
  createPartner, 
  createStakeholder,
  updateDashboardMetrics
} from './firestore';
import type { Project, NewsItem, Partner, Stakeholder } from '../types';

// Sample Projects Data
export const sampleProjects: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>[] = [
  {
    title: 'Lagos-Ibadan Rail Project',
    category: 'Infrastructure',
    description: 'Modern rail system connecting Lagos and Ibadan, improving transportation and economic activity.',
    status: 'Ongoing',
    sector: 'Infrastructure',
    region: 'South West',
    location: 'Lagos-Ibadan Corridor',
    image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800',
    impact: '2M+ Commuters Daily',
    progress: 75,
    startDate: '2020-01',
    budget: '₦1.5T',
  },
  {
    title: 'Digital Economy Expansion',
    category: 'Technology',
    description: 'Nationwide initiative to boost digital infrastructure and create tech jobs.',
    status: 'Ongoing',
    sector: 'Technology',
    region: 'National Coverage',
    location: 'All States',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
    impact: '2.5M New Jobs',
    progress: 65,
    startDate: '2021-06',
    budget: '₦800B',
  },
  {
    title: 'Agricultural Innovation Hubs',
    category: 'Agriculture',
    description: 'Establishing modern agricultural centers to improve farming techniques and yields.',
    status: 'Verified',
    sector: 'Agriculture',
    region: 'North Central',
    location: 'Benue, Niger, Kwara',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800',
    impact: '30% Yield Increase',
    progress: 100,
    startDate: '2019-03',
    endDate: '2023-12',
    budget: '₦450B',
  },
  {
    title: 'Renewable Energy Initiative',
    category: 'Energy',
    description: 'Solar power grid expansion providing clean energy to rural communities.',
    status: 'Ongoing',
    sector: 'Energy',
    region: 'South West',
    location: 'Oyo, Ogun, Osun',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800',
    impact: '500 Schools Powered',
    progress: 42,
    startDate: '2022-01',
    budget: '₦600B',
  },
  {
    title: 'National Digital Identity Rollout',
    category: 'Governance',
    description: 'Comprehensive digital ID system for all citizens improving access to services.',
    status: 'Verified',
    sector: 'Governance',
    region: 'National Coverage',
    location: 'All States',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800',
    impact: '120M+ Citizens Enrolled',
    progress: 100,
    startDate: '2018-06',
    endDate: '2024-03',
    budget: '₦350B',
  },
  {
    title: 'Healthcare Reform Phase II',
    category: 'Healthcare',
    description: 'Expanding universal health coverage and modernizing primary healthcare centers.',
    status: 'Ongoing',
    sector: 'Healthcare',
    region: 'National Coverage',
    location: 'All States',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
    impact: '15M+ New Beneficiaries',
    progress: 55,
    startDate: '2021-09',
    budget: '₦1.2T',
  },
  {
    title: 'Rural Connectivity Program',
    category: 'Infrastructure',
    description: 'Fiber optic network expansion to connect rural communities to high-speed internet.',
    status: 'Ongoing',
    sector: 'Technology',
    region: 'North East',
    location: 'Bauchi, Gombe, Yobe',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    impact: '500 Villages Connected',
    progress: 38,
    startDate: '2022-06',
    budget: '₦280B',
  },
  {
    title: 'Education Infrastructure Upgrade',
    category: 'Education',
    description: 'Modernization of school facilities and provision of digital learning tools.',
    status: 'Verified',
    sector: 'Education',
    region: 'South South',
    location: 'Rivers, Bayelsa, Delta',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800',
    impact: '800 Schools Renovated',
    progress: 100,
    startDate: '2020-01',
    endDate: '2023-11',
    budget: '₦520B',
  },
];

// Sample News Data
export const sampleNews: Omit<NewsItem, 'id' | 'createdAt' | 'updatedAt'>[] = [
  {
    title: 'New Digital Literacy Program Launches Nationwide',
    date: '2024-10-20',
    excerpt: 'Government partners with tech companies to train 5 million citizens in digital skills by 2025.',
    tag: 'Education',
    content: 'The Ministry of Communications has announced a comprehensive digital literacy program...',
    author: 'CNFP Editorial',
  },
  {
    title: 'Lagos-Ibadan Rail Project Reaches 75% Completion',
    date: '2024-10-15',
    excerpt: 'Major milestone achieved as the modern rail system prepares for commercial operations.',
    tag: 'Infrastructure',
    content: 'The Federal Ministry of Transportation reports significant progress...',
    author: 'Infrastructure Desk',
  },
  {
    title: 'Agricultural Yields Increase by 30% in Innovation Hubs',
    date: '2024-10-10',
    excerpt: 'Farmers in North Central region report record harvests following modern farming techniques.',
    tag: 'Agriculture',
    content: 'The Agricultural Innovation Hub initiative has delivered impressive results...',
    author: 'Agriculture Correspondent',
  },
  {
    title: 'Healthcare Reform Reaches 15 Million Citizens',
    date: '2024-10-05',
    excerpt: 'Universal Health Coverage expansion provides access to quality healthcare across the nation.',
    tag: 'Healthcare',
    content: 'The National Health Insurance Authority announces a major milestone...',
    author: 'Health Reporter',
  },
  {
    title: 'Rural Communities Get High-Speed Internet Access',
    date: '2024-09-28',
    excerpt: 'Fiber optic expansion brings connectivity to 500 villages in rural areas.',
    tag: 'Technology',
    content: 'The Rural Connectivity Program has successfully connected...',
    author: 'Tech Desk',
  },
  {
    title: 'Renewable Energy Powers 500 Schools in South West',
    date: '2024-09-20',
    excerpt: 'Solar power grid initiative eliminates electricity challenges in educational institutions.',
    tag: 'Energy',
    content: 'The Ministry of Power announces successful deployment of solar solutions...',
    author: 'Energy Correspondent',
  },
];

// Sample Partners Data
export const samplePartners: Omit<Partner, 'id'>[] = [
  { name: 'World Bank', category: 'International', description: 'Development financing partner' },
  { name: 'African Development Bank', category: 'International', description: 'Infrastructure funding' },
  { name: 'UNDP Nigeria', category: 'International', description: 'Development programs' },
  { name: 'Google', category: 'Technology', description: 'Digital skills training' },
  { name: 'Microsoft', category: 'Technology', description: 'Cloud infrastructure' },
  { name: 'MTN Nigeria', category: 'Telecommunications', description: 'Connectivity solutions' },
  { name: 'Dangote Group', category: 'Private Sector', description: 'Infrastructure development' },
  { name: 'Access Bank', category: 'Financial', description: 'Project financing' },
  { name: 'Shell Nigeria', category: 'Energy', description: 'Renewable energy initiatives' },
  { name: 'University of Lagos', category: 'Academic', description: 'Research partnerships' },
];

// Sample Stakeholders Data
export const sampleStakeholders: Omit<Stakeholder, 'id'>[] = [
  {
    name: 'Dr. Amina Mohammed',
    role: 'Program Director',
    organization: 'Federal Ministry of Development',
    bio: 'Leading national development initiatives for over 15 years.',
  },
  {
    name: 'Eng. Chukwuma Obi',
    role: 'Infrastructure Coordinator',
    organization: 'Ministry of Works',
    bio: 'Expert in large-scale infrastructure project management.',
  },
  {
    name: 'Prof. Fatima Abubakar',
    role: 'Education Advisor',
    organization: 'Ministry of Education',
    bio: 'Champion of digital literacy and educational reform.',
  },
  {
    name: 'Mr. Oluwaseun Adeyemi',
    role: 'Technology Lead',
    organization: 'NITDA',
    bio: 'Driving Nigeria\'s digital transformation agenda.',
  },
];

// Seed all data
export async function seedDatabase() {
  console.log('🌱 Starting database seeding...');

  try {
    // Seed projects
    console.log('📁 Seeding projects...');
    for (const project of sampleProjects) {
      await createProject(project);
    }
    console.log(`✅ Created ${sampleProjects.length} projects`);

    // Seed news
    console.log('📰 Seeding news items...');
    for (const news of sampleNews) {
      await createNews(news);
    }
    console.log(`✅ Created ${sampleNews.length} news items`);

    // Seed partners
    console.log('🤝 Seeding partners...');
    for (const partner of samplePartners) {
      await createPartner(partner);
    }
    console.log(`✅ Created ${samplePartners.length} partners`);

    // Seed stakeholders
    console.log('👥 Seeding stakeholders...');
    for (const stakeholder of sampleStakeholders) {
      await createStakeholder(stakeholder);
    }
    console.log(`✅ Created ${sampleStakeholders.length} stakeholders`);

    // Update dashboard metrics
    console.log('📊 Updating dashboard metrics...');
    await updateDashboardMetrics({
      reformSuccessRate: 84,
      projectsVerified: 1240,
      activeDocumentation: 450,
      publicConfidence: 72,
    });
    console.log('✅ Dashboard metrics updated');

    console.log('🎉 Database seeding completed successfully!');
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    throw error;
  }
}
