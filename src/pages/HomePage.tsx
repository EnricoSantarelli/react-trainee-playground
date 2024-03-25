import { Link } from "react-router-dom";
import AssessmentInput from "../components/AssessmentInput";
import { useEffect, useRef } from "react";

export default function HomePage() {

    const btnRef = useRef<HTMLAnchorElement>(null)

    useEffect(() => {
        document.addEventListener("click", (e: MouseEvent) => {
            if (btnRef.current && !btnRef.current.contains(e.target as Node)) {
                alert("Você clicou fora do botão")
            }
        });
    }, []);

    return (
        <main>
            <AssessmentInput />
            <h1>Página de Início</h1>
            <p>Seja bem-vindo</p>
            <Link ref={btnRef} to="/login">Login</Link>
        </main>
    );
}