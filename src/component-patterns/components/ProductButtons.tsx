import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export interface ProductCardButtonsProps {
  className?: string;
  style?: CSSProperties;
}

export const ProductButtons = ({
  className = "",
  style,
}: ProductCardButtonsProps) => {
  const { counter, handleIncreaseBy } = useContext(ProductContext);
  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button
        className={styles.buttonMinus}
        onClick={() => handleIncreaseBy(-1)}
      >
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button className={styles.buttonAdd} onClick={() => handleIncreaseBy(1)}>
        +
      </button>
    </div>
  );
};
