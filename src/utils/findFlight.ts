import Flight from "@/models/Flight";

const findFlight = (
  flights: Flight[],
  destination: string,
  flightClass: string
) => {
  return (
    flights.find((flight) => {
      return flight.destination === destination && flight.class === flightClass;
    })?.priceUSD || 0
  );
};
export default findFlight;
