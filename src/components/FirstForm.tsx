import { HiGlobe } from "react-icons/hi";
import SelectInput from "./SelectInput";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Inputs } from "./MainForm";
import useFlightsStore from "@/store/flightsStore";
import DateInput from "./DateInput";

interface FirstFormProps {
  register: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
}

const FirstForm = ({ register, errors }: FirstFormProps) => {
  const flights = useFlightsStore((state) => state.flights);
  const destinations = flights.reduce((acc, flight) => {
    if (!acc.find((item) => item.value === flight.destination)) {
      acc.push({ value: flight.destination, label: flight.destination });
      return acc;
    }
    return acc;
  }, [] as { value: string; label: string }[]);

  const flightClasses = flights.reduce((acc, flight) => {
    if (!acc.find((item) => item.value === flight.class)) {
      acc.push({ value: flight.class, label: flight.class });
      return acc;
    }
    return acc;
  }, [] as { value: string; label: string }[]);

  return (
    <>
      <SelectInput
        name="destination"
        placeholder="Destino"
        icon={HiGlobe}
        register={register}
        errors={errors}
        options={destinations}
      />
      <div className="flex mt-2 gap-2">
        <div className="w-1/2">
          <DateInput
            name="departureDate"
            register={register}
            errors={errors}
            placeholder="Fecha de salida"
          />
        </div>
        <div className="w-1/2">
          <DateInput
            name="arrivalDate"
            register={register}
            errors={errors}
            placeholder="Fecha de regreso"
          />
        </div>
      </div>
      <div className="mt-2">
        <SelectInput
          name="flightClass"
          placeholder="Clase de vuelo"
          icon={HiGlobe}
          register={register}
          errors={errors}
          options={flightClasses}
        />
      </div>
    </>
  );
};

export default FirstForm;
