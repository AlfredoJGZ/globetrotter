"use client";

import React from "react";
import clsx from "clsx";
import {
  HiClipboardList,
  HiLocationMarker,
  HiUsers,
  HiClipboardCheck,
} from "react-icons/hi";
import useFormIndexStore from "@/store/formIndexStore";

const steps = [
  { number: 1, label: "Fecha y destino", icon: HiLocationMarker },
  { number: 2, label: "Detalles de viaje", icon: HiUsers },
  { number: 3, label: "Servicios adicionales", icon: HiClipboardList },
  { number: 4, label: "Resumen y Confirmación", icon: HiClipboardCheck },
];

const FormIndexer = () => {
    const step = useFormIndexStore((state) => state.step);
  return (
    <div className="flex items-center">
      {steps.map(({ number, icon: Icon }, index) => (
        <React.Fragment key={index}>
          <div
            className={clsx("flex items-center relative", {
              "text-teal-600": step > number,
            })}
          >
            <div
              className={clsx(
                "flex items-center justify-center rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2",
                {
                  "border-teal-600": step >= number,
                  "bg-teal-600": step === number,
                }
              )}
            >
              <Icon className="w-6 h-6" />
            </div>
          </div>

          {/* Hide in case is last step */}

          {index + 1 < steps.length ? (
            <div
              className={clsx(
                "flex-auto border-t-2 transition duration-500 ease-in-out",
                {
                  "border-teal-600": step > number,
                }
              )}
            ></div>
          ) : null}
        </React.Fragment>
      ))}
    </div>
  );
};

export default FormIndexer;
