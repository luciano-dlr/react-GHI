import { useState } from "react";
import { onChangeArguments, Product } from "../interfaces/ProductInterfaces";

interface UseProductHookProps {
  product: Product;
  onChange?: (arg: onChangeArguments) => void;
}

export const useProduct = ({ onChange, product }: UseProductHookProps) => {
  const [counter, setCounter] = useState(0);

  const handleIncreaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);

    onChange && onChange({ count: newValue, product });
  };
  return {
    handleIncreaseBy,
    counter,
  };
};
