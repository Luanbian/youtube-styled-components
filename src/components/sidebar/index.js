import React from 'react';
import './sidebar.css';

export default function Sidebar(){
    return(
        <section>
            <div className="inicio">
                <img src="./img/home.png" className="home"/>
                <p className="pardif"> Início </p>
            </div>
            <div className="explorar">
                <img src="./img/explore.png" className="bussola"/>
                <p className="explor"> Explorar </p>
            </div>
            <div className="explorar">
                <img src="./img/subscriptions.png" className="bussola"/>
                <p className="subs"> Inscrições </p>
            </div>
        </section>
    );
}