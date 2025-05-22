import { FieldErrors, FieldPath, UseFormRegister } from "react-hook-form";
import { Inputs } from "./MainForm";
import { IconType } from "react-icons";
import clsx from "clsx";

type SelectInputProps = {
  name: FieldPath<Inputs>;
  placeholder: string;
  icon?: IconType;
  register: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
  options: { value: string; label: string }[];
};

const SelectInput = ({
  icon: Icon,
  register,
  name,
  placeholder,
  errors,
  options,
}: SelectInputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="relative flex items-center">
        {Icon && (
          <span className="absolute">
            <Icon className="w-6 h-6 mx-3 text-black" />
          </span>
        )}
        <select
          {...register(name)}
          defaultValue=""
          className={clsx(
            "block w-full py-2.5 text-black placeholder-gray-500 bg-white border rounded-lg pl-11 pr-5 rtl:pr-11 rtl:pl-5 focus:outline-none focus:ring focus:ring-opacity-40",
            errors[name]
              ? "border-red-400 focus:border-red-400 focus:ring-red-300"
              : "border-black focus:border-black-400 focus:ring-black-300"
          )}
        >
          <option value="" disabled hidden>
            {placeholder}
          </option>
          {options.map(({ value, label }, i) => (
            <option key={i} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
      {errors[name] && (
        <span className="text-xs text-red-400">{errors[name].message}</span>
      )}
    </div>
  );
};

export default SelectInput;
