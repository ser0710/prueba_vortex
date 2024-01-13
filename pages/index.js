import Router from "next/router";
import { useState } from "react";
import Cookies from "js-cookie";
import styles from '../styles/index.module.css';

const index = () => {

    const [email, setEmail] = useState('');
    const [con, setCon] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        if(email === 'estudiante'){
            Cookies.set('usuario', email, {path: '/'});
            Router.push('/estudiantes/home');
        } else if(email === 'escritor'){
            Cookies.set('usuario', email, {path: '/'});
            Router.push('/escritores/home');
        } else{
            alert('usuario invalido');
        }  
    }

    return (
        <div> 
            <div id={styles.loginBox}>
                <div className='container' id={styles.login}>
                    <form onSubmit={onSubmit} id={styles.formLogin}>
                        <div id={styles.title}>
                            <h1>Bienvenido</h1>
                        </div>
                        
                        <span className={styles.titles}>Correo</span>
                        <div className={`input-group mb-3 ${styles.groupIn}`}>
                            <input type="text" class={`form-control ${styles.inputs}`} placeholder="estudiante@universidad.com" aria-label="estudiante@universidad.com" 
                            aria-describedby="basic-addon1" value={email} onChange={e => setEmail(e.target.value)}/>
                        </div>
                        <span className={styles.titles}>Contraseña</span>
                        <div className={`input-group mb-3 ${styles.groupIn}`}>
                            <input type="password" class={`form-control ${styles.inputs}`} placeholder="Contraseña" aria-label="Contraseña" 
                            aria-describedby="basic-addon1" value={con} onChange={e => setCon(e.target.value)}/>
                        </div>
                        <div id={styles.loginBtn}>
                            <button id={styles.btnLogin}>entrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
    )
};
export default index;

