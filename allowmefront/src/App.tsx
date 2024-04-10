import React, { useState } from 'react';
import PostList from './components/PostList';
import './App.css';

const posts = [
  {
    id: 1,
    title: 'My first blog post',
    content: 'This is the content of my first blog post.',
    author: 'John Doe',
    date: new Date(),
  },
  {
    id: 2,
    title: 'My second blog post',
    content: 'This is the content of my second blog post.',
    author: 'Jane Doe',
    date: new Date(),
  },
];

const App: React.FC = () => {
  const [postsState, setPostsState] = useState(posts);

  return (
    <div className="App">
      <PostList posts={postsState} />
    </div>
  );
};

export default App;