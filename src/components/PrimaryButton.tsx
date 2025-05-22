interface PrimaryButtonProps {
  text: string;
  type: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}

const PrimaryButton = ({ text, onClick, type }: PrimaryButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={
        "bg-teal-600 hover:bg-teal-500 cursor-pointer px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform rounded-lg focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
      }
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
