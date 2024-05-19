import styles from './CartPage.module.css'

function CartPage() {
  return (
    <div>
      <p>This is Cart page</p>
      <ProductTable />
    </div>
  )
}

function ProductTable() {
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
        <tr>
          <td>Laptop</td>
          <td>1</td>
          <td>150</td>
        </tr>
      </tbody>
    </table>
  )

}


export default CartPage