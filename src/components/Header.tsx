import React from 'react';
import { BookOpen, User, LogOut, Menu, X } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

interface HeaderProps {
  currentView: string;
  onViewChange: (view: string) => void;
  onProfileClick?: () => void;
}

const Header = ({ currentView, onViewChange, onProfileClick }: HeaderProps) => {
  const { isAuthenticated, user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50 backdrop-blur-md bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => onViewChange('home')}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              ShineVerse
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {isAuthenticated && (
              <>
                <button
                  onClick={() => onViewChange('dashboard')}
                  className={`text-gray-700 hover:text-pink-600 transition-colors duration-200 ${
                    currentView === 'dashboard' ? 'text-pink-600 font-semibold' : ''
                  }`}
                >
                  Dashboard
                </button>
                <button
                  onClick={() => onViewChange('courses')}
                  className={`text-gray-700 hover:text-pink-600 transition-colors duration-200 ${
                    currentView === 'courses' ? 'text-pink-600 font-semibold' : ''
                  }`}
                >
                  Courses
                </button>
              </>
            )}
          </nav>

          {/* Desktop Auth Section */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <button
                  onClick={onProfileClick}
                  className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-pink-50 to-purple-50 hover:from-pink-100 hover:to-purple-100 rounded-lg transition-all duration-200 transform hover:scale-105 group"
                >
                  <User className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-gray-700 group-hover:text-purple-600 transition-colors duration-200">{user?.name}</span>
                </button>
                <button
                  onClick={logout}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 transform hover:scale-105"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="text-sm">Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => onViewChange('login')}
                  className="px-4 py-2 text-gray-700 hover:text-pink-600 transition-colors duration-200"
                >
                  Login
                </button>
                <button
                  onClick={() => onViewChange('register')}
                  className="px-6 py-2 bg-gradient-to-r from-pink-500 to-violet-600 text-white rounded-lg hover:from-pink-600 hover:to-violet-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-pink-600 transition-colors duration-200"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-3">
              {isAuthenticated ? (
                <>
                  <button
                    onClick={() => {
                      onViewChange('dashboard');
                      setMobileMenuOpen(false);
                    }}
                    className="text-left px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
                  >
                    Dashboard
                  </button>
                  <button
                    onClick={() => {
                      onViewChange('courses');
                      setMobileMenuOpen(false);
                    }}
                    className="text-left px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
                  >
                    Courses
                  </button>
                  <button
                    onClick={() => {
                      if (onProfileClick) onProfileClick();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-pink-50 to-purple-50 hover:from-pink-100 hover:to-purple-100 rounded-lg transition-all duration-200"
                  >
                    <User className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-700">{user?.name}</span>
                  </button>
                  <button
                    onClick={() => {
                      logout();
                      setMobileMenuOpen(false);
                    }}
                    className="text-left px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 transform hover:scale-105"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
                      onViewChange('login');
                      setMobileMenuOpen(false);
                    }}
                    className="text-left px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => {
                      onViewChange('register');
                      setMobileMenuOpen(false);
                    }}
                    className="text-left px-4 py-2 bg-gradient-to-r from-pink-500 to-violet-600 text-white rounded-lg hover:from-pink-600 hover:to-violet-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Sign Up
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;