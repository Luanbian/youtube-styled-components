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
        Laravel
      </div>

      <div className="menu-item">
        Angular
      </div>

      <div className="menu-item">
        React
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