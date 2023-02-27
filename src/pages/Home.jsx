import styles from '../scss/Home.module.scss'

function Home() {
    return (
        <div className={`${styles.container} mainContainer`} id='app'>
            <div className='about information'>
                <p className={`${styles.title} title`}>ИнфаСто</p>
                <div className={styles.aboutWrapper}>
                    <p className='about-title information-title'>Как проходить наши уроки?</p>
                    <p className={`${styles.aboutText} information-text`}>
                        Во вкладке "Подготовка" вы можете ознакомиться со всей необходимой теорией для каждого задания
                    </p>
                    <p className={`${styles.aboutText} information-text`}>
                        Теорию можно изучать как в текстовом, так и в видеоформате
                    </p>
                    <p className={`${styles.aboutText} information-text`}>
                        После каждой теории можно решить несколько заданий для закрепления знаний
                    </p>
                </div>
                <div className={styles.aboutWrapper}>
                    <p className='about-title information-title'>Автоматическая проверка заданий</p>
                    <p className={`${styles.aboutText} information-text`}>
                        Автоматическая проверка дает возможность быстро узнать результат и понять свои недочеты
                    </p>
                    <p className={`${styles.aboutText} information-text`}>
                        К каждому заданию идет пояснение решения, чтобы разобрать свои ошибки
                    </p>
                </div>
                <div className={styles.aboutWrapper}>
                    <p className='about-title information-title'>Возможность прорешивать варианты ЕГЭ</p>
                    <p className={`${styles.aboutText} information-text`}>
                        Помимо изучения теории, залогом успеха является регулярная практика.
                    </p>
                    <p className={`${styles.aboutText} information-text`}>
                        Именно поэтому на платформе во вкладке "Пробники" можно в любое время прорешать вариант ЕГЭ
                    </p>
                    <p className={`${styles.aboutText} information-text`}>
                        Результат пробного варианта появляется сразу после отправки решения, а комметарии к заданию
                        помогут разобрать все ошибки
                    </p>
                </div>
                <div className={styles.aboutWrapper}>
                    <p className={`about-title information-title ${styles.aboutTitleEnd}`}>Удачи в обучении!</p>
                </div>
            </div>
        </div>
    )
}
export default Home
