import Router from "next/router";
import { useState } from "react";

const index = () => {

    const [email, setEmail] = useState('');
    const [con, setCon] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        if(email === 'estudiante'){
            Router.push('/estudiantes/home');
        } else if(email === 'escritor'){
            Router.push('/escritores/home');
        } else{
            alert('usuario invalido');
        }  
    }

    return (
        <div className='container mt-5'>
            <h1>Bienvenido</h1>
            <hr/>
            <form onSubmit={onSubmit}>
                <div className="input-group mb-3">
                    <input type="text" class="form-control" placeholder="email" aria-label="email" 
                    aria-describedby="basic-addon1" value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className="input-group mb-3">
                    <input type="password" class="form-control" placeholder="Contraseña" aria-label="Contraseña" 
                    aria-describedby="basic-addon1" value={con} onChange={e => setCon(e.target.value)}/>
                </div>
                <button className="btn btn-primary">entrar</button>
            </form>
        </div>
        
    )
};
export default index;

