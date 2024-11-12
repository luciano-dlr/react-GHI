import { useState } from "react";
import ProductCard, {
  ProductButtons,
  ProductImg,
  ProductTitle,
} from "../components/index";
import { Product } from "../interfaces/ProductInterfaces";

import "../styles/custom-styles.css";

const SingleProduct = {
  id: "1",
  title: "Coffe Cup",
  img: "./coffee-mug.png",
};
const SingleProduct2 = {
  id: "2",
  title: "Coffe Cup Meme",
  img: "./coffee-mug2.png",
};
const ProductList: Product[] = [SingleProduct, SingleProduct2];

interface ProductInCart extends Product {
  count: number;
}

export const ShoppingPage = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const handleOnProcutCountChange = ({ count, product }: { count: number, product: Product }) => {

    setShoppingCart(oldShoppingCart => {

      if (count === 0) {
        // [product.id]: toDelete o [product.id]: _ funcionan de igual manera para eliminar un producto
        const { [product.id]: toDelete, ...newShoppingCart } = oldShoppingCart
        // console.log(toDelete);

        return newShoppingCart;
      }

      return {
        ...oldShoppingCart,
        [product.id]: { ...product, count }
      }
    })

  };

  // Alternativa
  // const cartList = Object.values(shoppingCart);

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {ProductList.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
            onChange={(evento) => handleOnProcutCountChange(evento)}
          >
            <ProductImg className="custom-image" />
            <ProductTitle title="pepe" className="text-bold" />
            <ProductButtons className="custom-butttons" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">

        {/* alternativa
        {cartList.length > 0 &&
          cartList.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              className="bg-dark text-white"
              style={{
                width: "100px",
              }}
              onChange={(evento) => handleOnProcutCountChange(evento)}
            >
              <ProductImg className="custom-image" />
              <ProductButtons className="custom-butttons"
                style={{ display: 'flex', justifyContent: 'center' }} />
            </ProductCard>

          ))
        } */}

        {
          Object.entries(shoppingCart).map(([key, product]) => (
            <ProductCard
              key={key}
              product={product}
              className="bg-dark text-white"
              style={{
                width: "100px",
              }}
              onChange={(evento) => handleOnProcutCountChange(evento)}
            >
              <ProductImg className="custom-image" />
              <ProductButtons className="custom-butttons"
                style={{ display: 'flex', justifyContent: 'center' }} />
            </ProductCard>
          ))
        }
      </div>
    </div>
  );
};
