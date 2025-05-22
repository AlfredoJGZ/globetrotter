import useFormIndexStore from "@/store/formIndexStore";
import SecondaryButton from "./SecondaryButton";
import PrimaryButton from "./PrimaryButton";

const FormFooter = () => {
  const step = useFormIndexStore((state) => state.step);
  const setStep = useFormIndexStore((state) => state.setStep);
  return (
    <div>
      {step > 1 && (
        <SecondaryButton
          type="button"
          text="volver"
          onClick={() => setStep(step - 1)}
        />
      )}
      {step < 4 && (
        <PrimaryButton
          type="button"
          text="siguiente"
          onClick={() => setStep(step + 1)}
        />
      )}
      {step === 4 && (
        <PrimaryButton
          type="submit"
          text="Reservar"
        />
      )}
    </div>
  );
};

export default FormFooter;
