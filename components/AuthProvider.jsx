'use client';
import { SessionProvider } from 'next-auth/react';

const AuthProvider = ({children}) => {
  //Session  provider added
  return <SessionProvider>{children}</SessionProvider>
}

export default AuthProvider