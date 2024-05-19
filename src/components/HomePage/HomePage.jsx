import Card from '../ProductCard/ProductCard'
import styles from './Homepage.module.css'

import { useOutletContext } from 'react-router-dom'


function HomePage(){

  const products = useOutletContext();
  console.log(products)
  return (
    <div >
      <p>This is my home page</p>
      <div className={styles.products}>
        {products.map(product => (
          <Card key={product.id} title={product.title} description={product.description} image={product.image}/>
        ))}
      </div>
    </div>
  )
}

export default HomePage