import styles from "./ProductCard.module.css";
import PropTypes from "prop-types";

function ProductCard(props) {
  return (
    <div className={styles.card}>
      <div>
        <img
          className={styles.cardImage}
          src={props.image}
          alt="Image of product"
        />
      </div>
      <p className={styles.cardTitle}>{props.title}</p>
      <p>{props.description}</p>
      <button
        className={styles.cardButton}
        onClick={props.handleClickAdd}
        data-value={props.data}
      >
        Add to Cart
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  handleClickAdd: PropTypes.func,
  data: PropTypes.number,
};

export default ProductCard;
