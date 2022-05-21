import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import Menu from 'components/Menu';
import Header from 'components/Header';

export default function AppRouter() {
    return (
        <main>
            <Router>
                <Menu/>
                <Header/>
                <Routes>
                    <Route path='/' element={<Inicio/>} />
                    <Route path='/cardapio' element={<Cardapio/>} />
                </Routes>
            </Router>
        </main>
    );
}