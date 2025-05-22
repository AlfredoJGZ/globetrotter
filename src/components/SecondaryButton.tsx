interface SecondaryButtonProps {
  text: string;
  onClick: () => void;
  type: "button" | "submit";
}

const SecondaryButton = ({ text, onClick, type }: SecondaryButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="cursor-pointer px-6 py-2 font-medium tracking-wide text-teal-600 capitalize transition-colors duration-300 transform rounded-lg hover:text-teal-500 focus:outline-none focus:ring-none"
    >
      {text}
    </button>
  );
};

export default SecondaryButton;
