import React from 'react';
import { Post } from '../types/types';

interface PostProps {
  post: Post;
}

const PostDetail: React.FC<PostProps> = ({ post }) => {
  return (
    <div>
      <h2>{post.titulo}</h2>
      <p>{post.texto}</p>
      <p>Author: {post.autor}</p>
      <p>Date: {post.dt_criacao.toLocaleDateString()}</p>
    </div>
  );
};

export default PostDetail;