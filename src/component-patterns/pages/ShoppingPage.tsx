
import ProductCard, { ProductButtons, ProductImg, ProductTitle } from "../components/index";
import "../styles/custom-styles.css";
import { ProductList } from "../data/products";

const Product = ProductList[0]

export const ShoppingPage = () => {


  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <ProductCard
        product={Product}
        className="bg-dark text-white"
        initialValues={{
          count: 4,
          maxCount: 10
        }}
      >
        {
          ({ reset, count, increaseBy, isMaxCountReached, maxCount }) => (
            <>
              <ProductImg className="custom-image" />
              <ProductTitle className="text-bold" />
              <ProductButtons className="custom-butttons" />

              <button onClick={() => increaseBy(-2)}>-2</button>
              {
                !isMaxCountReached && <button onClick={() => increaseBy(2)}>+2</button>
              }


              <h2 className="text-bold">Valor Actual: {count}</h2>
              <h2 className="text-bold">Valor maximo: {maxCount}</h2>

              <div>

                <button onClick={reset}>reset</button>
              </div>
            </>
          )
        }
      </ProductCard>


    </div>
  );
};
