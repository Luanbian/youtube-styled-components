import React from 'react';
import './sidebar.css';

export default function Sidebar(){
    return(
        <section>
            <div className="sidebar inicio">
                <img src="./img/home.png"/>
                <p className="pardif"> Início </p>
            </div>
            <div className="sidebar">
                <img src="./img/explore.png"/>
                <p className="explor"> Explorar </p>
            </div>
            <div className="sidebar">
                <img src="./img/subscriptions.png"/>
                <p className="subs"> Inscrições </p>
            </div>
            <div className="sidebar">
                <img src="./img/library.png"/>
                <p className="subs"> Biblioteca </p>
            </div>
        </section>
    );
}