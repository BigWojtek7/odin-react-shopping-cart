import Card from '../ProductCard/ProductCard'
import styles from './Homepage.module.css'
import { useEffect } from 'react'
import { useState } from 'react'

import fetchProducts from '../FetchProducts/fetchProducts'

function HomePage(){
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetchProducts().then((result) =>{
      setProducts(result)
    })
    return () => {
      setProducts([])
    }
  },[])
  return (
    <div >
      <p>This is my home page</p>
      <div className={styles.products}>
        {products.map(product => (
          <Card key={product.id} title={product.title} description={product.description}/>
        ))}
      </div>
    </div>
  )
}

export default HomePage