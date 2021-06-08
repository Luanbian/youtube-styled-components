import Header from "./components/header/index";
import Slideshow from './components/categories/index';
import Sidebar from './components/sidebar/index';
import Menubar from './components/sidemenu/menubar';
export default function App(){
    return(
        <div>
            <Menubar />
            <Header />
            <Slideshow />
            <Sidebar />
            <div className="app">
            </div>
        </div>
    );
}