"use client"
import React,{ createContext, useContext, useState } from "react"

const AppContext = createContext<any>(true)

export function ThemeProvider({ children }: {
    children: React.ReactNode
}) {
    let [theme, setTheme] = useState(true)

    return (
        <AppContext.Provider value={{theme,setTheme}}>
                {children}
        </AppContext.Provider>
    )
}

export function useAppContext(){
    return useContext(AppContext)
}