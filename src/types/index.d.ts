declare namespace App {
  type Flight = {
    origin: string;
    origin_name: string;
    destination: string;
    destination_name: string;
    departure_date: string;
    departure_time: string;
    arrival_date: string;
    arrival_time: string;
    carrier: string;
    stops: number;
    price: number;
  };

  type Currency = "RUB" | "USD" | "EUR";

  type StopsFilter = {
    0: boolean;
    1: boolean;
    2: boolean;
    3: boolean;
    all: boolean;
  };

  type ValueOf<T> = T[keyof T];

  declare namespace ContextApi {
    type Currency = {
      currency: App.Currency;
      setCurrency: (currency: App.Currency) => void;
      convertPrice: (price: number) => string;
    };

    interface StopsFilter {
      selectedStops: App.StopsFilter;
      toggleStopFilter: (stop: keyof App.StopsFilter) => void;
      resetStops: () => void;
    }
  }
}
