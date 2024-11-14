
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
          count: 6,
          maxCount: 10
        }}
      >
        {
          () => (
            <>
              <ProductImg className="custom-image" />
              <ProductTitle className="text-bold" />
              <ProductButtons className="custom-butttons" />
            </>
          )
        }
      </ProductCard>


    </div>
  );
};
