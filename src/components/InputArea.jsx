import React from 'react';
import './inputArea.css';
import PropTypes from 'prop-types';


const InputArea = ({ url, method, putBody, onUrlChange, 
  onSubmit, onMethodChange, onPutChange }) => {
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
    <textarea placeholder="Raw JSON Body" name="body" 
      value={putBody} onChange={onPutChange}></textarea>
  </form>;
};

InputArea.propTypes = {
  url: PropTypes.string,
  method: PropTypes.string,
  putBody: PropTypes.string,
  onUrlChange: PropTypes.func,
  onSubmit: PropTypes.func,
  onMethodChange: PropTypes.func,
  onPutChange: PropTypes.func
};

export default InputArea;
