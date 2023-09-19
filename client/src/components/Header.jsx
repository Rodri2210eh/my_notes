import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { RiSearch2Line } from "react-icons/ri";

export function Header() {

    return (
        <header className={'bg-[#1F1D2B] max-w-full h-24 pl-28 mb-16 flex justify-center align-middle text-center flex-col'}>
            <div>
                <h1 className="text-2xl font-bold">
                    Welcome to Espinotes
                </h1>
                <h3>
                    A Note-Taking Adventure Awaits You with EspiNotes.
                </h3>
            </div>
        </header>
    );
}
