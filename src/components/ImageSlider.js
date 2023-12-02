import React, { useEffect, useState } from 'react';
import '../style.css';

const data = [
  'https://w0.peakpx.com/wallpaper/787/1008/HD-wallpaper-doodle-doodle-draw-random-expression-thumbnail.jpg',
  'https://e1.pxfuel.com/desktop-wallpaper/930/831/desktop-wallpaper-mikky-on-random-random-gaming-thumbnail.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqyTkyX_ZhbB4u393ttpf31WjV848YyNpEkw&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUtG02uYbi-_bqPhr2hx7nCeUMlxZCQBETsg&usqp=CAU',
];

const ImageSlider = () => {
  const [page, setPage] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      handleNext();
    }, 3000);
  }, [page]);

  const handlePrev = (e) => {
    if (page === 0) {
      setPage(data.length - 1);
    } else {
      setPage(page - 1);
    }
  };

  const handleNext = (e) => {
    if (page === data.length - 1) {
      setPage(0);
    } else {
      setPage(page + 1);
    }
  };

  return (
    <div>
      <h1>Images</h1>
      <div className="carousel">
        <button onClick={handlePrev}>Previous</button>
        {data.map((url, index) => (
          <img
            className={page === index ? 'active-image' : 'not-active'}
            src={url}
            style={{ width: '200px', height: '200px' }}
          />
        ))}
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default ImageSlider;
