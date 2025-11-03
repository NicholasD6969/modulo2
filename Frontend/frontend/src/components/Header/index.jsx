// frontend\src\components\Header\index.jsx
 import { Link } from 'react-router-dom';
import './style.css';

function Header() {
    return (
        <header className="header">
            <div className='header-container'> 
                <div className='logo'>Gerenciamento de Usuários</div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">Cadastrar</Link>
                    <Link to="/contact">Listar Usuários</Link>
                </nav>
            </div>
        </header>
    );
}
export default Header;