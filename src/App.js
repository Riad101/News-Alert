import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import Header from './Components/Header/Header';
import TopHeadline from './Components/TopHeadline/TopHeadline';

function App() {
  return (
    <Container >
      
      <Header></Header>
      <TopHeadline></TopHeadline>
      
    </Container>
  );
}

export default App;
