import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../scss/NotFound.module.scss'

function NotFound() {
    return (
        <div className={styles.wrapper}>
            <p className={styles.title}>Страница не найдена 😔</p>
            <Link to='/' className={styles.btn}><span>←</span> На главную</Link>
        </div>
    )
}
export default NotFound
