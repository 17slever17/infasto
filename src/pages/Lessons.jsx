import React from 'react'
import { useParams, Link } from 'react-router-dom'

import lessons from '../data/lessons.json'
import lessonsAnswer from '../data/lessonsAnswer.json'
import VideoYT from '../components/Video'

import styles from '../scss/Lessons.module.scss'
import form from '../scss/Form.module.scss'

function Lessons({ isOverlayActive, setIsOverlayActive }) {
    const [activeBtn, setActiveBtn] = React.useState(1)
    const [activeVideo, setActiveVideo] = React.useState(0)
    const [isHamburgerActive, setIsHamburgerActive] = React.useState(false)
    const [isPlayed, setIsPlayed] = React.useState(false)
    const [inputValue, setInputValue] = React.useState('')
    const [isSolved, setIsSolved] = React.useState(false)
    const [answerText, setAnswerText] = React.useState('')
    const { lessonId } = useParams()
    React.useEffect(() => {
        setInputValue('')
        setIsSolved(false)
    }, [activeBtn, lessonId])
    const changeLesson = () => {
        setIsPlayed(false)
        setActiveBtn(1)
        setActiveVideo(0)
    }
    const onClickHamburger = () => {
        setIsHamburgerActive((prev) => !prev)
        isOverlayActive ? setIsOverlayActive(false) : setIsOverlayActive(true)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        setIsSolved(true)
        setAnswerText(event.target[0].value)
        event.target[0].value = ''
    }
    return (
        <div className={`mainContainer ${styles.container}`}>
            <section className={styles.lessons}>
                <div className={styles.lessonsWrapper}>
                    <p className={`title ${styles.title}`}>Задание №{lessonId}</p>

                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div className={styles.card}>
                            <div className={styles.youtubeWrapper}>
                                <VideoYT
                                    id={lessons[lessonId - 1].id[activeVideo]}
                                    imgUrl={lessons[lessonId - 1].imgUrl[activeVideo]}
                                    isPlayed={isPlayed}
                                    setIsPlayed={setIsPlayed}
                                ></VideoYT>
                            </div>
                            <p className={styles.videoTitle}>Задание №{lessonId}</p>
                        </div>
                        {lessons[lessonId - 1].id.length - 1 ? (
                            <div className={styles.pagination} style={{ paddingTop: 10 }}>
                                <div
                                    onClick={() => activeVideo !== 0 && setActiveVideo((prev) => prev - 1)}
                                    className={`${styles.arrow} ${activeVideo === 0 && styles.endPoint}`}
                                >
                                    {'<'}
                                </div>
                                {lessons[lessonId - 1].id.map((item, index) => {
                                    return (
                                        <div
                                            onClick={() => setActiveVideo(index)}
                                            className={activeVideo === index ? `${styles.activeBtn}` : undefined}
                                            key={index}
                                        >
                                            {index + 1}
                                        </div>
                                    )
                                })}
                                <div
                                    onClick={() =>
                                        activeVideo !== lessons[lessonId - 1].id.length &&
                                        setActiveVideo((prev) => prev + 1)
                                    }
                                    className={`${styles.arrow} ${
                                        activeVideo === lessons[lessonId - 1].id.length - 1 && styles.endPoint
                                    }`}
                                >
                                    {'>'}
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>

                    <p className='information-title'>Тестовые задания</p>
                    <div className={styles.testWrapper}>
                        <div className={styles.test}>
                            <div className={styles.condition}>
                                {lessons[lessonId - 1].tests[Number(activeBtn) - 1].map((item, index) => {
                                    if (item.text) {
                                        return <p key={index}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.text}</p>
                                    } else if (item.img) {
                                        return (
                                            <div key={index}>
                                                <img src={`/lessons_files/${item.img}`} alt='Задание' />
                                            </div>
                                        )
                                    } else if (item.href) {
                                        return (
                                            <a href={`/lessons_files/${item.href}`} download key={index}>
                                                Задание №{lessonId}
                                            </a>
                                        )
                                    } else if (item.href27) {
										return (
											<a href={`/lessons_files/${item.href}`} download key={index}>
												Задание №{item.href27[0] + item.href27[1] + item.href27[2]}
											</a>
										)
									}
                                })}
                            </div>
                            <form
                                className={form.form}
                                autoComplete='off'
                                onSubmit={handleSubmit}
                                style={isSolved ? { display: 'none' } : {}}
                            >
                                <div className={form.input}>
                                    <input
                                        type='text'
                                        className={form.inputField}
                                        required
                                        autoComplete='off'
                                        maxLength={200}
                                        id='answer'
                                        value={inputValue}
                                        onChange={(ev) => setInputValue(ev.target.value)}
                                    />
                                    <label className={form.inputLabel} htmlFor='answer'>
                                        Введите ответ
                                    </label>
                                </div>
                                <button className={form.actionButton}>Отправить</button>
                            </form>
                            <div className={styles.solution} style={isSolved ? {} : { display: 'none' }}>
                                <p
                                    className={styles.answer}
                                    style={
                                        answerText === lessonsAnswer[lessonId - 1][activeBtn - 1].answer
                                            ? { backgroundColor: '#90ee90' }
                                            : { backgroundColor: '#ff4c5b' }
                                    }
                                >
                                    Ваш ответ: {answerText}
                                </p>
                                <p className={styles.answer}>
                                    Правильный ответ: {lessonsAnswer[lessonId - 1][activeBtn - 1].answer}
                                </p>
                                <details className={styles.details} open={!isSolved}>
                                    <summary className={styles.summary}>Показать решение</summary>
                                    {lessonsAnswer[lessonId - 1][activeBtn - 1].solution.map((item, index) => {
                                        if (item.text) {
                                            return (
                                                <p key={index} style={{ color: '#293441', lineHeight: '18px' }}>
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.text}
                                                </p>
                                            )
                                        } else if (item.img) {
                                            return (
                                                <div key={index} className={styles.condition}>
                                                    <img
                                                        src={`/lessonsAnswer_files/${item.img}`}
                                                        alt='Решение'
                                                        style={{ maxHeight: 400 }}
                                                    />
                                                </div>
                                            )
                                        }
                                    })}
                                </details>
                            </div>
                        </div>
                    </div>

                    <div className={styles.pagination}>
                        <div
                            onClick={() => activeBtn !== 1 && setActiveBtn((prev) => prev - 1)}
                            className={`${styles.arrow} ${activeBtn === 1 && styles.endPoint}`}
                        >
                            {'<'}
                        </div>
                        <div
                            onClick={() => setActiveBtn(1)}
                            className={activeBtn === 1 ? `${styles.activeBtn}` : undefined}
                        >
                            1
                        </div>
                        <div
                            onClick={() => setActiveBtn(2)}
                            className={activeBtn === 2 ? `${styles.activeBtn}` : undefined}
                        >
                            2
                        </div>
                        <div
                            onClick={() => setActiveBtn(3)}
                            className={activeBtn === 3 ? `${styles.activeBtn}` : undefined}
                        >
                            3
                        </div>
                        <div
                            onClick={() => activeBtn !== 3 && setActiveBtn((prev) => prev + 1)}
                            className={`${styles.arrow} ${activeBtn === 3 && styles.endPoint}`}
                        >
                            {'>'}
                        </div>
                    </div>
                </div>
            </section>
            <div
                className={`${styles.hamburger} ${isHamburgerActive && styles.hamburger_active}`}
                onClick={onClickHamburger}
            >
                <span></span>
                <span></span>
            </div>
            <aside className={`${styles.lessonsNav} ${isHamburgerActive && styles.lessonsNav_active}`}>
                <p className={styles.lessonsTitle}>Выбор задания</p>
                <Link
                    to='/lessons/1'
                    className={`${styles.lesson} ${lessonId === '1' && styles.lessonActive}`}
                    onClick={changeLesson}
                >
                    Задание 1
                </Link>
                <Link
                    to='/lessons/2'
                    className={`${styles.lesson} ${lessonId === '2' && styles.lessonActive}`}
                    onClick={changeLesson}
                >
                    Задание 2
                </Link>
                <Link
                    to='/lessons/3'
                    className={`${styles.lesson} ${lessonId === '3' && styles.lessonActive}`}
                    onClick={changeLesson}
                >
                    Задание 3
                </Link>
                <Link
                    to='/lessons/4'
                    className={`${styles.lesson} ${lessonId === '4' && styles.lessonActive}`}
                    onClick={changeLesson}
                >
                    Задание 4
                </Link>
                <Link
                    to='/lessons/5'
                    className={`${styles.lesson} ${lessonId === '5' && styles.lessonActive}`}
                    onClick={changeLesson}
                >
                    Задание 5
                </Link>
                <Link
                    to='/lessons/6'
                    className={`${styles.lesson} ${lessonId === '6' && styles.lessonActive}`}
                    onClick={changeLesson}
                >
                    Задание 6
                </Link>
                <Link
                    to='/lessons/7'
                    className={`${styles.lesson} ${lessonId === '7' && styles.lessonActive}`}
                    onClick={changeLesson}
                >
                    Задание 7
                </Link>
                <Link
                    to='/lessons/8'
                    className={`${styles.lesson} ${lessonId === '8' && styles.lessonActive}`}
                    onClick={changeLesson}
                >
                    Задание 8
                </Link>
                <Link
                    to='/lessons/9'
                    className={`${styles.lesson} ${lessonId === '9' && styles.lessonActive}`}
                    onClick={changeLesson}
                >
                    Задание 9
                </Link>
                <Link
                    to='/lessons/10'
                    className={`${styles.lesson} ${lessonId === '10' && styles.lessonActive}`}
                    onClick={changeLesson}
                >
                    Задание 10
                </Link>
                <Link
                    to='/lessons/11'
                    className={`${styles.lesson} ${lessonId === '11' && styles.lessonActive}`}
                    onClick={changeLesson}
                >
                    Задание 11
                </Link>
                <Link
                    to='/lessons/12'
                    className={`${styles.lesson} ${lessonId === '12' && styles.lessonActive}`}
                    onClick={changeLesson}
                >
                    Задание 12
                </Link>
                <Link
                    to='/lessons/13'
                    className={`${styles.lesson} ${lessonId === '13' && styles.lessonActive}`}
                    onClick={changeLesson}
                >
                    Задание 13
                </Link>
                <Link
                    to='/lessons/14'
                    className={`${styles.lesson} ${lessonId === '14' && styles.lessonActive}`}
                    onClick={changeLesson}
                >
                    Задание 14
                </Link>
                <Link
                    to='/lessons/15'
                    className={`${styles.lesson} ${lessonId === '15' && styles.lessonActive}`}
                    onClick={changeLesson}
                >
                    Задание 15
                </Link>
                <Link
                    to='/lessons/16'
                    className={`${styles.lesson} ${lessonId === '16' && styles.lessonActive}`}
                    onClick={changeLesson}
                >
                    Задание 16
                </Link>
                <Link
                    to='/lessons/17'
                    className={`${styles.lesson} ${lessonId === '17' && styles.lessonActive}`}
                    onClick={changeLesson}
                >
                    Задание 17
                </Link>
                <Link
                    to='/lessons/18'
                    className={`${styles.lesson} ${lessonId === '18' && styles.lessonActive}`}
                    onClick={changeLesson}
                >
                    Задание 18
                </Link>
                <Link
                    to='/lessons/19'
                    className={`${styles.lesson} ${lessonId === '19' && styles.lessonActive}`}
                    onClick={changeLesson}
                >
                    Задание 19
                </Link>
                <Link
                    to='/lessons/20'
                    className={`${styles.lesson} ${lessonId === '20' && styles.lessonActive}`}
                    onClick={changeLesson}
                >
                    Задание 20
                </Link>
                <Link
                    to='/lessons/21'
                    className={`${styles.lesson} ${lessonId === '21' && styles.lessonActive}`}
                    onClick={changeLesson}
                >
                    Задание 21
                </Link>
                <Link
                    to='/lessons/22'
                    className={`${styles.lesson} ${lessonId === '22' && styles.lessonActive}`}
                    onClick={changeLesson}
                >
                    Задание 22
                </Link>
                <Link
                    to='/lessons/23'
                    className={`${styles.lesson} ${lessonId === '23' && styles.lessonActive}`}
                    onClick={changeLesson}
                >
                    Задание 23
                </Link>
                <Link
                    to='/lessons/24'
                    className={`${styles.lesson} ${lessonId === '24' && styles.lessonActive}`}
                    onClick={changeLesson}
                >
                    Задание 24
                </Link>
                <Link
                    to='/lessons/25'
                    className={`${styles.lesson} ${lessonId === '25' && styles.lessonActive}`}
                    onClick={changeLesson}
                >
                    Задание 25
                </Link>
                <Link
                    to='/lessons/26'
                    className={`${styles.lesson} ${lessonId === '26' && styles.lessonActive}`}
                    onClick={changeLesson}
                >
                    Задание 26
                </Link>
                <Link
                    to='/lessons/27'
                    className={`${styles.lesson} ${lessonId === '27' && styles.lessonActive}`}
                    onClick={changeLesson}
                >
                    Задание 27
                </Link>
            </aside>
        </div>
    )
}

export default Lessons
