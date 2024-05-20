import styles from './Header.module.css'

import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <div className={styles.header}>
      <div className="header-left-section">
        <Link to="/homepage" className={styles.logo}>W@lterComp</Link>
      </div>
    <div className={styles.headerRightSection}>
        <div className="cart">
          <Link to="/cart" >Cart: {props.cartItems} Items</Link>
          <button className={styles.buttonHeader}>Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
