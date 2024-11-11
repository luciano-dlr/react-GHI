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

        <ProductCard product={SingleProduct} className="bg-dark text-white">
          <ProductCard.Img className="custom-image" />
          <ProductCard.Title className="text-bold" />
          <ProductCard.Buttons className="custom-butttons" />
        </ProductCard>
        <ProductCard product={SingleProduct} className="bg-dark text-white">
          <ProductImg className="custom-image" />
          <ProductTitle title="pepe" className="text-bold" />
          <ProductButtons className="custom-butttons" />
        </ProductCard>
        <ProductCard product={SingleProduct} style={{ backgroundColor: "red" }}>
          <ProductImg />
          <ProductTitle title="pepe" />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};
