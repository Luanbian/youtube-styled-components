import React, { Component } from 'react';

class Equipe extends Component{
    render(){
        return(
            <div>
                <h2>{this.props.nome}</h2>
            </div>
        );
    }
}

function App(){
    return (
        <div>
            <h1>Conheça nossa equipe: </h1>
            <Equipe nome="Luan"/>
        </div>
    )
}

export default App;