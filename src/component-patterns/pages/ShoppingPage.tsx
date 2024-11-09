import { ProductCard } from "../components/ProductCard";

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
        {ProductList.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};
