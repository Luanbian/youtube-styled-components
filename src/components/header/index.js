import './header.css';

export default function Header(){
    return(
        <header>
            <div className="menu">
                <img src="./img/menu.png" style={{width: 18, height: 16}}/>
            </div>
            <div className="logo">
                <img src="./img/youtube-logo.png" style={{width: 91, height: 20}}/>
            </div>
            <div>
                <input type="text" placeholder="pesquisar"/>
            </div>
            <div>
                <img src="./img/microphone.png" />
            </div>
            <div>
                <img src="./img/video-camera.png" />
            </div>
            <div>
                <img src="./img/grid.png" />
            </div>
            <div>
                <img src="./img/bell.png" />
            </div>
            <div>
                <div id="user"></div>       
            </div>
        </header>
    );
}