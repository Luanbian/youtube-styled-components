import Header from "./components/header/index";
import Categories from './components/categories/index';

export default function App(){
    return(
        <div>
            <Header />
            <Categories />
            <div className="app">
                <h1>Teste</h1>
            </div>
        </div>
    );
}