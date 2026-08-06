import { useState } from "react";
import header from "../../helpers/title";

function Count() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    return (
        <div className="flex flex-col items-center gap-4 border border-gray-200 w-80 m-auto my-4 py-4">
            <h1>{header(count, "Cantidad de clics:")}</h1>
            <button onClick={increment} className="bg-green-500 text-white py-2 px-4 rounded-3xl">Incrementar clics</button>
        </div>
    )
}


export default Count;