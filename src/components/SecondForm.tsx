import { HiUsers } from "react-icons/hi";
import Input from "./TextInput";
import DateInput from "./DateInput";
import DocumentInput from "./DocumentInput";
import CheckboxInput from "./CheckboxInput";
import { FaDog, FaShoppingBag } from "react-icons/fa";
import { FieldErrors, UseFormRegister, UseFormWatch } from "react-hook-form";
import { Inputs } from "./MainForm";

interface FormProps {
  register: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
  watch: UseFormWatch<Inputs>;
}

const SecondForm = ({ register, errors, watch }: FormProps) => {

    const travelersNumber = watch("travelersNumber") || 1;
    const isTravelingWithPets = watch("isTravelingWithPets");
    const isNeedingExtraLuggage = watch("isNeedingExtraLuggage");

    return (
      <>
        <Input
          name="travelersNumber"
          type="number"
          placeholder="N.º de viajeros"
          icon={HiUsers}
          register={register}
          errors={errors}
        />

        <div>
          {Array.from({ length: travelersNumber }).map((_, index) => (
            <div className="p-5 bg-teal-600 rounded-2xl mb-2 mt-2" key={index}>
              <h3 className="font-bold text-xl mb-3">
                Datos de viajero {index + 1}
              </h3>
              <Input
                name={`travelers.${index}.name`}
                type="text"
                placeholder="Nombre"
                icon={HiUsers}
                register={register}
                errors={errors}
              />
              <div className="flex flex-col md:flex-row justify-between gap-2 mt-2">
                <div className="md:w-1/2">
                  <DateInput
                    name={`travelers.${index}.birthDate`}
                    placeholder="Fecha de nacimiento"
                    register={register}
                    errors={errors}
                  />
                </div>
                <div className="md:w-1/2">
                  <DocumentInput
                    documentType={`travelers.${index}.document.type`}
                    documentNumber={`travelers.${index}.document.number`}
                    placeholder="N.º de documento"
                    register={register}
                    errors={errors}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center h-12 gap-2 mt-2">
          <div className="w-1/2 md:w-1/4 flex-shrink-0 flex">
            <CheckboxInput
              name="isTravelingWithPets"
              label="Viaja con mascotas?"
              register={register}
            />
          </div>
          {isTravelingWithPets && (
            <div className="w-1/2 md:w-3/4">
              <Input
                name="petsNumber"
                type="number"
                placeholder="N.º de mascotas"
                icon={FaDog}
                register={register}
                errors={errors}
              />
            </div>
          )}
        </div>

        <div className="flex justify-between items-center h-12 gap-2 mt-2">
          <div className="w-1/2 md:w-1/4 flex-shrink-0 flex">
            <CheckboxInput
              name="isNeedingExtraLuggage"
              label="Necesita maletas extra?"
              register={register}
            />
          </div>
          {isNeedingExtraLuggage && (
            <div className="w-1/2 md:w-3/4">
              <Input
                name="extraLuggageNumber"
                type="number"
                placeholder="N.º de maletas"
                icon={FaShoppingBag}
                register={register}
                errors={errors}
              />
            </div>
          )}
        </div>
      </>
    );
}
 
export default SecondForm;