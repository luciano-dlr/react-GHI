import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/ProductInterfaces";

export const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<{
        [key: string]: ProductInCart;
    }>({});

    const handleOnProcutCountChange = ({ count, product }: { count: number, product: Product }) => {

        setShoppingCart(oldShoppingCart => {

            console.log({ count });


            // valor computado primera implementacion,borrar el producto indicado  
            if (count === 0) {
                // [product.id]: toDelete o [product.id]: _ funcionan de igual manera para eliminar un producto
                const { [product.id]: toDelete, ...newShoppingCart } = oldShoppingCart
                return newShoppingCart;
            }

            return {
                // valor computado primera implementacion 
                ...oldShoppingCart,
                [product.id]: { ...product, count }
            }
        })
    };

    return {
        handleOnProcutCountChange,
        shoppingCart,
    }
}
