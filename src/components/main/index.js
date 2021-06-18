import React from 'react';
import './main.css';
import database from './database';

export default function Main() {
    return(
        <div className="main-total">
            {database.map(database => (
                <div className="card">
                    <div className="Thumb"> 
                        {database.image}
                        <div className="time">
                            {database.time}
                        </div>
                    </div>
                    <div className="card-inf">
                        {database.imageicon} 
                        <div className="video-title">
                            {database.title}
                        </div>
                    </div>
                    <div className="canal-name">
                        {database.name}
                    </div>
                    <div className="vistime">
                        {database.vistime}
                    </div>
                </div>
            ))}
        </div>
    );
}