import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { CSSProperties, ReactElement } from "react";
import {
  InitialValues,
  onChangeArguments,
  Product,
} from "../interfaces/ProductInterfaces";
import ProductContext from "./ProductCardContext";

export interface ProductCardProps {
  product: Product;
  // children?: ReactElement | ReactElement[];
  children?: () => JSX.Element
  className?: string;
  style?: CSSProperties;
  onChange?: (arg: onChangeArguments) => void;
  value?: number;
  initialValues?: InitialValues
}

const { Provider } = ProductContext;

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: ProductCardProps) => {
  const { counter, handleIncreaseBy, maxCount } = useProduct({ onChange, product, value, initialValues });
  return (
    <Provider
      value={{
        counter,
        handleIncreaseBy,
        product,
        maxCount
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children && children()}
      </div>
    </Provider>
  );
};
