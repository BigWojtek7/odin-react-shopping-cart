import styles from './Header.module.css'

import { Link } from 'react-router-dom';



function Header(props) {
  function handleCheckout(){
    props.changeCart([])
  }

  return (
    <div className={styles.header}>
      <div className="header-left-section">
        <Link to="/homepage" className={styles.logo}>W@lterComp</Link>
      </div>
    <div className={styles.headerRightSection}>
        <div className="cart">
          <Link to="/cart" >Cart: {props.cartItems} Items</Link>
          <Link to="/checkout"><button className={styles.buttonHeader} onClick={handleCheckout}>Checkout</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
