import React from 'react';
import './categories.css';

export default function categories(){
    return(
        <header>
            <hr></hr>
           <div className="CaixaTotal">
                <div className="categoria tudo">
                    Tudo
                </div>
                <div className="categoria mixes">
                    Mixes
                </div>
                <div className="categoria musica">
                    Música
                </div>
                <div className="categoria cdc">
                    Ciência da Computação
                </div>
                <div className="categoria musica">
                    Xadrez
                </div>
                <div className="categoria js">
                    Javascript
                </div>
                <div className="categoria musica">
                    MySQL
                </div>
                <div className="categoria node">
                    Node.js
                </div>
                <div className="categoria html">
                    HTML e CSS
                </div>
                <div className="categoria html">
                    GIT e GitHub
                </div>
                <div className="categoria tech">
                    Tecnologia
                </div>
                <div className="categoria cdc">
                    Desenvolvimento Web
                </div>
                <button className="button"></button>
                <img src="./img/next.png" className="img"/>  
           </div>
           <hr></hr>
        </header>
    )
}