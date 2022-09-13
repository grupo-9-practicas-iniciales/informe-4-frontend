import { Field } from "formik";

type Props = {
  autoComplete?: string;
  className?: string;
  label?: string;
  placeholder: string;
  name: string;
  type?: string;
  variant?: "textarea" | "input";
};

export const TextField = ({
  autoComplete = "off",
  label,
  placeholder,
  className,
  name,
  type,
  variant = "input",
}: Props) => {
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label
          className="text-xs md:text-sm my-3 text-primary-light-2 dark:text-white"
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <Field as={variant} name={name}>
        {({ field }: any) =>
          variant === "textarea" ? (
            <textarea
              {...field}
              className={`px-4 py-2 text-xs md:text-sm border placeholder:text-primary-light-5 dark:placeholder:text-gray-300/40 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light-1 focus:border-transparent dark:bg-dark dark:text-white invalid:ring-2 ${className}`}
              placeholder={placeholder}
              autoComplete={autoComplete}
            />
          ) : (
            <input
              className={`px-4 py-2 text-xs md:text-sm border placeholder:text-primary-light-5 dark:placeholder:text-gray-300/40 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light-1 focus:border-transparent dark:bg-dark dark:text-white invalid:ring-2 ${className}`}
              placeholder={placeholder}
              type={type}
              autoComplete={autoComplete}
              {...field}
            />
          )
        }
      </Field>
    </div>
  );
};
