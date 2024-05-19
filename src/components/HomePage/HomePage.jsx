import Card from '../ProductCard/ProductCard'
import styles from './Homepage.module.css'
function HomePage(){
  return (
    <div >
      <p>This is my home page</p>
      <div className={styles.products}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default HomePage