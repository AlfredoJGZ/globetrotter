import Flight from "@/models/Flight";
import { create } from "zustand";

interface FlightsStore {
  flights: Flight[];
  setFlights: (flights: Flight[]) => void;
}

const useFlightsStore = create<FlightsStore>((set) => ({
  flights: [],
  setFlights: (flights: Flight[]) => set(() => ({ flights })),
}));

export default useFlightsStore;
