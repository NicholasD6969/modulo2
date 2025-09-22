// src\components\Footer\index.jsx

import './style.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrap">
        <div><strong>Zip Náutica</strong> - CNPJ: 00.000.000/0000-00</div>
        <div>Rua Da Paz, 930 - Complexo do Rio Sena - Salvador - SSA</div>
        <div className="copy">© {new Date().getFullYear()} - Zip Náutica</div>
      </div>
    </footer>
  );
}

export default Footer;
