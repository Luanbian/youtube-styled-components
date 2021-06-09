import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './menubar.css'

export default function sidemenu() {
  return (
    <Menu>
      <hr className="hrbar"></hr>
      <div className="menu-item homeinit">
        <div className="elements-init">
          <img src="./img/home.png" />
          <p className="text init"> Início </p>
        </div>
      </div>

      <div className="menu-item">
        <div className="elements-init">
          <img src="./img/explore.png" />
          <p className="text init"> Explorar </p>
        </div>
      </div>

      <div className="menu-item">
        <div className="elements-init">
          <img src="./img/subscriptions.png" />
          <p className="text init"> Inscrições </p>
        </div>
      </div>

      <hr className="hrbar"></hr>

      <div className="menu-item">
        <div className="elements-init">
          <img src="./img/library.png" />
          <p className="text init"> Biblioteca </p>
        </div>
      </div>

      <div className="menu-item">
        Vue
      </div>

      <div className="menu-item">
        Node
      </div>
    </Menu>
  );
};