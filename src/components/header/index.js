import './header.css';

export default function Header(){
    return(
        <header>
            <div className="ContainerTotal">

                <div className="ContainerLeft">
                    <div className="element-left menu">
                        <img src="./img/menu.png" style={{width: 18, height: 16}} />
                    </div>
                    <div className="element-left logo">
                        <img src="./img/youtube-logo.png" style={{width: 91, height: 20}}/>
                    </div>
                </div>

                <div className="ContainerCenter">
                    <div className="element-center">
                        <input type="text" placeholder="Pesquisar" className="search"/>
                    </div>
                    <div className="searchback">
                        <img src="./img/search.png" className="search-icon"/>
                    </div>
                    <div className="element-center">
                        <img src="./img/microphone.png" />
                    </div>
                </div>

                <div className="ContainerRight">
                    <div className="element-right camera">
                        <img src="./img/video-camera.png" />
                    </div>
                    <div className="element-right grid">
                        <img src="./img/grid.png" />
                    </div>
                    <div className="element-right bell">
                        <img src="./img/bell.png" />
                    </div>
                    <div className="element-right user"></div>
                </div>
            </div>
        </header>
    );
}