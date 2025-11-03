import {Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import CadrastoPage from './pages/CadastroPage';
import ListarUsuariosPage from './pages/ListarUsuariosPage';
import Footer from './components/Footer';


import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <ToastContainer position="top-right" autoClose={3000} />
    <Header />
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cadastro' element={<CadrastoPage />} />
        <Route path='/lista' element={<ListarUsuariosPage />} />
      </Routes>
    </main>
    <Footer />
    </>
  );
}
export default App;