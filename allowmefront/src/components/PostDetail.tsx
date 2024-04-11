import React from 'react';
import { Post } from '../types/types';

interface PostProps {
  post: Post;
}

const PostDetail: React.FC<PostProps> = ({ post }) => {
  return (
    <div className='noticia-detail'>
      <h2>{post.titulo}</h2>
      <p>Autor: {post.autor}</p>
      <p>Date: {post.dt_criacao.toLocaleDateString()}</p>
      <p>{post.texto}</p>
    </div>
  );
};

export default PostDetail;