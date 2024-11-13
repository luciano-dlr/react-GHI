import { useShoppingCart } from "../hooks/useShoppingCart";
import ProductCard, { ProductButtons, ProductImg, ProductTitle } from "../components/index";
import "../styles/custom-styles.css";
import { ProductList } from "../data/products";

export const ShoppingPage = () => {

  const { handleOnProcutCountChange, shoppingCart } = useShoppingCart()

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
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductImg className="custom-image" />
            <ProductTitle title="pepe" className="text-bold" />
            <ProductButtons className="custom-butttons" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        {
          Object.entries(shoppingCart).map(([key, product]) => (
            <ProductCard
              key={key}
              product={product}
              className="bg-dark text-white"
              style={{
                width: "100px",
              }}
              onChange={(event) => handleOnProcutCountChange(event)}
              value={product.count}
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
