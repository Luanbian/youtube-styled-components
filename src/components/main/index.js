import React from 'react';
import './main.css';
import database from './database';

export default function Main() {
    return(
        <div>
            {database.map(database => (
                <div>
                    <div className="card">
                        <div className="Thumb"> 
                            {database.image}
                            <div className="time">
                                {database.time}
                            </div>
                        </div>
                        <div>
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
                </div>
            ))}
        </div>
    );
}