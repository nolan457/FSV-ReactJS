import '@/styles/App.css'


function Saludo(props){
  return <h1>Hola {props.nombre}</h1>
}

function App() {

  return (
    <>
      <Saludo nombre="Mundo" />
      <Saludo nombre="Pablo" />
      <Saludo nombre="Marta" />
    </>
  )
}

export default App
