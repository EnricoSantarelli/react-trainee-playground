import { Link } from "react-router-dom";
import AssessmentInput from "../components/AssessmentInput";

export default function HomePage() {
    return (
        <main>
            <AssessmentInput />
            <h1>Página de Início</h1>
            <p>Seja bem-vindo</p>
            <Link to="/login">Login</Link>
        </main>
    );
}