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
                        <div className="video-title">
                            {database.imageicon} {database.title}
                        </div>
                        <div>
                            {database.name}
                        </div>
                        <div>
                            {database.vistime}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}