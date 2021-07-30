import React from 'react';
import './inputArea.css';

const InputArea = ({ url, method, onUrlChange, onSubmit, onMethodChange }) => {
  return <form className="actualForm" onSubmit={onSubmit}>
    <input placeholder="URL" className="searchBar" value={url} 
      onChange={onUrlChange}></input>
    <section className="options">
      <input id="get" type="radio" name="method" value="GET" 
        method={method} onChange={onMethodChange}></input> 
      <label htmlFor="get">GET</label>
      <input id="post" type="radio" name="method" value="POST"
        method={method} onChange={onMethodChange}></input> 
      <label htmlFor="post">POST</label>
      <input id="put" type="radio" name="method" value="PUT"
        method={method} onChange={onMethodChange}></input> 
      <label htmlFor="put">PUT</label>
      <input id="patch" type="radio" name="method" value="PATCH"
        method={method} onChange={onMethodChange}></input> 
      <label htmlFor="patch">PATCH</label>
      <input id="delete" type="radio" name="method" value="DELETE"
        method={method} onChange={onMethodChange}></input> 
      <label htmlFor="delete">DELETE</label>
      <button>Go!</button>
    </section>
    <textarea placeholder="Raw JSON Body" name="body"></textarea>
  </form>;
};

export default InputArea;
