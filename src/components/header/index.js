import './header.css';

export default function Header(){
    return(
        <header>
            <div className="ContainerTotal">

                <div className="ContainerLeft">
                    <div className="element-left menu">
                        <img src="./img/menu.png" style={{width: 18, height: 16}} alt="menu" />
                    </div>
                    <div className="element-left logo">
                        <img src="./img/youtube-logo.png" style={{width: 91, height: 20}} alt="logo"/>
                    </div>
                </div>

                <div className="ContainerCenter">
                    <div className="element-center">
                        <input type="text" placeholder=" Pesquisar" className="search"/>
                    </div>
                    <div className="searchback">
                        <img src="./img/search.png" className="search-icon" alt="lupinha" style={{width: 18, height: 18}}/>
                    </div>
                    <img src="./img/keyboard.png" alt="teclado" id="teclado" />
                    <div className="element-center">
                        <img src="./img/microphone.png"  alt="microfone" />
                    </div>
                </div>

                <div className="ContainerRight">
                    <div className="element-right camera">
                        <img src="./img/video-call.png" alt="camera" className="camera"/>
                    </div>
                    <div className="element-right grid">
                        <img src="./img/grid.png" alt="grid"/>
                    </div>
                    <div className="element-right bell">
                        <img src="./img/bell.png" alt="bell" style={{width: 24, height: 24}}/>
                    </div>
                    <div className="element-right user"></div>
                </div>
            </div>
        </header>
    );
}