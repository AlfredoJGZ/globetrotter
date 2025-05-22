import useFlightsStore from "@/store/flightsStore";
import { UseFormWatch } from "react-hook-form";
import { Inputs } from "./MainForm";
import findFlight from "@/utils/findFlight";
import calculateTravelerAge from "@/utils/calculateTravelerAge";

interface SummaryProps {
  watch: UseFormWatch<Inputs>;
}

const Summary = ({ watch }: SummaryProps) => {
  const flights = useFlightsStore((state) => state.flights);

  const getTotalPrice = (
    flightPrice: number,
    travelersNumber: number,
    petsNumber: number,
    extraLuggageNumber: number
  ) => {
    const total =
      flightPrice * travelersNumber +
      petsNumber * 100 +
      extraLuggageNumber * 50;
    return total;
  };

  return (
    <div className="flex flex-col gap-2">
      <p>Destino: {watch("destination")}</p>
      <p>Fecha de salida: {watch("departureDate")}</p>
      <p>Fecha de regreso: {watch("arrivalDate")}</p>
      <p>Clase: {watch("flightClass")}</p>
      <p>
        Costo por pasajero:
        {findFlight(flights, watch("destination"), watch("flightClass"))}
      </p>
      <div>
        Pasajeros:
        <ul>
          {Array.from({ length: watch("travelersNumber") }).map(
            (_, index) =>
              watch(`travelers.${index}.name`) && (
                <li className="capitalize" key={index}>
                  {watch(`travelers.${index}.name`)}{" "}
                  {calculateTravelerAge(
                    new Date(watch(`travelers.${index}.birthDate`))
                  )}{" "}
                  años
                </li>
              )
          )}
        </ul>
      </div>
      {watch("petsNumber") && <p>Mascotas: {watch("petsNumber")} (100$ c/u)</p>}
      {watch("extraLuggageNumber") && (
        <p>Mascotas: {watch("extraLuggageNumber")} (50$ c/u)</p>
      )}
      {watch("isNeedingTravelInsurance") && <p>Seguro de viaje: Sí</p>}
      {watch("isNeedingPreferredSeating") && <p>Asientos preferenciales: Sí</p>}
      {watch("isNeedingSpecialAssistance") && <p>Asistencia especial: Sí</p>}
      <p>
        Total: $
        {getTotalPrice(
          findFlight(flights, watch("destination"), watch("flightClass")),
          watch("travelersNumber"),
          watch("petsNumber"),
          watch("extraLuggageNumber")
        ) || 0}
      </p>
    </div>
  );
};

export default Summary;
