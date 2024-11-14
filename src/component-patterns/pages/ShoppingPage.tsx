
import ProductCard, { ProductButtons, ProductImg, ProductTitle } from "../components/index";

import { ProductList } from "../data/products";

const Product = ProductList[0]

export const ShoppingPage = () => {


  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <ProductCard
        product={Product}

        initialValues={{
          count: 4,
          maxCount: 10
        }}
      >
        {
          ({ reset, count, increaseBy, isMaxCountReached, maxCount }) => (
            <>
              <ProductImg />
              <ProductTitle />
              <ProductButtons />
              {/* <button onClick={() => increaseBy(-2)}>-2</button>
              {
                !isMaxCountReached && <button onClick={() => increaseBy(2)}>+2</button>
              }
              <h2 >Valor Actual: {count}</h2>
              <h2 >Valor maximo: {maxCount}</h2>
              <div>
                <button onClick={reset}>reset</button>
              </div> */}
            </>
          )
        }
      </ProductCard>


    </div>
  );
};
