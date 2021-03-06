import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import Lista from './ArrayInsc'
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

      <p className="title"> INSCRIÇÕES </p>

      <div className="elements-init">
        {Lista.map(Lista =>(
          <div className="insc-card">
            {Lista.image}
            <div className="init nome">
              {Lista.name}
            </div>
          </div>
        ))}
      </div>

      <div className="menu-item">
        <div className="elements-init">
          <img src="./img/arrowDown.png" alt="imagem-arrowdown"/>
          <p className="text init"> Mostrar mais 16 </p>
        </div>
      </div>
    
      <hr className="hrbar"></hr>

      <p className="title"> MAIS DO YOUTUBE </p>

      <div className="menu-item">
        <div className="elements-init">
          <img src="./img/youtubeprem.png" alt="imagem-youtube-premium"/>
          <p className="text init"> YouTube Premium </p>
        </div>
      </div>

      <div className="menu-item">
        <div className="elements-init">
          <img src="./img/filmes.png" alt="imagem-filmes"/>
          <p className="text init"> Filmes </p>
        </div>
      </div>

      <div className="menu-item">
        <div className="elements-init">
          <img src="./img/live.png" alt="imagem-ao-vivo"/>
          <p className="text init"> Ao vivo </p>
        </div>
      </div>

      <div className="menu-item">
        <div className="elements-init">
          <img src="./img/lamp.png" alt="imagem-lamp"/>
          <p className="text init"> Aprender </p>
        </div>
      </div>

      <div className="menu-item">
        <div className="elements-init">
          <img src="./img/trophy.png" alt="imagem-trofeu"/>
          <p className="text init"> Esportes </p>
        </div>
      </div>

      <hr className="hrbar"></hr>

      <div className="menu-item">
        <div className="elements-init">
          <img src="./img/settings.png" alt="imagem-config"/>
          <p className="text init"> Configurações </p>
        </div>
      </div>

      <div className="menu-item">
        <div className="elements-init">
          <img src="./img/flag.png" alt="imagem-flag"/>
          <p className="text init"> Histórico de denúnci.. </p>
        </div>
      </div>

      <div className="menu-item">
        <div className="elements-init">
          <img src="./img/help.png" alt="imagem-help"/>
          <p className="text init"> Ajuda </p>
        </div>
      </div>

      <div className="menu-item">
        <div className="elements-init">
          <img src="./img/feedback.png" alt="imagem-feedback"/>
          <p className="text init"> Enviar feedback </p>
        </div>
      </div>

      <hr className="hrbar"></hr>
      
      <p className="footer-paragraph">
        Sobre  Imprensa <br></br>
        Direitos autorais <br></br>
        Entre em contato <br></br>
        Criadores de conteúdo <br></br>
        Publicidade Desenvolvedores <br></br>
      </p>

      <p className="footer-paragraph">
        Termos  Privacidade <br></br>
        Política e segurança <br></br>
        Como funciona o YouTube <br></br>
        Testar os novos recursos <br></br>
      </p>
    </Menu>
  );
};