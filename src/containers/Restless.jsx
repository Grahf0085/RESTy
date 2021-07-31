import React, { Component } from 'react';
import { apiUrl } from '../services/apiSearch';
import Header from '../components/Header';
import InputArea from '../components/InputArea';
import PreArea from '../components/PreArea';
import Sidebar from '../components/Sidebar';
import { setMethod, setUrl } from '../services/utils.js';

export default class Restless extends Component {

  state = {
    loading: true,
    url: '',
    body: 'Hello. I am bored. PLEASE make a fetch!',
    method: '',
    putBody: ''
  };

  handleSubmit = async (e) => {
    const { url, method, putBody } = this.state;
    e.preventDefault();
    setMethod(method);
    setUrl(url);
    const apiResponse = await apiUrl(url, method, putBody);
    this.setState({ body: apiResponse, method, loading: false });
  }

  handleUrlChange = ({ target }) => {
    this.setState({ url: target.value });
  };

  handleMethodChange = ({ target }) => {
    this.setState({ method: target.value });
  };

  handlePutChange = ({ target }) => {
    this.setState({ putBody: target.value });
  };

  async componentDidMount() {
    this.setState({ loading: false });
  }

  render() {
    const { url, method, body, putBody, loading } = this.state;

    if(loading) return <h1>Loading...</h1>;

    return (
      <section className="container">
        <section className="header"><Header /></section>
        <section className="sidebar"><Sidebar /></section>
        <section className="form"><InputArea url={url} method={method} 
          putBody={putBody} onUrlChange={this.handleUrlChange} 
          onMethodChange={this.handleMethodChange} 
          onPutChange={this.handlePutChange}
          onSubmit={this.handleSubmit}/></section>
        <section className="pre"><PreArea body={body}/></section>
      </section>
    );
  }
}
