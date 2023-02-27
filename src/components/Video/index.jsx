import React from 'react'
import styles from './Video.module.scss'

function VideoYT({ id, imgUrl }) {
    const [isPlayed, setIsPlayed] = React.useState(false)
    const videoId = (id) => {
        return 'http://www.youtube.com/embed/' + id + '?rel=0&autoplay=1'
    }
    return isPlayed ? (
        <iframe
            className={styles.youtube}
            src={videoId(id)}
            allow='autoplay *; fullscreen *'
            
        ></iframe>
    ) : (
        // <img className={styles.youtube} src='/img/icon.svg' alt='asd' />
        <div className={styles.youtube} style={{backgroundImage: 'url(' + imgUrl + ')'}} onClick={() => setIsPlayed(true)}>
            <div className={styles.play}></div>
        </div>
    )
}

export default VideoYT
