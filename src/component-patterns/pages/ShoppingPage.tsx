
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
        }}>
        {
          ({ reset, count, increaseBy, isMaxCountReached, maxCount }) => (
            <>
              <ProductImg />
              <ProductTitle />
              <ProductButtons />

            </>
          )
        }
      </ProductCard>


    </div>
  );
};
