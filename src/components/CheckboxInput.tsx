import { FieldPath, UseFormRegister } from "react-hook-form";
import { Inputs } from "./MainForm";
import { HiCheck } from "react-icons/hi";

type CheckboxInputProps = {
  name: FieldPath<Inputs>;
  label: string;
  register: UseFormRegister<Inputs>;
};

const CheckboxInput = ({ name, label, register }: CheckboxInputProps) => {
  return (
    <label className="flex gap-2 justify-center items-center" htmlFor={name}>
      <input
        className="hidden peer"
        type="checkbox"
        id={name}
        {...register(name)}
      />
      <div className="w-6 h-6 bg-white rounded-2xl inline-block peer-checked:bg-teal-600">
        <HiCheck className="w-6 h-6 text-white" />
      </div>
      <span>{label}</span>
    </label>
  );
};

export default CheckboxInput;
