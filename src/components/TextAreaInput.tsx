import { FieldPath, UseFormRegister } from "react-hook-form";
import { Inputs } from "./MainForm";

type TextAreaInputProps = {
  name: FieldPath<Inputs>;
  placeholder: string;
  register: UseFormRegister<Inputs>;
};

const TextAreaInput = ({ name, register, placeholder }: TextAreaInputProps) => {
  return (
    <textarea
      {...register(name)}
      placeholder={placeholder}
      className="block w-full py-2.5 text-black placeholder-gray-500 bg-white border rounded-lg pl-5 pr-5 rtl:pr-11 rtl:pl-5 focus:outline-none focus:ring focus:ring-opacity-40"
    ></textarea>
  );
};

export default TextAreaInput;
