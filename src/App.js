import Header from "./components/header/index";
import Slideshow from './components/categories/index';
import Sidebar from './components/sidebar/index';
import Menubar from './components/sidemenu/menubar';
import Main from './components/main/index';

export default function App(){
    return(
        <div>
            <Header />
            <Menubar />
            <Slideshow />
            <Sidebar />
            <div className="app">
                <Main />
            </div>
        </div>
    );
}