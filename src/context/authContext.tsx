import React, { createContext, useCallback } from 'react';
import SignIn from '../pages/signin ';

interface AuthContextData {
  name: string;
  signIn(): void;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(() => {
    console.log('singIn');
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'Bruno', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
