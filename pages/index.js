import Head from 'next/head';
import ArticleList from '../components/ArticleList';

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>My Title</title>
        <meta name='keywords' content='web development, programming' />
      </Head>

      <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  // fetch 6 posts from jsonplaceholder.typicode.com
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=6'
  );

  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
};
