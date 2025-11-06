import { useState } from 'react'
import Card from '../components/Card.jsx'
import Button from '../components/Button.jsx'


/**
* En este ejercicio:
* -utilizo el uso del  useState para llevar el número de clics.
* -cada clic hace que incremente el estado con React rerenderizo la vista.
*/
export default function Ej2(){
// useState: 'count' guarda el valor actual, 'setCount' lo actualiza.
const [count, setCount] = useState(0)
return (
<Card title="2) Contador de Clics">
<p style={{fontSize:28, fontWeight:700}}>Clics: {count}</p>
<div style={{display:'flex', gap:8}}>
{/*actualzio a partir del valor anterior para evitar errores*/}
<Button onClick={()=>setCount(c=>c+1)}>Contar clic</Button>
<Button onClick={()=>setCount(0)} style={{background:'#f8fafc'}}>Reiniciar</Button>
</div>
</Card>
)
}