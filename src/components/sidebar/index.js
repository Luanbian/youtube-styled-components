import React from 'react';
import './sidebar.css';

export default function Sidebar(){
    return(
        <section>
            <div className="sidebar inicio">
                <img src="./img/home.png" className="home"/>
                <p className="pardif"> Início </p>
            </div>
            <div className="sidebar">
                <img src="./img/explore.png" className="icon"/>
                <p className="explor"> Explorar </p>
            </div>
            <div className="sidebar">
                <img src="./img/subscriptions.png" className="icon"/>
                <p className="subs"> Inscrições </p>
            </div>
            <div className="sidebar">
                <img src="./img/library.png" className="icon"/>
                <p className="libs"> Biblioteca </p>
            </div>
        </section>
    );
}