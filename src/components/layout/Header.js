import '../../styles/components/layout/Header.css';
import React from "react";


const Header = (props) => {
    return (
        <header>
             <div className="logo">
                <img src="images/logorecetas.png" width="100" alt="Mis Recetas Online"></img>
                <h1>Mis Recetas Online</h1>
             </div>
        </header>
       
    );
}

export default Header;