import { useState } from "react";

export default function AssessmentInput() {

    const [assessment, setAssessment] = useState(0);

    const handleMinusClick = () => {
        if (assessment > 0) {
            setAssessment(assessment - 1)
        }
    }

    const handlePlusClick = () => {
        if (assessment < 10) {
            setAssessment((assessmentAtual) => assessmentAtual + 1)
        }
    }

    return (
        <aside>
            <p>Avalie a sua experiência</p>
            <section>
                <button onClick={handleMinusClick}>-</button>
                <p>{assessment}</p>
                <button onClick={handlePlusClick}>+</button>
            </section>
        </aside>
    )
}