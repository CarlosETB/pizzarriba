import React, { ReactNode, createContext, useState, useContext } from "react";

interface ContextValue {
  order: any[];
  setOrder: any[];
}

interface LayoutProps {
  children?: ReactNode;
}

export const OrderContext = createContext<Partial<ContextValue | undefined>>(
  {}
);

export function OrderProvider(props: LayoutProps) {
  const { children } = props;

  const [order, setOrder] = useState([]);

  return (
    <OrderContext.Provider value={{ order, setOrder }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrderContext() {
  const context = useContext(OrderContext);

  if (typeof context === "undefined") {
    throw new Error("useOrderContext must be used within an OrderContext");
  }

  return context;
}
