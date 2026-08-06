import header from "../../helpers/title"

const calcularArea = function(base, altura) {
    return (base * altura) / 2;
};

function Area() {

    return (
        <div className="flex flex-col items-center gap-4">
            <h3>{header(calcularArea(4, 4), "El area de 4x4 es:")}</h3>
        </div>
    )
}


export default Area;   