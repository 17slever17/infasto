import styles from '../scss/Materials.module.scss'

function Lessons() {
    return (
        <div className={`mainContainer ${styles.container}`} id='app'>
            <section className={styles.cards}>
                <div className={styles.card}>
                    <a href='/storage/py.pdf' target='_blank'>
                        <img src='/img/1.jpg' alt='Памятка по Python' />
                        <h4>Памятка по Python</h4>
                    </a>
                </div>
                <div className={styles.card}>
                    <a href='/storage/demo2022.pdf' target='_blank'>
                        <img src='/img/2.jpg' alt='Демо-вариант прошлого года' />
                        <h4>Демо-вариант прошлого года</h4>
                    </a>
                </div>
                <div className={styles.card}>
                    <a href='/storage/demo2023.pdf' target='_blank'>
                        <img src='/img/3.jpg' alt='Демоверсия ЕГЭ 2023' />
                        <h4>Демоверсия ЕГЭ 2023</h4>
                    </a>
                </div>
                <div className={styles.card}>
                    <a href='/storage/specification.pdf' target='_blank'>
                        <img src='/img/4.jpg' alt='Спецификация ЕГЭ 2023' />
                        <h4>Спецификация ЕГЭ 2023</h4>
                    </a>
                </div>
                <div className={styles.card}>
                    <a href='/storage/codifier.pdf' target='_blank'>
                        <img src='/img/5.jpg' alt='Кодификатор ЕГЭ 2023' />
                        <h4>Кодификатор ЕГЭ 2023</h4>
                    </a>
                </div>
            </section>
        </div>
    )
}

export default Lessons
