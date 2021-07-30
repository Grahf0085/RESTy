import React from 'react';
import './inputArea.css';

const InputArea = () => {
  return <form className="actualForm">
    <input placeholder="URL" className="searchBar"></input>
    <section className="options">
      <input id="get" type="radio" name="method" value="GET"></input> 
      <label htmlFor="get">GET</label>
      <input id="post" type="radio" name="method" value="POST"></input> 
      <label htmlFor="post">POST</label>
      <input id="put" type="radio" name="method" value="PUT"></input> 
      <label htmlFor="put">PUT</label>
      <input id="patch" type="radio" name="method" value="PATCH"></input> 
      <label htmlFor="patch">PATCH</label>
      <input id="delete" type="radio" name="method" value="DELETE"></input> 
      <label htmlFor="delete">DELETE</label>
      <button>Go!</button>
    </section>
    <textarea placeholder="Raw JSON Body" name="body"></textarea>
  </form>;
};

export default InputArea;
