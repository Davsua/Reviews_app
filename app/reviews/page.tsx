import Link from 'next/link';
import React from 'react';
import Heading from '../../components/Heading';
import { getReviews } from '../../lib/reviews';

export const metadata = {
  title: 'Reviews',
};

export default async function ReviewsPage() {
  const reviews = await getReviews();

  return (
    <>
      <Heading>Reviews</Heading>
      <ul className='flex flex-row flex-wrap gap-3 m-auto'>
        {reviews.map((review) => (
          <li key={review.slug} className='bg-white mb-3 border shadow rounded w-80 hover:shadow-xl'>
            <Link href={`/reviews/${review.slug}`}>
              <img src={review.image} alt={review.title} width='320' height='180' className='rounded-t' />
              <h2 className='font-orbitron py-1 text-center'>{review.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
