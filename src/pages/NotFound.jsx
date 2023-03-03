import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../scss/NotFound.module.scss'

function NotFound() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.text}>
                <p className={styles.title}>Страница не найдена</p>
                <img src='/img/nf.png' alt=':(' width={50} height={50} />
            </div>
            <Link to='/' className={styles.btn}>
                <span>←</span> На главную
            </Link>
        </div>
    )
}
export default NotFound
