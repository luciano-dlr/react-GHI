import { useContext } from "react";
import NoImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";

export const ProductImg = () => {
  const { product } = useContext(ProductContext);
  const { img } = product;

  return (
    <img
      src={img ? img : NoImage}
      alt="Image product Coffe"
      className={styles.productImg}
    />
  );
};
