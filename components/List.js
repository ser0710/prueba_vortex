import styles from '../styles/list.module.css'

const List = ({ con }) => {

    return(
        <div id={styles.prueba}>
            <ul class='list-group list-group-flush' id={styles.list}>
                {con.map((contribucion, index) => (
                    <li class="list-group-item" key={index}>{contribucion}</li>
                ))}
            </ul>
        </div>
        
    )

}

export default List