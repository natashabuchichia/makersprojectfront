import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

import HomePage from './pages/HomePage';
import ContactoPage from './pages/ContactoPage';
import NovedadesPage from "./pages/NovedadesPage";


function App() {
  return (
    <div className="App">
      <Header/>
        <BrowserRouter>
         <Nav/>
         <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="contacto" element={<ContactoPage />} />
          <Route path="novedades" element={<NovedadesPage />} />
         </Routes>
       </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
