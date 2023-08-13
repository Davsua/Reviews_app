import { readdir, readFile } from 'node:fs/promises'; // lee directorios || lee .md
import { marked } from 'marked'; //.md a html
import matter from 'gray-matter'; //obj de .md

export async function getReview(slug) {
  const text = await readFile(`./content/reviews/${slug}.md`, 'utf-8');
  const {
    content,
    data: { title, date, image },
  } = matter(text);
  const body = marked(content);

  //console.log({ slug, title, date, image, body });
  return { slug, title, date, image, body };
}

export async function getReviews() {
  const slugs = await getSlugs();
  //console.log(slugs);
  let reviews = [];
  for (const slug of slugs) {
    const review = await getReview(slug);
    reviews.push(review);
  }
  reviews.sort((a, b) => b.date.localeCompare(a.date)); // organizar de mas reciente a menos
  return reviews;
}

export async function getSlugs() {
  const files = await readdir('./content/reviews');
  //console.log(files);
  return files.filter((file) => file.endsWith('.md')).map((file) => file.split('.').shift());
}

export async function getFeaturedReview() {
  const reviews = await getReviews();
  return reviews[0];
}
