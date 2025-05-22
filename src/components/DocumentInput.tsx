import clsx from "clsx";
import { FieldPath, UseFormRegister } from "react-hook-form";
import { Inputs } from "./MainForm";

export type DocumentInputProps = {
  documentType: FieldPath<Inputs>;
  documentNumber: FieldPath<Inputs>;
  placeholder: string;
  register: UseFormRegister<Inputs>;
  errors: unknown;
};

const DocumentInput = ({
  register,
    documentType,
  documentNumber,
  placeholder,
  errors,
}: DocumentInputProps) => {
  return (
    <div className="flex items-center">
      <div className="py-2.5 px-3 bg-white border-black border border-r-0 rtl:rounded-r-lg rtl:rounded-l-none rtl:border-l-0 rtl:border-r rounded-l-lg">
        <select
          {...register(documentType, {
            setValueAs: (value) => value.trim(),
          })}
          className="text-black focus:outline-none focus:ring-0 focus:border-none"
        >
          <option value="PASSPORT">Pasaporte</option>
          <option value="ID">Cédula</option>
        </select>
      </div>
      <input
        {...register(documentNumber, {
          setValueAs: (value) => value.trim(),
        })}
        type="text"
        placeholder={placeholder}
        className={clsx(
          "block w-full py-2.5 text-black placeholder-gray-500 bg-white border rounded-lg pl-5 pr-5 rtl:pr-5 rtl:pl-5 focus:outline-none focus:ring focus:ring-opacity-40 rounded-tl-none rounded-bl-none border-l-0",
          errors && errors[documentNumber] 
            ? "border-red-400 focus:border-red-400 focus:ring-red-300"
            : "border-black focus:border-black-400 focus:ring-black-300"
        )}
      />
    </div>
  );
};

export default DocumentInput;
