import { create } from "zustand";

interface FormIndexStore {
  step: number;
  setStep: (step: number) => void;
}

const useFormIndexStore = create<FormIndexStore>((set) => ({
  step: 1,
  setStep: (step: number) => set(() => ({ step })),
}));

export default useFormIndexStore;
