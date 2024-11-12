import { ProductTitleProps } from "../components/ProductTitle";
import { ProductCardProps } from "../components/ProductCard";
import { ProductCardButtonsProps } from "../components/ProductButtons";
import { ProductCardImgProps } from "../components/ProductImg";

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  handleIncreaseBy: (value: number) => void;
  product: Product;
  onChange?: () => void;
  
}

export interface ProductCardHOCProps {
  ({ children, product, className, style }: ProductCardProps): JSX.Element;
  Title: ({ title, className, style }: ProductTitleProps) => JSX.Element;
  Img: ({ className, style }: ProductCardImgProps) => JSX.Element;
  Buttons: ({ className, style }: ProductCardButtonsProps) => JSX.Element;
}

export interface onChangeArguments {
  product: Product;
  count: number;
}
