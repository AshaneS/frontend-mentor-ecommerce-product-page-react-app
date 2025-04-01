import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
// the cart item type
type CartItem = {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
  description: string;
};

// context type

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem, quantity: number) => void;
  removeFromCart: (itemId: number) => void;
  updateQuantity: (itemId: number, action: "increase" | "decrease") => void;
  totalCost: () => number;
};

// Create COntext

const CartContext = createContext<CartContextType | undefined>(undefined);

// create a provider

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // add item to Cart

  const addToCart = (product, quantity) => {
    if (quantity === 0) {
      alert("Please select a quantity");
      return;
    }

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: quantity } : item,
        );
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
  };
  // remove item from cart

  const removeFromCart = (itemId: number) => {
    setCart((prevCart) => {
      const newCart = prevCart.filter((item) => item.id !== itemId);
      console.log("Updated cart:", newCart);
      return newCart;
    });
  };

  // update quantity

  const updateQuantity = (itemId: number, action: "increase" | "decrease") => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId
          ? {
              ...item,
              quantity:
                action === "increase"
                  ? item.quantity + 1
                  : Math.max(item.quantity - 1, 0),
            }
          : item,
      ),
    );
    return cart;
  };

  // total cost

  const totalCost = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // useEffect to log cart updates

  useEffect(() => {
    console.log("Cart Updated", cart);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, totalCost }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
