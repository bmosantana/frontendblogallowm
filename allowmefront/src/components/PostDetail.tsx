import React from 'react';
import { Post } from '../types/types';

interface PostProps {
  post: Post;
}

const PostDetail: React.FC<PostProps> = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>Author: {post.author}</p>
      <p>Date: {post.date.toLocaleDateString()}</p>
    </div>
  );
};

export default PostDetail;