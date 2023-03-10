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
        try {
            if (index > 24) {
                if (answerText[index] === variantsAnswer[variantId - 1][index].answer) {
                    result += 2
                    return 2
                } else if (
                    answerText[index].split(' ').includes(variantsAnswer[variantId - 1][index].answer.split(' ')[0]) ||
                    answerText[index].split(' ').includes(variantsAnswer[variantId - 1][index].answer.split(' ')[1])
                ) {
                    result++
                    return 1
                } else {
                    return 0
                }
            } else if (answerText[index] === variantsAnswer[variantId - 1][index].answer) {
                result++
                return 2
            } else {
                return 0
            }
        } catch (error) {}
    }
    const scoreWord = (res) => {
        if ([51].includes(res)) {
            return 'балл'
        } else if ([34, 43, 54, 62, 64, 72, 83, 93].includes(res)) {
            return 'балла'
        } else {
            return 'баллов'
        }
    }
    const { variantId } = useParams()
    let scores = [
        0, 7, 14, 20, 27, 34, 40, 43, 46, 48, 51, 54, 56, 59, 62, 64, 67, 70, 72, 75, 78, 80, 83, 85, 88, 90, 93, 95, 98,
        100
    ]
    let result = 0
    const handleSubmit = (event) => {
        event.preventDefault()
        setIsSolved(true)
        let newAnswerText = []
        for (let i = 0; i < 27; i++) {
            newAnswerText.push(event.target.elements[i].value)
        }
        setAnswerText(newAnswerText)
    }
    const colorAnswer = (index) => {
        switch (isRigth(index)) {
            case 0:
                return { backgroundColor: '#ff4c5b', color: '#293441' }
            case 1:
                return {backgroundColor: '#ffff66', color: '#293441'}
            case 2:
                return { backgroundColor: '#90ee90', color: '#293441' }
        }
    }
    const answers = variants[variantId - 1].map((items, index) => {
        return (
            <div key={index}>
                <p
                    className='information-title'
                    style={{ color: '#ff6528', fontSize: 18, marginBottom: 15, textAlign: 'start' }}
                >
                    Задание №{index + 1}
                </p>
                {items.map((item, index) => {
                    if (item.text) {
                        return (
                            <p key={index} style={{ width: '100%' }}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.text}
                            </p>
                        )
                    } else if (item.img) {
                        return (
                            <div key={index}>
                                <img src={`/variants_files/${variantId}/${item.img}`} alt='Задание' />
                            </div>
                        )
                    } else if (item.href) {
                        return (
                            <a href={`/variants_files/${variantId}/${item.href}`} download key={index}>
                                Задание №{item.href[0] + item.href[1]}
                            </a>
                        )
                    } else if (item.href27) {
                        return (
                            <a href={`/variants_files/${variantId}/${item.href27}`} download key={index}>
                                Задание №{item.href27[0] + item.href27[1] + item.href27[2]}
                            </a>
                        )
                    }
                })}

                <div className={`${form.input} ${styles.input}`} style={isSolved ? { display: 'none' } : {}}>
                    <input type='text' className={form.inputField} required autoComplete='off' maxLength={200} />
                    <label className={form.inputLabel}>Введите ответ</label>
                </div>
                <div className={styles.solution} style={isSolved ? {} : { display: 'none' }}>
                    <p className={styles.answer} style={colorAnswer(index)}>
                        Ваш ответ: {answerText[index]}
                    </p>
                    <p className={styles.answer} style={{ color: '#293441' }}>
                        Правильный ответ: {variantsAnswer[variantId - 1][index].answer}
                    </p>
                    <details className={styles.details} open={!isSolved}>
                        <summary className={styles.summary}>Показать решение</summary>
                        {variantsAnswer[variantId - 1][index].solution.map((item, index) => {
                            if (item.text) {
                                return (
                                    <p key={index} style={{ color: '#293441', lineHeight: '18px' }}>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.text}
                                    </p>
                                )
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
                                Результат: {scores[result]} {scoreWord(scores[result])}
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Task
