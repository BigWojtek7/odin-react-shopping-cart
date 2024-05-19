import styles from './ProductCard.module.css'

function ProductCard(props) {
  return (
    <div className={styles.card}>
      <div><img className={styles.cardImage} src={props.image} alt="Image of product" /></div>
      <p className={styles.cardTitle}>{props.title}</p>
      <p>{props.description}</p>
      <button className={styles.cardButton}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
