import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Navbar: React.FC = () => {
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  return (
    <nav className="bg-red-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/spidey-logo.png" alt="Spidey Math" className="h-8 w-8" />
            <span className="text-xl font-bold">Spidey Math</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            {currentUser ? (
              <>
                <Link to="/lessons" className="hover:text-red-200 transition-colors">
                  Lessons
                </Link>
                <Link to="/games" className="hover:text-red-200 transition-colors">
                  Games
                </Link>
                <Link to="/parent-corner" className="hover:text-red-200 transition-colors">
                  Parent Corner
                </Link>
                <button
                  onClick={handleLogout}
                  className="hover:text-red-200 transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="hover:text-red-200 transition-colors">
                  Login
                </Link>
                <Link to="/signup" className="hover:text-red-200 transition-colors">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 