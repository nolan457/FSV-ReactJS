import { useState } from "react";
import header from "../../helpers/title"


function Cart() {
    const [productName, setproductName] = useState('');
    const [cart, setCart] = useState([{ type: 'Recibido', nombre: 'Teclado' }, { type: 'Recibido', nombre: 'Ratón' }]);

    const addProduct = (product) => {
        setCart((prevCart) => [...prevCart, product])
    }

    return (
        <div className="flex flex-col items-center gap-4 border border-gray-200 w-80 mx-auto my-4 py-4">
            <h1 className="font-semibold">{header(cart, 'Cantidad de productos:')}</h1>
            <ul className="flex flex-col w-full px-4 items-center text-center">
                {cart.map((producto, index) => (
                    <li key={index} className="break-words w-full">
                        Estado: {producto.type} - Nombre: {producto.nombre}
                    </li>
                ))}
            </ul>
            <input value={productName} onChange={(e) => setproductName(e.target.value)} className="bg-purple-100 rounded-sm border p-1"></input>
            <button type="submit" onClick={() => addProduct({ type: 'Nuevo', nombre: productName })} className="bg-amber-300 px-2 py-1 rounded-md">
                Agregar Producto
            </button>
        </div>
    )
}


export default Cart;