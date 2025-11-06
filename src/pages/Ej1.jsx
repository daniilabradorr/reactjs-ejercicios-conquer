import { useEffect, useState } from 'react'
import Card from '../components/Card.jsx'
import Button from '../components/Button.jsx'


/**
* En este ejercicio:
* - guardo el color en un estado (useState) para que al cambiarlo React rerenderice.
* - con un efecto (useEffect) aplico el cambio de el color al <body> y limpio cuando cambie o al desmontar.
*/
export default function Ej1(){
const [color, setColor] = useState('hsl(210, 100%, 98%)')


// useEffect: cada vez que 'color' cambie pinto el fondo del <body>.

useEffect(()=>{
const prev = document.body.style.backgroundColor
document.body.style.backgroundColor = color
return ()=>{ document.body.style.backgroundColor = prev }
}, [color])


const randomColor = () => {
const h = Math.floor(Math.random()*360)
const s = 60 + Math.floor(Math.random()*30)
const l = 55 + Math.floor(Math.random()*20)
setColor(`hsl(${h}, ${s}%, ${l}%)`) 
}


return (
<Card title="1) Cambiador de Color de Fondo">
<p>Color actual: <span style={{fontFamily:'monospace'}}>{color}</span></p>
<Button onClick={randomColor}>Cambiar color</Button>
</Card>
)
}