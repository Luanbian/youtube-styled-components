import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './menubar.css'

export default props => {
  return (
    <Menu>
      <div className="menu-item">
        Home
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