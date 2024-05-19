import styles from './Header.module.css'

import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className={styles.header}>
      <div className="header-left-section">
        <Link to="/homepage" className={styles.logo}>WalComp</Link>
      </div>
    <div className={styles.headerRightSection}>
        <div className="cart">
          <Link to="/cart" >Cart: 2 Items</Link>
          <button className={styles.buttonHeader}>Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
