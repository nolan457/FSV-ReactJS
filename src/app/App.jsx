import '@/styles/App.css'
import Count from '@/components/example/count.jsx'
import Form from '@/components/example/form.jsx'
import Cart from '@/components/example/cart.jsx'
import Area from '@/components/example/area.jsx'
import MapExample from '@/components/example/map.jsx'
import ClockTime from '@/components/example/reloj.jsx'

function App() {
  return (
    <>
      <ClockTime />
      <Cart />
      <MapExample />
      <Form />
      <Count />
      <Area />
    </>
  )
}

export default App
