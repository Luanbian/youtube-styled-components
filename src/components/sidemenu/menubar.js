import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './menubar.css'

export default function sidemenu() {
  return (
    <Menu>
      <hr className="hrbar"></hr>
      <div className="menu-item homeinit">
        <div className="elements-init">
          <img src="./img/home.png" alt="imagem-home"/>
          <p className="text init"> Início </p>
        </div>
      </div>

      <div className="menu-item">
        <div className="elements-init">
          <img src="./img/explore.png" alt="imagem-bussola"/>
          <p className="text init"> Explorar </p>
        </div>
      </div>

      <div className="menu-item">
        <div className="elements-init">
          <img src="./img/subscriptions.png" alt="imagem-inscrições"/>
          <p className="text init"> Inscrições </p>
        </div>
      </div>

      <hr className="hrbar"></hr>

      <div className="menu-item">
        <div className="elements-init">
          <img src="./img/library.png" alt="imagem-library"/>
          <p className="text init"> Biblioteca </p>
        </div>
      </div>

      <div className="menu-item">
        <div className="elements-init">
          <img src="./img/history.png" alt="imagem-history"/>
          <p className="text init"> Histórico </p>
        </div>
      </div>

      <div className="menu-item">
        <div className="elements-init">
          <img src="./img/yourVideos.png" alt="imagem-slideshow"/>
          <p className="text init"> Seus vídeos </p>
        </div>
      </div>

      <div className="menu-item">
        <div className="elements-init">
          <img src="./img/clock.png" alt="imagem-relogio"/>
          <p className="text init"> Assistir mais tarde </p>
        </div>
      </div>

      <div className="menu-item">
        <div className="elements-init">
          <img src="./img/like.png" alt="imagem-like"/>
          <p className="text init"> Vídeos marcados co.. </p>
        </div>
      </div>

      <div className="menu-item">
        <div className="elements-init">
          <img src="./img/arrowDown.png" alt="imagem-arrowdown"/>
          <p className="text init"> Mostrar mais </p>
        </div>
      </div>

      <hr className="hrbar"></hr>
    </Menu>
  );
};