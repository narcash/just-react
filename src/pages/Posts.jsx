import React, { useState, useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then(response => response.json())
      .then(json => setPosts(json));
  }, []);
  return (
    <div className='pages'>
      <p>Posts</p>
      <div>
        {posts.map(post => (
          <div key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
