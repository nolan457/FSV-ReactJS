const products = [
    { id: 1 , name: 'Tarjeta gráfica RTX', active: true, cost: 3000 },
    { id: 2 , name: 'Procesador core i7', active: false, cost: 2000 },
    { id: 3 , name: 'Mousepad Redragon RGB', active: true, cost: 800 },    
];

const productsActives = products.filter(product => product.active);
const totalCost = productsActives.reduce((suma, product) => suma + product.cost, 0);

function MapExample() {

    return (
        <div className="flex flex-col items-center border border-gray-200 w-80 mx-auto my-4 py-4">
            <h2 className="font-semibold pb-2">Recomendados:</h2>
            <ul className="text-center">
                {productsActives.map(product => (
                        <li key={product.id}>{product.name} - {product.cost}$</li>
                    ))}
            </ul>
            <p>Precio del carrito: {totalCost}$</p>
        </div>
    )
}


export default MapExample;   