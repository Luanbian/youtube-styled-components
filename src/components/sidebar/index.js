import React from 'react';
import './sidebar.css';

export default function Sidebar(){
    return(
        <section className="section">
            <div className="sidebar inicio">
                <img src="./img/home.png" className="home" alt="home"/>
                <p className="pardif"> Início </p>
            </div>
            <div className="sidebar">
                <img src="./img/explore.png" className="icon" alt="bussola"/>
                <p className="explor"> Explorar </p>
            </div>
            <div className="sidebar">
                <img src="./img/subscriptions.png" className="icon" alt="inscritos"/>
                <p className="subs"> Inscrições </p>
            </div>
            <div className="sidebar">
                <img src="./img/library.png" className="icon" alt="biblioteca"/>
                <p className="libs"> Biblioteca </p>
            </div>
        </section>
    );
}