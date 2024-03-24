import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AssessmentInput from "../components/AssessmentInput";

export default function UserPage() {

    const { usuario } = useParams()

    const [idade, setIdade] = useState(0);

    const handleMinusClick = () => {
        if (idade > 0) {
            setIdade(idade - 1)
        }
    }

    const handlePlusClick = () => {
        setIdade((idadeAtual) => idadeAtual + 1)
    }

    useEffect(() => {
        alert(`Bem-vindo ${usuario}`)
    }, [])

    useEffect(() => {
        if (idade >= 18) {
            alert("Você é maior de idade")
        }
    }, [idade])

    return (
        <main>
            <AssessmentInput />
            <p>{usuario}</p>
            <div>
                <p>Selecione a sua idade</p>
                <section>
                    <button onClick={handleMinusClick}>-</button>
                    <p>{idade}</p>
                    <button onClick={handlePlusClick}>+</button>
                </section>
            </div>
        </main>
    );
}