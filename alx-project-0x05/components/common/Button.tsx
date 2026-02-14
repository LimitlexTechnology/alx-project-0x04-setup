interface ButtonProps {
  buttonLabel: string;
  buttonBackgroundColor: "red" | "blue" | "green";
}

const Button: React.FC<ButtonProps> = ({ buttonLabel, buttonBackgroundColor }) => {
  const backgroundColor = {
    red: "bg-red-500 hover:bg-red-600",
    blue: "bg-blue-500 hover:bg-blue-600",
    green: "bg-green-500 hover:bg-green-600",
  }[buttonBackgroundColor];

  return (
    <button
      className={`${backgroundColor} text-white font-semibold py-2 px-4 rounded transition duration-300`}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;