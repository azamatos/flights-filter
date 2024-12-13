import { FC } from "react";

// context providers
import StopFilterContextProvider from "./contexts/StopFilterContextProvider";
import CurrencyContextProvider from "./contexts/CurrencyContextProvider";
import DateContextProvider from "./contexts/DateContextProvider";

// components
import FilterPanel from "./components/FilterPanel";
import FlightList from "./components/FlightList";

// styles
import "./App.css";

const App: FC = () => {
  return (
    <CurrencyContextProvider>
      <StopFilterContextProvider>
        <DateContextProvider>
          <div className="container">
            <FilterPanel />
            <FlightList />
          </div>
        </DateContextProvider>
      </StopFilterContextProvider>
    </CurrencyContextProvider>
  );
};

export default App;
