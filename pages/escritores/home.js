import { useRouter } from "next/router";
import Header from "../../components/header";
import Cookies from "js-cookie";

const usuario = Cookies.get('usuario')
const solicitudes = require('../../db/requestdb')

const home = () => {
    const router = useRouter(); 
    if(usuario === 'escritor'){
        const solicitudes_usu = solicitudes.find(solicitud => solicitud.solicitado === usuario);
        console.log(solicitudes_usu)
        return (
        <div>
            <Header/>
            <h1>Escritores</h1>
            <div className="card">
                <div className="card-body">
                    <h3>{solicitudes_usu.tematica}</h3>
                </div>
            </div>
        </div>
        
    )
    }else{
        return (
            <div>
                F
            </div>
        )
    }
    
}

export default home;