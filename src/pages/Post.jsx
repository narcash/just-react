import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState('');
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(json => setPost(json));
  }, []);
  return (
    <div>
      <p>Post ID {post.id}</p>
      <p>Body Post {post.body}</p>
    </div>
  );
};

export default Post;
