/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import DocumentationScope from './components/DocumentationScope';
import DevelopmentStories from './components/DevelopmentStories';
import Dashboard from './components/Dashboard';
import Repository from './components/Repository';
import Partnerships from './components/Partnerships';
import Stakeholders from './components/Stakeholders';
import News from './components/News';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';
import UserProfile from './components/UserProfile';
import Home from './pages/Home';
import AdminSetup from './pages/Admin';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={
            <ProtectedRoute>
              <>
                <Navbar />
                <UserProfile />
                <Footer />
              </>
            </ProtectedRoute>
          } />
          <Route path="/admin" element={
            <ProtectedRoute requireAdmin={true}>
              <AdminDashboard />
            </ProtectedRoute>
          } />
          <Route path="/admin/setup" element={
            <ProtectedRoute>
              <AdminSetup />
            </ProtectedRoute>
          } />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
