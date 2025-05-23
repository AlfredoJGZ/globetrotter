import { UseFormRegister, UseFormWatch } from "react-hook-form";
import { Inputs } from "./MainForm";
import CheckboxInput from "./CheckboxInput";
import TextAreaInput from "./TextAreaInput";

interface ThirdFormProps {
  register: UseFormRegister<Inputs>;
  watch: UseFormWatch<Inputs>;
}

const ThirdForm = ({ register, watch }: ThirdFormProps) => {
  const isNeedingSpecialAssistance = watch("isNeedingSpecialAssistance");

  return (
    <>
      <div>
        <div className="flex flex-col items-start mb-4 gap-4">
          <CheckboxInput
            name="isNeedingTravelInsurance"
            label="Desea agregar seguro de viaje?"
            register={register}
          />
          <CheckboxInput
            name="isNeedingPreferredSeating"
            label="Desea seleccionar asientos preferenciales?"
            register={register}
          />
          <CheckboxInput
            name="isNeedingSpecialAssistance"
            label="Necesita asistencia especial?"
            register={register}
          />
        </div>
        {isNeedingSpecialAssistance && (
          <div>
            <TextAreaInput
              register={register}
              name="specialAssistanceDetails"
              placeholder="Detalles de asistencia especial"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default ThirdForm;
