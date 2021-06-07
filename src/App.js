import Header from "./components/header/index";
import Slideshow from './components/categories/index';
import Sidebar from './components/sidebar/index';

export default function App(){
    return(
        <div>
            <Header />
            <Slideshow />
            <Sidebar />
            <div className="app">
            </div>
        </div>
    );
}