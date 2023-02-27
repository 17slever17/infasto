import styles from '../scss/Materials.module.scss'

function Lessons() {
    return (
        <div className={`mainContainer ${styles.container}`} id='app'>
            <section className={styles.cards}>
                <div className={styles.card}>
                    <a href='/storage/py.pdf' target='_blank'>
                        <img src='/img/1.jpg' alt='' />
                        <p>Памятка по Python</p>
                    </a>
                </div>
                <div className={styles.card}>
                    <a href='/storage/demo2022.pdf' target='_blank'>
                        <img src='/img/2.jpg' alt='' />
                        <p>Демо-вариант прошлого года</p>
                    </a>
                </div>
                <div className={styles.card}>
                    <a href='/storage/demo2023.pdf' target='_blank'>
                        <img src='/img/3.jpg' alt='' />
                        <p>Демоверсия ЕГЭ 2023</p>
                    </a>
                </div>
                <div className={styles.card}>
                    <a href='/storage/specification.pdf' target='_blank'>
                        <img src='/img/4.jpg' alt='' />
                        <p>Спецификация ЕГЭ 2023</p>
                    </a>
                </div>
                <div className={styles.card}>
                    <a href='/storage/codifier.pdf' target='_blank'>
                        <img src='/img/5.jpg' alt='' />
                        <p>Кодификатор ЕГЭ 2023</p>
                    </a>
                </div>
            </section>
        </div>
    )
}

export default Lessons
