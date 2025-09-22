// src\components\Header\index.jsx
import { Link } from "react-router-dom";
import './style.css';
import logo from '../../assets/logo.png';

function Header() {
  return (
    <header className="header">
      <div className="header_wrap">
        <Link to="/" className="brand">
          {/* Removi a imagem do logo */}
          {/* <img src={logo} alt="Logo da Zip Náutica" /> */}
          <span></span>
        </Link>

        {/* Removi a navegação inteira */}
      </div>
    </header>
  );
}

export default Header;


