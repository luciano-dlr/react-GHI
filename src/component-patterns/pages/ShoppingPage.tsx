import ProductCard, {
  ProductButtons,
  ProductImg,
  ProductTitle,
} from "../components/index";

import "../styles/custom-styles.css";

const ProductList = [
  {
    id: "1",
    title: "Lunch Table",
  },
  {
    id: "2",
    title: "Coffe Cup",
    img: "./coffee-mug.png",
  },
  {
    id: "3",
    title: "Chess",
  },
];

const SingleProduct = {
  id: "2",
  title: "Coffe Cup",
  img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
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
        {/* {ProductList.map((product) => (
          <ProductCard product={product} key={product.id}>
            <ProductImg img={product.img} />
            <ProdctTitle title={product.title} />
          </ProductCard>
        ))} */}

        <ProductCard product={SingleProduct}>
          <ProductCard.Img />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
        <ProductCard product={SingleProduct} className="bg-dark">
          <ProductImg />
          <ProductTitle title="pepe" />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};
