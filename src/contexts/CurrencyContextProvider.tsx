import { useState, PropsWithChildren, FC, useCallback } from "react";
import { CurrencyContext } from "./CurrencyContext";

const conversionRates: Record<App.Currency, number> = {
  RUB: 1,
  USD: 0.0097,
  EUR: 0.0092,
};

const localeMap: Record<App.Currency, string> = {
  RUB: "ru-RU",
  USD: "en-US",
  EUR: "de-DE",
};

const CurrencyContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [currency, setCurrency] = useState<App.Currency>("RUB");

  const convertPrice = useCallback(
    (price: number): string =>
      new Intl.NumberFormat(localeMap[currency], {
        style: "currency",
        currency,
      }).format(price * conversionRates[currency]),
    [currency]
  );

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, convertPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyContextProvider;
