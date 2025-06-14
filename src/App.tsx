import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Lessons from './pages/Lessons';
import Games from './pages/Games';
import ParentCorner from './pages/ParentCorner';
import Login from './components/Login';
import Signup from './components/Signup';

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return currentUser ? <>{children}</> : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen">
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="/lessons"
                element={
                  <PrivateRoute>
                    <Lessons />
                  </PrivateRoute>
                }
              />
              <Route
                path="/games"
                element={
                  <PrivateRoute>
                    <Games />
                  </PrivateRoute>
                }
              />
              <Route
                path="/parent-corner"
                element={
                  <PrivateRoute>
                    <ParentCorner />
                  </PrivateRoute>
                }
              />
            </Routes>
          </main>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App; 