// components/Meta.tsx

import Head from 'next/head';

interface MetaTypes {
  title: string;
  description: string;
  image: string;
  url: string;
}

const Meta: React.FC<MetaTypes> = ({ title, description, image, url }) => {
  return (
    <Head>
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="https://twitter.com/naetocharlie/" />
      <meta name="twitter:creator" content="https://twitter.com/naetocharlie/" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Open Graph */}
      <meta property="og:url" content={url} />
      <meta property="og:type" content="Portfolio Website" />
      <meta property="og:title" content={title}  />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Head>
  );
};

export default Meta;
