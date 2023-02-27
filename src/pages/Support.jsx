import styles from '../scss/Support.module.scss'

function Support() {
    return (
        <div className={`${styles.container} mainContainer`} id='app'>
            <div className='information'>
                <div className={styles.wrapper}>
                    <p className='main__support-title information-title'>Техническая поддержка</p>
                    <p className='main__support-text information-text'>
                        Если у вас возникли проблемы, то вы можете написать в техническую поддержку во ВКонтакте
                    </p>
                </div>
            </div>
            <div className={styles.link}>
                <img className={styles.img} src='./img/VK_logo_Blue_64x64.svg' alt='ВКонтакте логотип' />
                <a className={styles.go} href='https://vk.com/infastoege' target='_blank'>
                    Написать в техподдержку »
                </a>
            </div>
        </div>
    )
}
export default Support
