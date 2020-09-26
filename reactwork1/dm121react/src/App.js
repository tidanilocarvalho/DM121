import React from 'react';
import './styles/styles.css';
import Home from './pages/home';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <div id="container">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}
export default App;
