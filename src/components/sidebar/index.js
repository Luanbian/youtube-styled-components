import React from 'react';
import './sidebar.css';

export default function Sidebar(){
    return(
        <section>
            <div className="inicio">
                <img src="./img/home.png" className="home"/>
                <p className="pardif"> Início </p>
            </div>
        </section>
    );
}