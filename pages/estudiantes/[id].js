import { useRouter } from "next/router";
import Header from "../../components/header";

const id = () => {
    const escritores = require('../../db/db')
    const router = useRouter();
    const { id } = router.query;
    const escritor = escritores.find(escritor => id == escritor.id);
    
    return(
        <div>
            <Header/>
            <div className='container mt-5'>
                <h1>Detalles</h1>
                <div style={{width: '300px', backgroundColor: 'red', height: '200px'}}></div>
            </div>
        </div>
    )
}

export default id;