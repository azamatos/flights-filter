import { createContext, useContext } from "react";

const CurrencyContext = createContext<App.ContextApi.Currency | undefined>(
  undefined
);

const useCurrencyContext = (): App.ContextApi.Currency => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
};

export { CurrencyContext, useCurrencyContext };
