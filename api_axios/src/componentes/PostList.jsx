import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyledPostList, StyledPostItem } from '../styles/Posts';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
      });
  }, []);

  return (
    <StyledPostList>
      <h2>Posts</h2>
      <ul>
        {posts.map(post => (
          <StyledPostItem key={post.id}>
            <a href={`/posts/${post.id}`}>
              <h3>{post.title}</h3>
              <p>{post.body.slice(0, 100)}...</p>
            </a>
          </StyledPostItem>
        ))}
      </ul>
    </StyledPostList>
  );
};

export default PostList;
