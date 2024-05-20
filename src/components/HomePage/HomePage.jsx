import Card from "../ProductCard/ProductCard";
import styles from "./Homepage.module.css";

import { useOutletContext } from "react-router-dom";

function HomePage() {
  const products = useOutletContext();

  function handleClickAdd(e) {
    console.log(e.target.dataset.value);
    const currentValue = +e.target.dataset.value;
    const targetProduct = products.filter((product) => {
      return product.id === currentValue;
    });
    console.log(targetProduct);
  }

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
