import { useCurrencyContext } from "../../contexts/CurrencyContext";
import styles from "./FilterPanel.module.css";

const CURRENCY_BUTTONS: App.Currency[] = ["RUB", "USD", "EUR"];

const CurrencySelector = () => {
  const { setCurrency, currency } = useCurrencyContext();

  return (
    <div className={styles.currency}>
      <h2>ВАЛЮТА</h2>
      <div className={styles.buttonWrapper}>
        {CURRENCY_BUTTONS.map((item) => (
          <button
            key={item}
            className={currency === item ? styles.active : ""}
            onClick={() => setCurrency(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CurrencySelector;
