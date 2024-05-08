import React, { useState } from 'react';
import axios from 'axios';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      title,
      body,
    };

    axios.post('https://jsonplaceholder.typicode.com/posts', data)
      .then(response => {
        console.log(response);
        alert('Post adicionado com sucesso!');
      });
  };

  return (
    <div>
      <h2>Adicionar Novo Post</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Título:
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        </label>
        <br />
        <label>
          Corpo:
          <textarea value={body} onChange={e => setBody(e.target.value)} />
        </label>
        <br />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default PostForm;
