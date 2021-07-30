import React from 'react';
import Header from '../Header';
import InputArea from './InputArea';
import PreArea from './PreArea';
import Sidebar from './Sidebar';
import './App.css';

export default function App() {
  
  return (
    <section className="container">
      <section className="header"><Header /></section>
      <section className="sidebar"><Sidebar /></section>
      <section className="form"><InputArea /></section>
      <section className="pre"><PreArea /></section>
    </section>
  );
}



