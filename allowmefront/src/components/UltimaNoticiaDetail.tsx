import React from 'react';
import { Post } from '../types/types';

interface UltimaNoticiaDetailProps {
    //usando a mesma types das noticias principais, 
    //porque o único item que não irei usar nas ultimas 
    //noticias é o texto completo
    post: Post;
}

const UltimaNoticiaDetail: React.FC<UltimaNoticiaDetailProps> = ({ post }) => {
    return (
        <div className='ultimas-noticias-detail'>
            <h3>{post.titulo}</h3>
            <p>Author: {post.autor}</p>
            <p>Date: {post.dt_criacao.toLocaleDateString()}</p>
            <hr></hr>
        </div>
        
    );
};

export default UltimaNoticiaDetail;