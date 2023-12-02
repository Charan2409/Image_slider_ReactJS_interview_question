import React from 'react';
import './style.css';

import Header from './components/Header';
import ImageSlider from './components/ImageSlider';

export default function App() {
  return (
    <div className="App">
      <Header name="Carousel " />
      <ImageSlider />
    </div>
  );
}
