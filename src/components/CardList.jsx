import Card from '@/components/Card.jsx'

function CardList({ List }) {
    return (
        <div>
            {List.map((item, index) => (
                <Card key={index} primaryParamValue={item.nombre} secondaryParamValue={item.edad} />
            ))}
        </div>
    )
}

export default CardList