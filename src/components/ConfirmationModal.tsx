import React from "react";
import { HiCheck } from "react-icons/hi";
import SecondaryButton from "./SecondaryButton";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void
}

const ConfirmationModal = ({ isOpen , onClose}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex justify-center items-center flex-col bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
        <div className="bg-teal-500 rounded-full w-20 h-20 flex items-center justify-center">
          {<HiCheck className="w-10 h-10 text-white" />}
        </div>
        <h1 className="text-2xl text-black mt-4 mb-4">
          Reserva exitosa!
        </h1>
        <SecondaryButton type="button" onClick={onClose} text="Inicio" />
      </div>
    </div>
  );
};

export default ConfirmationModal;
