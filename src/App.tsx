import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import Login from './paginas/login/Login';
import Navbar from './components/navBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './paginas/home/Home';
import { AuthProvider } from './contexts/AuthContext';
import { ToastContainer } from 'react-toastify';
import Cadastro from './paginas/cadastro/Cadastro';
import Footer from './components/footer/Footer';
import ListaTemas from './components/temas/listaTemas/ListaTemas';
import FormularioTema from './components/temas/formularioTema/FormularioTema';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import ListaPostagens from './components/postagens/listaPostagens/ListaPostagens';
import FormularioPostagem from './components/postagens/formularioPostagem/FormularioPostagem';

import Perfil from './paginas/perfil/Perfil';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import Sobre from './paginas/sobre/Sobre';
import Contato from './paginas/contato/Contato';

function App() {
  
  return (
    <>
      <AuthProvider>
      <ToastContainer />
        <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/assuntos" element={<ListaTemas />} />
              <Route path="/cadastroAssunto" element={<FormularioTema />} />
              <Route path="/editarAssunto/:id" element={<FormularioTema />} />
              <Route path="/deletarAssunto/:id" element={<DeletarTema />} />
              <Route path="/mentorias" element={<ListaPostagens />} />
              <Route path="/cadastroMentoria" element={<FormularioPostagem />} />
              <Route path="/editarMentoria/:id" element={<FormularioPostagem />} />
              <Route path="/cancelarMentoria/:id" element={<DeletarPostagem />} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/contato" element={<Contato />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;