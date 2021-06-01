import './header.css';

export default function Header(){
    return(
        <header>
            <div className="logo">
                <img src="./img/youtube-logo.png" style={{width: 91, height: 20}}/>
            </div>
            <div className="menu">
                <img src="./img/menu.png" style={{width: 18, height: 16}}/>
            </div>
            <div>
                <input type="text" placeholder="pesquisar"/>
            </div>
        </header>
    );
}