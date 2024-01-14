import { useRouter } from "next/router";
import Header from "../../components/header";
import List from "../../components/list";
import styles from '../../styles/details.module.css';

const id = () => {
    const escritores = require('../../db/db')
    
    const router = useRouter();
    if(router.isReady){
        const { id: escritorId } = router.query;
        const nid = parseInt(escritorId)
        const escritor = escritores.find(escritor => escritor.id === nid);

        return(
            <div>
                <Header/>
                <div className='container mt-5'>
                    <h1>Detalles</h1>
                    <div class="container text-center">
                        <div class="row">
                            <div style={{width: '30%', backgroundColor: 'black', height: '30%'}}>a</div>
                            <div class="col">
                                <h3>contribuciones</h3>
                                <List con={escritor.contribuciones}></List>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3>Perfil</h3>
                        <hr/>
                        <p className={styles.text}>{escritor.perfil}</p>
                    </div>
                </div>
                <div id={styles.pagos} >
                    <hr/>
                    <div class="input-group">
                        <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload"/>
                        <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Button</button>
                    </div>
                </div>
            </div>
        )

    }
    return null;

}

export default id;