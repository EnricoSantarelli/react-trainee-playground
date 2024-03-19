import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <main>
            <h1>Página de Início</h1>
            <p>Seja bem-vindo</p>
            <Link to="/login">Login</Link>
        </main>
    );
}