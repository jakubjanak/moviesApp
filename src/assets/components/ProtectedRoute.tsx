// src/components/ProtectedRoute.tsx
import { type ReactNode, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user, loading, signInWithGoogle } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      // Automatically trigger Google sign-in popup
      signInWithGoogle().catch((error) => {
        console.error('Authentication failed:', error);
      });
    }
  }, [user, loading, signInWithGoogle]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Načítání...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Přesměrování na přihlášení...</p>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;