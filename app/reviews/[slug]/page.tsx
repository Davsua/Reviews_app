import React from 'react';
import { GetStaticPaths } from 'next';
import { GetStaticProps } from 'next';
import Heading from '../../../components/Heading';
import { getReview, getSlugs } from '../../../lib/reviews';
import ShareButtons from '../../../components/ShareButtons';

export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params: { slug } }) {
  // props trae el slug en: params.slug
  const review = await getReview(slug);
  return {
    title: review.title,
  };
}

export default async function ReviewPage({ params: { slug } }) {
  const review = await getReview(slug);
  //console.log(slug);

  return (
    <>
      <div>
        <Heading>{review.title}</Heading>
        <div className='flex gap-3 items-baseline'>
          <p className='italic pb-2'>{review.date}</p>
          <ShareButtons />
        </div>
        <img src={review.image} alt='stardew-valley' width='640' height='360' className='mb-2 rounded' />
        <article dangerouslySetInnerHTML={{ __html: review.body }} className='max-w-screen-sm prose' />
      </div>
    </>
  );
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const slugs = await getSlugs();

  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    //fallback: false
    fallback: 'blocking', // permite encontrar la peticion asi no se haya pasado inicialmente (ej: pokemon 152)
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;
  let game = await getReview(slug);

  return {
    props: {
      game,
    },
  };
};
