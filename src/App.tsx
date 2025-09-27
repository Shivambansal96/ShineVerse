import React, { useState } from 'react';
import { AuthProvider, useAuth } from './hooks/useAuth';
import Header from './components/Header';
import Hero from './components/Hero';
import Auth from './components/Auth';
import CourseGrid from './components/CourseGrid';
import Dashboard from './components/Dashboard';
import CourseDetail from './components/CourseDetail';
import Profile from './components/Profile';

const AppContent = () => {
  const { isAuthenticated, isLoading } = useAuth();
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);

  // Auto-redirect to dashboard if authenticated and on home/auth pages
  React.useEffect(() => {
    if (isAuthenticated && ['home', 'login', 'register'].includes(currentView)) {
      setCurrentView('dashboard');
    }
  }, [isAuthenticated, currentView]);

  const handleCourseClick = (courseId: string) => {
    setSelectedCourseId(courseId);
    setCurrentView('course-detail');
  };

  const handleBackFromCourse = () => {
    setSelectedCourseId(null);
    setCurrentView('courses');
  };

  const handleProfileClick = () => {
    setCurrentView('profile');
  };

  const handleBackFromProfile = () => {
    setCurrentView('dashboard');
  };

  // Show loading spinner while checking auth state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading ShineVerse...</p>
        </div>
      </div>
    );
  }

  const renderCurrentView = () => {
    switch (currentView) {
      case 'login':
        return <Auth mode="login" onViewChange={setCurrentView} />;
      case 'register':
        return <Auth mode="register" onViewChange={setCurrentView} />;
      case 'courses':
        return <CourseGrid onCourseClick={handleCourseClick} />;
      case 'course-detail':
        return selectedCourseId ? (
          <CourseDetail courseId={selectedCourseId} onBack={handleBackFromCourse} />
        ) : (
          <CourseGrid onCourseClick={handleCourseClick} />
        );
      case 'dashboard':
        return isAuthenticated ? <Dashboard onCourseClick={handleCourseClick} /> : <Hero onViewChange={setCurrentView} />;
      case 'profile':
        return isAuthenticated ? <Profile onBack={handleBackFromProfile} /> : <Hero onViewChange={setCurrentView} />;
      default:
        return <Hero onViewChange={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Only show header on non-auth pages */}
      {!['login', 'register', 'course-detail', 'profile'].includes(currentView) && (
        <Header currentView={currentView} onViewChange={setCurrentView} onProfileClick={handleProfileClick} />
      )}
      
      <main>
        {renderCurrentView()}
      </main>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;