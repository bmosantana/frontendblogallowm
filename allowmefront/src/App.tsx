import React, { useState } from 'react';
import PostList from './components/PostList';
import UltimaNoticiaList from './components/UltimaNoticiaList'
import './App.css';

const posts = [
  {
    id: 1,
    autor: "Julio Verne",
    dt_criacao: new Date(),
    texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies placerat dictum. Integer hendrerit aliquet lectus vel convallis. Cras non sapien eu massa porta volutpat. Nam purus elit, venenatis ac eleifend eu, finibus at libero. Praesent suscipit pellentesque leo egestas malesuada. Proin metus urna, tempor blandit libero in, tristique auctor turpis. Praesent metus lectus, feugiat quis lacus ut, venenatis euismod augue.",
    titulo: "Noticia Um"
  },
  {
    id: 2,
    autor: "Kim Yoonhee",
    dt_criacao: new Date(),
    texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies placerat dictum. Integer hendrerit aliquet lectus vel convallis. Cras non sapien eu massa porta volutpat. Nam purus elit, venenatis ac eleifend eu, finibus at libero. Praesent suscipit pellentesque leo egestas malesuada. Proin metus urna, tempor blandit libero in, tristique auctor turpis. Praesent metus lectus, feugiat quis lacus ut, venenatis euismod augue.",
    titulo: "Noticia Dois"
  },
  {
    id: 3,
    autor: "Angela Verne",
    dt_criacao: new Date(),
    texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies placerat dictum. Integer hendrerit aliquet lectus vel convallis. Cras non sapien eu massa porta volutpat. Nam purus elit, venenatis ac eleifend eu, finibus at libero. Praesent suscipit pellentesque leo egestas malesuada. Proin metus urna, tempor blandit libero in, tristique auctor turpis. Praesent metus lectus, feugiat quis lacus ut, venenatis euismod augue.",
    titulo: "Noticia Tres"
  },
  {
    id: 4,
    autor: "Jane Aias",
    dt_criacao: new Date(),
    texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies placerat dictum. Integer hendrerit aliquet lectus vel convallis. Cras non sapien eu massa porta volutpat. Nam purus elit, venenatis ac eleifend eu, finibus at libero. Praesent suscipit pellentesque leo egestas malesuada. Proin metus urna, tempor blandit libero in, tristique auctor turpis. Praesent metus lectus, feugiat quis lacus ut, venenatis euismod augue.",
    titulo: "Noticia Quatro"
  },
  {
    id: 5,
    autor: "Isaiah",
    dt_criacao: new Date(),
    texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies placerat dictum. Integer hendrerit aliquet lectus vel convallis. Cras non sapien eu massa porta volutpat. Nam purus elit, venenatis ac eleifend eu, finibus at libero. Praesent suscipit pellentesque leo egestas malesuada. Proin metus urna, tempor blandit libero in, tristique auctor turpis. Praesent metus lectus, feugiat quis lacus ut, venenatis euismod augue.",
    titulo: "Noticia Cinco"
  }
]

const App: React.FC = () => {
  const [postsState, setPostsState] = useState(posts);

  return (
    <div className="App">
      <div className="container">
        <div className='noticias-list'>
          <PostList posts={postsState} />
        </div>
        <div className='ultimas-noticias'>
          <h2>Últimas Noticias</h2>
          <UltimaNoticiaList posts={postsState.slice(0,3)} />
        </div>
      </div>
    </div>
  );
};

export default App;