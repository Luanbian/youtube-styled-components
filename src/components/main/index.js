import React from 'react';
import './main.css';
import database from './database';

export default function Main() {
    return(
        <div>
            {database.map(database => (
                <div>
                    <div className="card">
                        <div> 
                            {database.image}{/* Imagem do video */}
                        </div>
                        <div>
                            {/* Tempo do video */}
                        </div>
                        <div>
                            {/* Titulo do video */}
                        </div>
                        <div>
                            {/* icone do criador do video */}
                        </div>
                        <div>
                            {/* Nome do canal */}
                        </div>
                        <div>
                            {/* Num. de visualizações . Tempo que foi postado */}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}