import React from 'react'
import styles from './Video.module.scss'

function VideoYT({ id, imgUrl, isPlayed, setIsPlayed }) {
    const videoId = (id) => {
        return 'https://www.youtube.com/embed/' + id + '?rel=0&autoplay=1'
    }
    return isPlayed ? (
        <iframe
            className={styles.youtube}
            src={videoId(id)}
            allow='autoplay *; fullscreen *'
            
        ></iframe>
    ) : (
        <div className={styles.youtube} style={{backgroundImage: 'url(' + imgUrl + ')'}} onClick={() => setIsPlayed(true)}>
            <div className={styles.play}></div>
        </div>
    )
}

export default VideoYT
