import React from 'react';
import Post from './Post';

const PostList = ({ posts }) => {
  return (
    <div className="row">
      {posts.map(post => (
        <div className="col-md-6" key={post.id}>
          <Post post={post} />
        </div>
      ))}
    </div>
  );
};

export default PostList;
