import styles from "./CartPage.module.css";

import { useOutletContext } from "react-router-dom";

function CartPage() {
  const [, , cart] = useOutletContext();
  const totalPrice = cart.reduce((total, currentItem) => {
    return total + (currentItem.price * currentItem.quantity)
  }, 0)

  return (
    <div>
      <p>This is Cart page</p>
      <ProductTable cart={cart} totalPrice={totalPrice} />
    </div>
  );
}

function ProductTable(props) {
  return (
    <table className={styles.productTable}>
      <thead>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {props.cart.map((product) => (
          <tr key={product.id}>
            <td>{product.title}</td>
            <td>{product.quantity}</td>
            <td>{product.price}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
          <tr>
            <td colSpan={2}>TOTAL</td>
            <td>{props.totalPrice}</td>
          </tr>
      </tfoot>
    </table>
  );
}

export default CartPage;
