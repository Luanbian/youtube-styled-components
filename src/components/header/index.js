import React from 'react';
import './header.css';
import './animahover.css';

export default function Header(){  
    return(
        <header>
            <div className="ContainerTotal">
                <div className="ContainerLeft">
                    <div className="element-left menu">
                        <img src="./img/menu.png" style={{visibility: 'hidden'}} alt="menu" />
                    </div>
                    <div className="element-left logo">
                        <span data-tooltip="Página inicial do YouTube">
                            <img src="./img/youtube-logo.png" style={{width: 91, height: 20}} alt="logo" />
                        </span>
                    </div>
                </div>

                <div className="ContainerCenter">
                    <div className="element-center">
                        <input type="text" placeholder=" Pesquisar" className="search"/>
                    </div>
                    <div className="searchback">
                        <span data-tooltip-lupa="Pesquisar">
                            <img src="./img/search.png" className="search-icon" alt="lupinha" style={{width: 18, height: 18}}/>
                        </span>
                    </div>
                    <img src="./img/keyboard.png" alt="teclado" id="teclado" />
                    <div className="element-center">
                        <span data-tooltip-micro="Pesquisar com sua voz">
                            <img src="./img/microphone.png"  alt="microfone" />
                        </span>
                    </div>
                </div>

                <div className="ContainerRight">
                    <div className="element-right camera" id="camera"> 
                        <span data-tooltip-camera="criar">
                            <img src="./img/video-call.png" alt="camera" className="camera"/>
                        </span>
                    </div>
                    <div className="element-right grid">
                        <span data-tooltip-grid="Aplicativos do YouTube">
                            <img src="./img/grid.png" alt="grid"/>
                        </span>
                    </div>
                    <div className="element-right bell">
                        <span data-tooltip-bell="Notificações">
                            <img src="./img/bell.png" alt="bell" style={{width: 24, height: 24}}/>
                        </span>
                    </div>
                    <div className="element-right user"></div>
                </div>
            </div>
        </header>
    );
}