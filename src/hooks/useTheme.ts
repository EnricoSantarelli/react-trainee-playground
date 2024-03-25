import { useState } from "react";

export function useTheme() {
    const [isDarkTheme, setIsDarkTheme] = useState(false)

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme)
    };

    return { isDarkTheme, toggleTheme }
}
