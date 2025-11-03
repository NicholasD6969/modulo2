// frontend\src\components\Header2\index.jsx
 import { Link } from 'react-router-dom';
import './style.css';

function Header() {
    return (
        <header className="header">
            <div className='header-container'> 
                <div className='logo'>Gerenciamento de Produtos</div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">Cadastrar</Link>
                    <Link to="/contact">Listar Produtos</Link>
                </nav>
            </div>
        </header>
    );
}
export default Header;