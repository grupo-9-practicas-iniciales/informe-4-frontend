type Props = {
  className?: string;
  children?: React.ReactNode;
<<<<<<< HEAD
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
=======
  type?: "button" | "submit" | "reset";
>>>>>>> experimental
  variant?: "primary" | "secondary";
  onClick?: () => void;
};

const primaryStyles =
  "dark:bg-[#478E9B] hover:dark:hover:bg-primary-dark-3/[.70]";
const secondaryStyles =
  "dark:bg-primary-light-gradient dark:hover:opacity-[.87]";

export const Button = ({
  className,
  children,
<<<<<<< HEAD
  variant = "primary",
  type = "button",
=======
  type = "button",
  variant = "primary",
>>>>>>> experimental
  onClick,
}: Props) => {
  return (
    <button
      className={
        className +
        (variant === "primary" ? primaryStyles : secondaryStyles) +
        " w-full rounded-sm text-white py-2 px-4 bg-primary-light-1 hover:bg-primary-light-2 transition-all duration-200 text-xs md:text-sm"
      }
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
