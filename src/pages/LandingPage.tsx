import { Link } from "react-router-dom"
import { Waves1SVG, RocketSVG } from "../assets";
import { DownArrowIcon } from '../assets/icons/DownArrowIcon';

export const LandingPage = () => {
    return (
        <main className="min-h-screen bg-dark overflow-x-hidden" >
            <nav className="h-[10vh] flex items-center justify-around" >
                <h1 className="text-logo font-bold text-[28px] lg:text-[36px]">YOUSAC</h1>
                <Link className="dark:text-white font-bold text-[12px] lg:text-[16px] hover:text-gray-100" to="/auth/login">
                    Iniciar sesión
                </Link>
            </nav>
            <section className="h-[70vh] flex flex-col gap-y-8 mt-10">
                <RocketSVG className="w-full h-full " viewBox="0 0 326 239" />
                <h2 className="dark:text-white text-center text-[16px] lg:text-[22px]">Las mejores Recomendaciones</h2>
                <div className="flex justify-center items-center">
                    <DownArrowIcon className="dark:text-primary-dark-1 text-2xl lg:text-3xl" />
                </div>

            </section>
            <div className="h-[10vh] absolute bottom-0 right-0 w-full">
                <Waves1SVG className="w-full" preserveAspectRatio="none" viewBox="0 0 300 100" />
            </div>
        </main>
    )
}
