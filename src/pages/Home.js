import React from 'react';
import PostList from '../components/PostLis';

const Home = () => {
  const posts = [
    { id: 1, title: 'My First Post', excerpt: 'This is the excerpt for my first post.' },
    { id: 2, title: 'Another Post', excerpt: 'This is the excerpt for another post.' },
  ];

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Welcome to Earn cuan</h1>
      <PostList posts={posts} />
    </div>
  );
};

export default Home;
