import { useParams } from 'react-router-dom'
import React from 'react'

import variants from '../../data/variants.json'

import styles from '../../scss/Variant.module.scss'
import form from '../../scss/Form.module.scss'

function Task() {
    const { variantId } = useParams()
    const ok = variants[variantId - 1].map((items, index) => {
        return (
            <div key={index}>
                {items.map((item, index) => {
                    if (item.text) {
                        return <p key={index}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.text}</p>
                    } else if (item.href) {
                        return (
                            <a href={`/variants_files/${item.href}`} download key={index}>
                                Задание №{item.href[0] + item.href[1]}
                            </a>
                        )
                    } else if (item.img) {
                        return (
                            <div key={index}>
                                <img src={`/variants_files/${variantId}/${item.img}`} />
                            </div>
                        )
                    }
                })}
                <form className={form.form} autoComplete='off'>
                    <div className={form.input}>
                        <input type='text' className={form.inputField} required autoComplete='off' />
                        <label className={form.inputLabel}>Введите ответ</label>
                    </div>
                </form>
            </div>
        )
    })
    return (
        <div className='mainContainer'>
            <div className={styles.variant}>
                <div className={styles.variantWrapper}>
                    <p className={`title ${styles.title}`}>Вариант №{variantId}</p>
                    <div className={styles.tasks}>
                        {ok}
                        <button className={form.actionButton}>Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Task
