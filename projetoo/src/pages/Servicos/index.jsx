// src\pages\Servicos\index.jsx
import './style.css';

function Servicos() {
  return (
    <section className="servicos">
      <h1>Coleções da Zip Náutica</h1>
      <p>Explore nossas linhas de roupas com estilo e personalidade.</p>

      <div className="grid cols-3">
        <div className="card">
          <h3>Casual Urbano</h3>
          <p>Looks confortáveis para o dia a dia, sem abrir mão do estilo.</p>
        </div>

        <div className="card">
          <h3>Náutica Premium</h3>
          <p>Peças inspiradas no universo náutico, com cortes exclusivos.</p>
        </div>

        <div className="card">
          <h3>Acessórios</h3>
          <p>Bonés, mochilas, cintos e muito mais para completar seu visual.</p>
        </div>
      </div>
    </section>
  );
}

export default Servicos;
