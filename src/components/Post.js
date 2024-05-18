import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h2 className="card-title">{post.title}</h2>
        <p className="card-text">{post.excerpt}</p>
        <Link to={`/post/${post.id}`} className="btn btn-primary">Pelajari selanjutnya</Link>
      </div>
    </div>
  );
};

export default Post;
