import { Link } from "react-router-dom";
import { Waves1SVG, RocketSVG } from "../assets";
import { DownArrowIcon } from "../assets/icons/DownArrowIcon";
import { ToogleThemeButton } from "../components/theme/ToogleThemeButton";
import { Avatar, Button } from "../components/ui";
import { Input } from "../components/ui/input/Input";
import { User } from "../context/auth";
import { useForm } from "../hooks/useForm";

const testInitialUser2: User = {
  names: "Jorge",
  lastnames: "Garcia",
  email: "a",
  idStudent: "12321",
  idUser: "asdada",
  token: "",
};

const formInitialState = {
  email: "",
};

type FormState = {
  email: string;
};

export const LandingPage = () => {
  const { onInputChange, email } = useForm<FormState>(formInitialState);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <main className="min-h-screen bg-light dark:bg-dark overflow-x-hidden transition-colors">
      <nav className="h-[10vh] flex items-center justify-around">
        <h1 className="text-logo font-bold text-[28px] lg:text-[36px]">
          YOUSAC
        </h1>
        <Link
          className="text-black dark:text-white font-bold text-[12px] lg:text-[16px] hover:text-gray-100"
          to="/auth/login"
        >
          Iniciar sesión
        </Link>
        <Avatar user={testInitialUser2} />
      </nav>
      <section className="h-[70vh] flex flex-col gap-y-8 mt-10">
        <RocketSVG className="w-full h-full " viewBox="0 0 326 239" />
        <h2 className="text-black dark:text-white text-center text-[16px] lg:text-[22px]">
          Las mejores Recomendaciones
        </h2>
        <div className="flex justify-center items-center">
          <DownArrowIcon className="text-primary-light-1 dark:text-primary-dark-1 text-2xl lg:text-3xl" />
        </div>
      </section>
      <div className="h-[10vh] absolute bottom-0 right-0 w-full">
        <Waves1SVG
          className="w-full"
          preserveAspectRatio="none"
          viewBox="0 0 300 100"
        />
      </div>
      <ToogleThemeButton fab={true} />
      <div>
        <form action="" onSubmit={onSubmit}>
          <Button text="Hola" variant="secondary" className="mx-3 w-32" />
          <Input
            className="w-1/2"
            name="email"
            onChange={onInputChange}
            value={email}
            placeholder="Email"
          />
        </form>
      </div>
    </main>
  );
};
