import React from "react";
import {
    RiHome6Line,
    RiLogoutCircleRLine,
    RiLoginCircleLine
} from "react-icons/ri";
import {
    AiFillFileAdd,
} from "react-icons/ai";
import {
    TbNotes,
} from "react-icons/tb";
import {
    GiPlagueDoctorProfile,
    GiArchiveRegister
} from "react-icons/gi";
import { useAuth } from "../context/authContext";



export function Slidebar() {

    const { isAuthenticated, user, logout } = useAuth();

    return (
        <div
            className={`bg-[#1F1D2B] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 transition-all  left-0`}
        >
            {
                isAuthenticated ? (
                    <>
                        <div>
                            <ul className="pl-4">
                                <li>
                                    <h1 className="text-2xl text-gray-300 uppercase font-bold text-center my-5">
                                        <img src="../../images/logo_transparent.png" />
                                    </h1>
                                </li>
                                <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                                    <a
                                        href="/"
                                        className="group-hover:bg-[#f98866] p-4 flex justify-center rounded-xl text-[#f98866] group-hover:text-white transition-colors"
                                    >
                                        <RiHome6Line className="text-2xl" />
                                    </a>
                                </li>
                                <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                                    <a
                                        href="/Tasks"
                                        className="group-hover:bg-[#f98866] p-4 flex justify-center rounded-xl text-[#f98866] group-hover:text-white transition-colors"
                                    >
                                        <TbNotes className="text-2xl" />
                                    </a>
                                </li>
                                <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                                    <a
                                        href="/add-task"
                                        className="group-hover:bg-[#f98866] p-4 flex justify-center rounded-xl text-[#f98866] group-hover:text-white transition-colors"
                                    >
                                        <AiFillFileAdd className="text-2xl" />
                                    </a>
                                </li>
                                <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                                    <a
                                        href="/profile"
                                        className="group-hover:bg-[#f98866] p-4 flex justify-center rounded-xl text-[#f98866] group-hover:text-white transition-colors"
                                    >
                                        <GiPlagueDoctorProfile className="text-2xl" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="pl-4">
                                <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                                    <a
                                        href="/"
                                        className="group-hover:bg-[#f98866] p-4 flex justify-center rounded-xl text-[#f98866] group-hover:text-white transition-colors"
                                        onClick={() => logout()}
                                    >
                                        <RiLogoutCircleRLine className="text-2xl" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </>
                ) : (
                    <>
                        <div>
                            <ul className="pl-4">
                                <li>
                                    <h1 className="text-2xl text-gray-300 uppercase font-bold text-center my-5">
                                        <img src="../../images/logo_transparent.png" />
                                    </h1>
                                </li>
                                <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                                    <a
                                        href="/"
                                        className="group-hover:bg-[#f98866] p-4 flex justify-center rounded-xl text-[#f98866] group-hover:text-white transition-colors"
                                    >
                                        <RiHome6Line className="text-2xl" />
                                    </a>
                                </li>
                                <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                                    <a
                                        href="/login"
                                        className="group-hover:bg-[#f98866] p-4 flex justify-center rounded-xl text-[#f98866] group-hover:text-white transition-colors"
                                    >
                                        <RiLoginCircleLine className="text-2xl" />
                                    </a>
                                </li>
                                <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                                    <a
                                        href="/register"
                                        className="group-hover:bg-[#f98866] p-4 flex justify-center rounded-xl text-[#f98866] group-hover:text-white transition-colors"
                                    >
                                        <GiArchiveRegister className="text-2xl" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </>
                )
            }

        </div>
    );
};
