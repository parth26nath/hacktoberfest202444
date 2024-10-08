// src/components/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Null means no user is logged in
  const [loading, setLoading] = useState(true); // To manage loading state

  // Simulate user login/logout (this would typically involve real authentication)
  const login = (email, password) => {
    // Mock login function
    setUser({ email });
  };

  const logout = () => {
    setUser(null);
  };

  // Check for logged-in user (replace with real auth logic)
  useEffect(() => {
    const existingUser = localStorage.getItem('user');
    if (existingUser) {
      setUser(JSON.parse(existingUser));
    }
    setLoading(false); // Finish loading once the check is done
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
