import React, { Component } from 'react';
import { apiUrl } from '../services/apiSearch';
import Header from '../components/Header';
import InputArea from '../components/InputArea';
import PreArea from '../components/PreArea';
import Sidebar from '../components/Sidebar';

export default class Restless extends Component {

  state = {
    loading: true,
    url: '',
    body: [],
    method: ''
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { url, method } = this.state;
    console.log(method);
    const apiResponse = await apiUrl(url, method);
    this.setState({ body: apiResponse, method, loading: false });
  }

  handleUrlChange = ({ target }) => {
    this.setState({ url: target.value });
  };

  handleMethodChange = ({ target }) => {
    this.setState({ method: target.value });
  };

  async componentDidMount() {
    this.setState({ loading: false });
  }

  render() {
    const { url, method, body, loading } = this.state;

    if(loading) return <h1>Loading...</h1>;

    return (
      <section className="container">
        <section className="header"><Header /></section>
        <section className="sidebar"><Sidebar /></section>
        <section className="form"><InputArea url={url} method={method}
          onUrlChange={this.handleUrlChange} 
          onMethodChange={this.handleMethodChange}
          onSubmit={this.handleSubmit}/></section>
        <section className="pre"><PreArea body={body}/></section>
      </section>
    );
  }
}
