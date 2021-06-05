import React from 'react';
import ReactDOM from 'react-dom';
import './camera.css'

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="position">
      <div className="warning">
        Enviar video
      </div>
      <div className="warning">
        Transmitir ao vivo
      </div>
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true}
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  }
  
  render() {
    return (
      <div>
          <WarningBanner warn={this.state.showWarning} />
        <a onClick={this.handleToggleClick}>
          {this.state.showWarning 
          ? 
          <span data-tooltip-camera="criar">
            <img src="./img/video-call.png" alt="camera" className="camera"/>
          </span> 
          : 
          <span data-tooltip-camera="criar">
            <img src="./img/video-call.png" alt="camera" className="camera"/>
          </span>
          }
        </a>
      </div>
    );
  }
}

ReactDOM.render(<Page></Page>,document.getElementById('camera'));
