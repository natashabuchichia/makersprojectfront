import NovedadItem from '../components/novedades/NovedadItem';
import '../styles/components/pages/NovedadesPage.css';
import { useState, useEffect } from "react";
import axios from 'axios';

const NovedadesPage = (props) => {
    const [loading, setLoading] = useState (false);
    const [novedades, setNovedades] = useState ([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading (true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        };
        
        cargarNovedades();
    }, []);

    return (
        <main> 
            <h2 className="noved">Novedades</h2>
            <div className="holder2">
                <img src="images/utensillos2.jpg" />
            </div>
           
            <section className="caja">
            {loading ? (
                <p>Cargando...</p>
            ) : ( 
                novedades.map(item => <NovedadItem key={item.id} 
                    title={item.titulo} subtitle={item.subtitulo}
                    imagen={item.imagen} body={item.cuerpo} /> ) 
            )}
            </section>
       </main> 
    );
}

export default NovedadesPage;