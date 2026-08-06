import { useState } from "react";

function Form() {
    const [name, setName] = useState('');
    const [msg, setMsg] = useState('');

    const sendMsg = (e) => {
        e.preventDefault();
        console.log("nombre:", name, "mensaje:", msg);
        setName('');
        setMsg('');
    }

    return (
        <div className="flex justify-center items-center border border-gray-200 min-h-60 w-96 m-auto">
            <form onSubmit={sendMsg} className="flex flex-col items-center gap-3">
                <h3 className="font-semibold pb-2">Comentarios</h3>
            <input placeholder="Nombre:" value={name} onChange={(e) => setName(e.target.value)} className="bg-blue-100 rounded-sm border border-blue-200 p-1"></input>
            <textarea value={msg} onChange={(e) => setMsg(e.target.value)} className="bg-blue-100 rounded-sm border border-blue-200 p-1 w-64 max-w-80 max-h-40 min-h-16 resize"></textarea>
            <button type="submit" className="bg-blue-500 text-white rounded-md px-2 py-1">Enviar</button>
            </form>
        </div>
    )
}

export default Form;