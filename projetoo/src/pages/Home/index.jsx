// src\pages\Home\index.jsx
import { Link } from 'react-router-dom';
import './style.css';
import banner from '../../assets/logo.png';

function Home() {
  return (
    <div className="home">
      <section className="hero" style={{ textAlign: 'center' }}>
        <h1 className="hero__title">ZIP NÁUTICA</h1>

        <div className="hero__image" style={{ margin: '20px auto' }}>
          <img 
            src={banner} 
            alt="Coleção da Zip Náutica" 
            style={{ maxWidth: '300px', width: '100%', height: 'auto' }} 
          />
        </div>

        <div className="hero_text" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2>Estilo que navega com você</h2>
          <p>Na Zip Náutica, você encontra moda casual e náutica com autenticidade, conforto e elegância.</p>

          <div className="hero__cta" style={{ marginTop: '20px' }}>
            <Link to="/servicos" className="btn primary" style={{ marginRight: '10px' }}>Ver Coleções</Link>
            <Link to="/fale-conosco" className="btn">Fale Conosco</Link>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>O que oferecemos</h2>
        <div className="grid cols-3">
          <div className="card">
            <h3>Moda Náutica</h3>
            <p>Estilo único inspirado no mar, perfeito para o seu dia a dia.</p>
          </div>
          <div className="card">
            <h3>Qualidade Premium</h3>
            <p>Peças com tecidos de alto padrão e acabamento refinado.</p>
          </div>
          <div className="card">
            <h3>Atendimento Personalizado</h3>
            <p>Equipe pronta para te ajudar a montar o look ideal.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
