import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { createContext, CSSProperties, ReactElement } from "react";
import {
  onChangeArguments,
  Product,
  ProductContextProps,
} from "../interfaces/ProductInterfaces";

export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  onChange?: (arg: onChangeArguments) => void;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product, className, style, onChange }: ProductCardProps) => {
  const { counter, handleIncreaseBy } = useProduct({ onChange, product });
  return (
    <Provider
      value={{
        counter,
        handleIncreaseBy,
        product,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};
