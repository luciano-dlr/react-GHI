import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import NoImage from "../assets/no-image.jpg";

interface Props {
  product: Product;
  // ProductImg: ({ img }: { img?: string | undefined }) => JSX.Element;
  // ProdctTitle: ({ title }: { title: string }) => JSX.Element;
  // ProductButtons: () => JSX.Element;
}

interface Product {
  id: string;
  title: string;
  img?: string;
}

export const ProductImg = ({ img = "" }) => {
  return (
    <img
      src={img ? img : NoImage}
      alt="Image product Coffe"
      className={styles.productImg}
    />
  );
};

export const ProdctTitle = ({ title }: { title: string }) => {
  return <span className={styles.productDescription}>{title}</span>;
};

interface ProductButtonsProps {
  counter: number;
  handleIncreaseBy: (value: number) => void;
}

export const ProductButtons = ({
  counter,
  handleIncreaseBy,
}: ProductButtonsProps) => {
  return (
    <div className={styles.buttonsContainer}>
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

export const ProductCard = ({ product }: Props) => {
  const { counter, handleIncreaseBy } = useProduct();
  return (
    <div className={styles.productCard}>
      <ProductImg img={product.img} />

      <ProdctTitle title={product.title} />

      <ProductButtons counter={counter} handleIncreaseBy={handleIncreaseBy} />
    </div>
  );
};
