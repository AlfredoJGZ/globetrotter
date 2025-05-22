"use client";
import { useForm } from "react-hook-form";
import useFormIndexStore from "@/store/formIndexStore";
import React, { useState } from "react";
import SecondForm from "./SecondForm";
import FirstForm from "./FirstForm";
import ThirdForm from "./ThirdForm";
import FormFooter from "./FormFooter";
import Summary from "./Summary";
import ConfirmationModal from "./ConfirmationModal";

export interface Inputs {
  destination: string;
  departureDate: string;
  arrivalDate: string;
  flightClass: string;
  travelersNumber: number;
  travelers: {
    birthDate: string;
    name: string;
    document: { type: "PASSPORT" | "ID"; number: string };
  }[];
  isTravelingWithPets: boolean;
  petsNumber: number;
  isNeedingExtraLuggage: boolean;
  extraLuggageNumber: number;
  isNeedingTravelInsurance: boolean;
  isNeedingPreferredSeating: boolean;
  isNeedingSpecialAssistance: boolean;
  specialAssistanceDetails: string;
}

const MainForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    shouldUnregister: true,
    defaultValues: {
      travelersNumber: 1,
    },
  });
  const step = useFormIndexStore((state) => state.step);
  const setStep = useFormIndexStore((state) => state.setStep);

  const [open, setOpen] = useState(false);

  const onSubmit = (data: Inputs) => {
    console.log(data);
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
    setStep(1);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div className={step != 1 ? "hidden" : ""}>
          <h1 className="text-2xl mb-4 mt-6">Detalles de viaje</h1>
          <FirstForm register={register} errors={errors} />
        </div>
        <div className={step != 2 ? "hidden" : ""}>
          <h1 className="text-2xl mb-4 mt-6">Detalles de viajeros</h1>
          <SecondForm register={register} errors={errors} watch={watch} />
        </div>
        <div className={step != 3 ? "hidden" : ""}>
          <h1 className="text-2xl mb-4 mt-6">Servicios adicionales</h1>
          <ThirdForm register={register} watch={watch} />
        </div>
        <div className={step != 4 ? "hidden" : ""}>
          <h1 className="text-2xl mb-4 mt-6">Resumen y Confirmación</h1>
          <Summary watch={watch} />
        </div>
        <FormFooter />
      </form>
      <ConfirmationModal isOpen={open} onClose={onClose} />
    </>
  );
};

export default MainForm;
