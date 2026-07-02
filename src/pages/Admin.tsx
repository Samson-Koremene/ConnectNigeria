/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { seedDatabase } from '../lib/seedData';

export default function AdminSetup() {
  const { user } = useAuth();
  const [seeding, setSeeding] = useState(false);
  const [message, setMessage] = useState('');

  const handleSeedDatabase = async () => {
    if (!user) return;
    
    setSeeding(true);
    setMessage('Seeding database... Please wait.');
    
    try {
      await seedDatabase();
      setMessage('✅ Database seeded successfully! You can now explore the platform.');
    } catch (error) {
      setMessage(`❌ Error seeding database: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setSeeding(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAF9] pt-32 pb-24 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
          <h1 className="text-3xl font-bold text-[#1A2E26] mb-4">Database Setup</h1>
          <p className="text-slate-600 mb-8">
            Initialize the database with sample projects, news, partners, and stakeholders.
          </p>
          
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
            <h2 className="text-lg font-bold text-amber-900 mb-2">⚠️ Important Notice</h2>
            <p className="text-amber-800 text-sm">
              This action will populate your Firestore database with sample data. 
              Only run this once during initial setup. Make sure you have the proper 
              Firestore security rules deployed.
            </p>
          </div>

          <button
            onClick={handleSeedDatabase}
            disabled={seeding}
            className="w-full bg-[#008751] text-white py-4 rounded-2xl font-bold text-lg hover:bg-[#007043] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {seeding ? 'Seeding Database...' : 'Seed Database Now'}
          </button>

          {message && (
            <div className={`mt-6 p-4 rounded-xl ${
              message.includes('✅') 
                ? 'bg-emerald-50 text-emerald-800' 
                : message.includes('❌')
                ? 'bg-red-50 text-red-800'
                : 'bg-blue-50 text-blue-800'
            }`}>
              <p className="text-sm font-medium whitespace-pre-line">{message}</p>
            </div>
          )}

          <div className="mt-12 pt-8 border-t border-slate-100">
            <h3 className="text-lg font-bold text-[#1A2E26] mb-4">Setup Checklist</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <span className="text-emerald-500 font-bold">✓</span>
                <span className="text-slate-600 text-sm">Firebase project configured</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-emerald-500 font-bold">✓</span>
                <span className="text-slate-600 text-sm">Firestore database created</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-amber-500 font-bold">○</span>
                <span className="text-slate-600 text-sm">Deploy security rules (run: <code className="bg-slate-100 px-2 py-1 rounded text-xs">firebase deploy --only firestore:rules</code>)</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-amber-500 font-bold">○</span>
                <span className="text-slate-600 text-sm">Seed database with sample data (use button above)</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-amber-500 font-bold">○</span>
                <span className="text-slate-600 text-sm">Grant admin access to your user (manually update Firestore)</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-blue-900 mb-2">📝 Making Yourself an Admin</h3>
            <p className="text-blue-800 text-sm mb-4">
              To access the admin dashboard, you need to manually set the <code className="bg-blue-100 px-2 py-1 rounded text-xs">isAdmin</code> field:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-blue-800 text-sm">
              <li>Go to Firebase Console → Firestore Database</li>
              <li>Navigate to: <code className="bg-blue-100 px-2 py-1 rounded text-xs">users → [your-uid]</code></li>
              <li>Add field: <code className="bg-blue-100 px-2 py-1 rounded text-xs">isAdmin</code> = <code className="bg-blue-100 px-2 py-1 rounded text-xs">true</code></li>
              <li>Save and refresh the page</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
