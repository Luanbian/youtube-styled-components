import React from 'react';
import './categories.css';
import './animahov.css';

export default function categories(){
    return(
        <header>
            <hr></hr>
           <div className="CaixaTotal">
               <span data-toolti="Tudo">
                    <div className="categoria tudo">
                        Tudo
                    </div>
                </span>
                <span data-toolti="Mixes">
                    <div className="categoria mixes">
                        Mixes
                    </div>
                </span>
                <span data-toolti="Música">
                    <div className="categoria musica">
                        Música
                    </div>
                </span>
                <span data-toolti="Ciência da Computação">
                    <div className="categoria cdc">
                        Ciência da Computação
                    </div>
                </span>
                <span data-toolti="Xadrez">
                    <div className="categoria musica">
                        Xadrez
                    </div>
                </span>
                <span data-toolti="JavaScript">
                    <div className="categoria js">
                        Javascript
                    </div>
                </span>
                <span data-toolti="MySQL">
                    <div className="categoria musica">
                        MySQL
                    </div>
                </span>
                <span data-toolti="Node.JS">
                    <div className="categoria node">
                        Node.js
                    </div>
                </span>
                <span data-toolti="HTML e CSS">
                    <div className="categoria html">
                        HTML e CSS
                    </div>
                </span>
                <span data-toolti="GIT e Github">
                    <div className="categoria html">
                        GIT e GitHub
                    </div>
                </span>
                <span data-toolti="Tecnologia">
                    <div className="categoria tech">
                        Tecnologia
                    </div>
                </span>
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