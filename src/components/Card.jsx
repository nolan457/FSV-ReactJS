import Button from "./UI/Button"

function Card({primaryParam = 'Nombre', primaryParamValue, secondaryParam = 'Edad', secondaryParamValue}) {
    return (
        <div style={{border: "1px solid black", padding: "10px", margin: "10px"}}>
            <h2>{primaryParam}: {primaryParamValue}</h2>
            <p>{secondaryParam}: {secondaryParamValue}</p>
            <Button label="Click me" OnClick={() => alert(`El ${primaryParam} es ${primaryParamValue} y la ${secondaryParam} es ${secondaryParamValue}`)} />
        </div>
    )
}

export default Card