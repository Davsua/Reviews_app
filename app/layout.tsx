import Link from 'next/link'; // client side navigation
import { ReactNode } from 'react';
import './globals.css';
import NavBar from '../components/NavBar';
import { exo2, orbitron } from './fonts';
import { Metadata } from 'next';

interface LayOutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: {
    template: '%s | Indie Gamer',
    default: 'Indie Gamer',
  },
};

export default function RootLayout({ children }: LayOutProps) {
  return (
    <html lang='en' className={`${orbitron.variable} ${exo2.variable}`}>
      <body className='bg-orange-50 flex flex-col  px-4 py-2 min-h-screen'>
        <header>
          <NavBar />
        </header>
        <main className='grow py-3'>{children}</main>
        <footer className='border-t py-3 text-center text-xs'>[footer]</footer>
      </body>
    </html>
  );
}
