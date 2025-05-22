import { FieldPath, UseFormRegister } from "react-hook-form";
import { Inputs } from "@/components/MainForm";
import clsx from "clsx";

export type DateInputProps = {
  name: FieldPath<Inputs>;
  placeholder: string;
  register: UseFormRegister<Inputs>;
  errors: unknown; 
};

const DateInput = ({ name, placeholder, register, errors }: DateInputProps) => {
  return (
    <div>
      <div className="relative flex items-center">
        <input
          {...register(name, {
            setValueAs: (value) => value.trim(),
          })}
          onFocus={(e) => console.log((e.target.type = "date"))}
          type="text"
          placeholder={placeholder}
          className={clsx(
            "block w-full py-2.5 text-black placeholder-gray-500 bg-white border rounded-lg pl-5 pr-5 rtl:pr-5 rtl:pl-5 focus:outline-none focus:ring focus:ring-opacity-40",
            errors && errors[name]
              ? "border-red-400 focus:border-red-400 focus:ring-red-300"
              : "border-black focus:border-black-400 focus:ring-black-300"
          )}
        />
      </div>
      {errors && errors[name] && (
        <span className="text-xs text-red-400">{errors[name]?.message}</span>
      )}
    </div>
  );
};

export default DateInput;
