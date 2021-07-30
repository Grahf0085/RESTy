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
    const { url } = this.state;
    const apiResponse = await apiUrl(url);
    this.setState({ body: apiResponse, loading: false });
  }

  handleChange = ({ target }) => {
    this.setState({ url: target.value });
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
        <section className="form"><InputArea url={url}
          onChange={this.handleChange} 
          onSubmit={this.handleSubmit}/></section>
        <section className="pre"><PreArea body={body}/></section>
      </section>
    );
  }
}
