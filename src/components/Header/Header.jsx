import styles from './Header.module.css'

function Header() {
  return (
    <div className={styles.header}>
      <div className="header-left-section">
        <p className="logo">WalComp</p>
      </div>
      <div className="header-right-section">
        <div className="cart">
          <p>Cart: 2 Items</p>
          <button>Checkout</button>
        </div>

      </div>
    </div>
  );
}

export default Header;
