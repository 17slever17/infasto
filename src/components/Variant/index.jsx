import { Link } from 'react-router-dom'

import styles from './Variant.module.scss'

function Variant({ id }) {
    return (
        <div className={styles.variant}>
            <div className={styles.title}>
                <p className={styles.name}>Информатика</p>
                <p className={styles.number}>Пробник | Вариант {id}</p>
            </div>
            <div className={styles.start}>
                <span>◯ Пробник</span>
                <Link to={`./${id}`} className={styles.go}>
                    Начать »
                </Link>
            </div>
        </div>
    )
}
export default Variant
