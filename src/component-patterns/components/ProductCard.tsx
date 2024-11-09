import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { createContext } from "react";
import {
  ProductCardProps,
  ProductContextProps,
} from "../interfaces/ProductInterfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardProps) => {
  const { counter, handleIncreaseBy } = useProduct();
  return (
    <Provider
      value={{
        counter,
        handleIncreaseBy,
        product,
      }}
    >
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};
