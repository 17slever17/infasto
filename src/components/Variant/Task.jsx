import { useParams } from 'react-router-dom'
import React from 'react'

import variants from '../../data/variants.json'

import styles from '../../scss/Variant.module.scss'
import form from '../../scss/Form.module.scss'

import variantsAnswer from '../../data/variantsAnswer.json'

function Task() {
    const [isSolved, setIsSolved] = React.useState(false)
    const [answerText, setAnswerText] = React.useState(['', '', '', '', '', '', '', '', '', ''])
    const isRigth = (index) => {
        if (answerText[index] === variantsAnswer[variantId - 1][index].answer) {
            result++
            return true
        } else {
            return false
        }
    }
    const scoreWord = (res) => {
        if ([1, 21].includes(res)) {
            return 'балл'
        } else if ([2, 3, 4, 22, 23, 24].includes(res)) {
            return 'балла'
        } else {
            return 'баллов'
        }
    }
    const { variantId } = useParams()
    let result = 0
    const handleSubmit = (event) => {
        event.preventDefault()
        setIsSolved(true)
        let newAnswerText = []
        for (let i = 0; i < 10; i++) {
            newAnswerText.push(event.target.elements[i].value)
        }
        setAnswerText(newAnswerText)
    }
    const answers = variants[variantId - 1].map((items, index) => {
        return (
            <div key={index}>
                <p className='title' style={{ color: '#293441', fontSize: 18, marginBottom: 15 }}>
                    Задание №{index + 1}
                </p>
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
                                <img src={`/variants_files/${variantId}/${item.img}`} alt='Задание' />
                            </div>
                        )
                    }
                })}

                <div className={`${form.input} ${styles.input}`} style={isSolved ? { display: 'none' } : {}}>
                    <input type='text' className={form.inputField} required autoComplete='off' maxLength={200} />
                    <label className={form.inputLabel}>Введите ответ</label>
                </div>
                <div className={styles.solution} style={isSolved ? {} : { display: 'none' }}>
                    <p
                        className={styles.answer}
                        style={
                            isRigth(index)
                                ? { backgroundColor: '#90ee90', color: '#293441' }
                                : { backgroundColor: '#ff4c5b', color: '#293441' }
                        }
                    >
                        Ваш ответ: {answerText[index]}
                    </p>
                    <p className={styles.answer} style={{ color: '#293441' }}>
                        Правильный ответ: {variantsAnswer[variantId - 1][index].answer}
                    </p>
                    <details className={styles.details} open={!isSolved}>
                        <summary className={styles.summary}>Показать решение</summary>
                        {variantsAnswer[variantId - 1][index].solution.map((item, index) => {
                            if (item.text) {
                                return <p key={index}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.text}</p>
                            } else if (item.img) {
                                return (
                                    <div key={index}>
                                        <img src={`/variantsAnswer_files/${item.img}`} alt='Задание' />
                                    </div>
                                )
                            }
                        })}
                    </details>
                </div>
            </div>
        )
    })
    return (
        <div className='mainContainer'>
            <div className={styles.variant}>
                <div className={styles.variantWrapper}>
                    <p className={`title ${styles.title}`}>Вариант №{variantId}</p>
                    <div className={styles.tasks}>
                        <form className={form.form} autoComplete='off' onSubmit={handleSubmit}>
                            {answers}
                            <button className={form.actionButton} style={isSolved ? { display: 'none' } : {}}>
                                Отправить
                            </button>
                            <p
                                className='title'
                                style={isSolved ? { fontSize: 24, marginBlock: 15 } : { display: 'none' }}
                            >
                                Результат: {result} {scoreWord(result)}
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Task
