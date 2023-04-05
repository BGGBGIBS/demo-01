
import React from 'react';
import style from './home.module.css';

const Home = () => {
  return (
    <div className={style.home}>
      <h1>Bienvenue sur Mon Site Web</h1>
      <p>Ceci est une page d'accueil</p>
      <img src="https://www.example.com/image.jpg" alt="Une image d'accueil" />
    </div>
  );
};

export default Home;