import React from 'react';
import { Post } from '../types/types';
import UltimaNoticiaDetail from './UltimaNoticiaDetail';

interface UltimaNoticiaListProps {
    //No macro do type, tudo é uma noticia do "tipo" Post
    posts: Post[];
}

const UltimaNoticiaList: React.FC<UltimaNoticiaListProps> = ({ posts }) => {
    return (
        <div>
            {posts.map((post) => (
                <UltimaNoticiaDetail key={post.id} post={post} />
            ))}
        </div>
    );
};

export default UltimaNoticiaList;