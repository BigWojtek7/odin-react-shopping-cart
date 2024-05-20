import Card from "../ProductCard/ProductCard";
import styles from "./Homepage.module.css";

import { useOutletContext } from "react-router-dom";

function HomePage() {
  const [products, setCart, cart] = useOutletContext();

  function handleClickAdd(e) {
    const currentValue = +e.target.dataset.value;

    const productInCart = cart.find((product) => product.id === currentValue);
    // console.log(productInCart);

    if (productInCart) {
      setCart(
        cart.map((product) =>
          product.id === currentValue
            ? { ...productInCart, quantity: productInCart.quantity + 1 }
            : product
        )
      );
    } else {
      let targetProduct = products.filter((product) => {
        return product.id === currentValue;
      });
      targetProduct = { ...targetProduct[0], quantity: 1 };
      console.log("wojtas", targetProduct)
      setCart([...cart, targetProduct]);
    }
    console.log(cart)
  }

  // console.log(cart)
  // let targetProduct = products.filter((product) => {
  //   return product.id === currentValue;
  // });
  // targetProduct = { ...targetProduct[0], quantity: 1 };
  // if (cart.length === 0){

  //   setCart((cart) => [...cart, targetProduct]);
  // }

  // cart.map((product) => {
  //   console.log("wolter");
  //   if (product.id === currentValue) {
  //     targetProduct["quantity"] = targetProduct['quantity'] +1
  //     console.log("wolter2", targetProduct )
  //     // {
  //     //   ...targetProduct[0],
  //     //   quantity: targetProduct.quantity + 1,
  //     // };
  //     setCart((cart) => [...cart, targetProduct]);
  //   } else {
  //     targetProduct = { ...targetProduct[0], quantity: 1 };
  //     setCart((cart) => [...cart, targetProduct]);
  //   }
  // });

  // console.log(cart);

  return (
    <div>
      <p>This is my home page</p>
      <div className={styles.products}>
        {products.map((product) => (
          <Card
            key={product.id}
            title={product.title}
            description={product.description}
            image={product.image}
            handleClickAdd={handleClickAdd}
            data={product.id}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
