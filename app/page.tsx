import React, { useEffect } from 'react';
import Heading from '../components/Heading';
import Link from 'next/link';
import { getFeaturedReview } from '../lib/reviews';

export default async function HomePage() {
  const review = await getFeaturedReview();
  //console.log('[HomePage] rendering');

  return (
    <div>
      <Heading>Indie Gamer</Heading>
      <p className='pb-3'>only the best indie games, reviewed for you</p>
      <div className='bg-white border shadow w-80 rounded hover:shadow-xl md:w-auto'>
        <Link href={`/reviews/${review.slug}`} className='flex flex-col sm:flex-row'>
          <img
            src={review.image}
            alt={review.title}
            width='320'
            height='180'
            className='rounded-t sm:rounded-l sm:rounded-r-none'
          />
          <h2 className='font-orbitron py-1 text-center sm:px-2'>{review.title}</h2>
        </Link>
      </div>
    </div>
  );
}
