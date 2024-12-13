// components
import CurrencySelector from "./CurrencySelector";
import FilterDayPicker from "./DayPicker";
import StopsFilter from "./StopsFilter";

// styles
import styles from "./FilterPanel.module.css";

const FilterPanel = () => {
  return (
    <div className={styles.filter}>
      <CurrencySelector />
      <StopsFilter />
      <FilterDayPicker />
    </div>
  );
};

export default FilterPanel;
