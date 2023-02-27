import Variant from '../components/Variant'
import styles from '../scss/Variants.module.scss'

function Variants() {
    const variants = [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }]
    return (
        <div className={`mainContainer ${styles.container}`} id='app'>
            {variants.map((item, index) => {
                return <Variant key={index} id={item.id}></Variant>
            })}
        </div>
    )
}
export default Variants
