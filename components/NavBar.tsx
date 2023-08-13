import Link from 'next/link';
import React from 'react';
import { orbitron } from '../app/fonts';

const NavBar = () => {
  return (
    <nav>
      <ul className='border-b flex gap-2 '>
        <li className='m-1'>
          <Link href='/' className='font-bold font-orbitron text-orange-800 hover:underline'>
            Indie Gamer
          </Link>
        </li>
        <li className='ml-auto'>
          <Link href='/reviews' className='font-exo2 text-orange-800 hover:underline'>
            Reviews
          </Link>
        </li>
        <li>
          <Link href='/about' className='font-exo_2 text-orange-800 hover:underline'>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
