import styles from './ProductCard.module.css'

function ProductCard() {
  return (
    <div className={styles.card}>
      <p>Product Title</p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid vel,
        magnam harum accusantium nostrum velit aperiam reiciendis ipsum officiis
        quo
      </p>
    </div>
  );
}

export default ProductCard;
