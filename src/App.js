import Header from "./components/header/index";
import Slideshow from './components/categories/index';

export default function App(){
    return(
        <div>
            <Header />
            <Slideshow />
            <div className="app">
                <h1>Teste</h1>
            </div>
        </div>
    );
}