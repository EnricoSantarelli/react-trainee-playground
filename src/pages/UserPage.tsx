import { useParams } from "react-router-dom";

export default function UserPage() {

    const { usuario } = useParams()

    return (
        <main>
            <p>{usuario}</p>
        </main>
    );
}