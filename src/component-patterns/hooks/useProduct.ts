import { useEffect, useRef, useState } from "react";
import { onChangeArguments, Product } from "../interfaces/ProductInterfaces";

interface UseProductHookProps {
  product: Product;
  onChange?: (arg: onChangeArguments) => void;
  value?:number
}

export const useProduct = ({ onChange, product, value = 0 }: UseProductHookProps) => {
  const [counter, setCounter] = useState(value);

  const isControlled = useRef(!!onChange)

  const handleIncreaseBy = (value: number) => {
   if(isControlled.current ){
    return onChange! ({count:value,product})
   }
    
    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);

    onChange && onChange({ count: newValue, product });
  };

  useEffect(() => {
    setCounter(value)

  }, [value])
  
  return {
    handleIncreaseBy,
    counter,
  };
};
