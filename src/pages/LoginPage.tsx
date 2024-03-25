import { useState } from "react";
import { Link } from "react-router-dom";
import AssessmentInput from "../components/AssessmentInput";
import { useTheme } from "../hooks/useTheme";

export default function LoginPage() {

    const [, setPassword] = useState<string>();
    const [username, setUsername] = useState<string>();

    const { isDarkTheme, toggleTheme } = useTheme();

    return (
        <main style={{ background: isDarkTheme ? "black" : "white" }}>
            <AssessmentInput />
            <button onClick={toggleTheme}>Mudar tema</button>
            <h1>Página de Login</h1>
            <form>
                <input type="text" onChange={(e) => setUsername(e.currentTarget.value)} />
                <input type="senha" onChange={(e) => setPassword(e.currentTarget.value)} />
            </form>
            <Link to={`/user/${username}`}>Login</Link>
        </main>
    );
}