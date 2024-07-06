"use client";

import { useAppContext } from "../context/index"

export function ThemeSwitcher() {
    const {theme, setTheme}=useAppContext()
    return (
        <div className="fixed top-52 right-0 max-md:top-72 max-md:right-0 max-md:w-auto">
            <div className="border-5 flex flex-row justify-end">
                <div className="bg-red-500 p-5 rounded-s-full cursor-pointer max-md:hidden" onClick={()=>setTheme(!theme)}>
                    Switch Theme
                </div>
                <div className="bg-red-500 p-4 rounded-s-full rounded-e-full cursor-pointer mr-2 md:hidden" onClick={()=>setTheme(!theme)}>
                    Theme
                </div>
            </div>
        </div>
    )
};