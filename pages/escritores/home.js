import { useRouter } from "next/router";
import Header from "../../components/header";
import Cookies from "js-cookie";
import styles from '../../styles/homeEscr.module.css'
import Link from "next/link";

const usuario = Cookies.get('usuario')
const solicitudes = require('../../db/requestdb')

const home = () => {
    if(usuario === 'escritor'){
        const solicitudes_usu = solicitudes.filter(function(ob) {
            return ob.solicitado === usuario;
        })
        console.log(solicitudes_usu)
        const render = Object.values(solicitudes_usu).map(solicitud => (
            <Link href={'/escritores/pdfs'}  style={{ textDecoration: 'none'}}>
                <div className="card" id={styles.cards}>
                    <div className="card-body">
                        <h3>{solicitud.tematica}</h3>
                    </div>
                </div>
            </Link>
        ))
        return (
        <div>
            <Header/>
            <div className='container mt-5'>
                <h1>Escritores</h1>
                {render}
            </div>
            
        </div>
        
    )
    }else{
        return (
            <div>
                Error
            </div>
        )
    }
    
}

export default home;