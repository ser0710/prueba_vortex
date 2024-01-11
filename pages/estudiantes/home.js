import Header from "../../components/header";
import React, { useState } from 'react';
import Link from "next/link";
const home = () => {
    const [mostrar, setMostrar] = useState(false);

    const escritores = require('../../db/db')

    const handleShow = () => {
        setMostrar(!mostrar);
      };
        
    const render = Object.values(escritores).map(escritor => (
        <Link href={`/estudiantes/${escritor.id}`} key={escritor.id} style={{ textDecoration: 'none', width: '40%', marginBottom: '20px' }}>
        <div className="card">
            <div className="card-body">
                <h3>{escritor.nombre}</h3>
                <h3>{escritor.valoracion}</h3>
            </div>
        </div>
        </Link>
    ))
    return (
        <div>
            <Header/>
            <div className='container mt-5'>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="¿Sobre que tema necesitas ayuda?" 
                    aria-label="¿Sobre que tema necesitas ayuda?" aria-describedby="basic-addon2"/>
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleShow}>?</button>
                </div>
                { mostrar && (
                    <div className="d-flex flex-row flex-wrap justify-content-between">
                        {render}
                    </div>
                )}
                
                
            </div>
        </div>
        
    )
}

export default home;