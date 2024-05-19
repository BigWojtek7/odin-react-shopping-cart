import styles from './ProductCard.module.css'

function ProductCard(props) {
  return (
    <div className={styles.card}>
      <p>{props.title}</p>
      <p>{props.description}</p>
    </div>
  );
}

export default ProductCard;
