import { useEffect, useRef, useState } from 'react'
import Card from '../components/Card.jsx'
import Button from '../components/Button.jsx'


/**
* En este ejercicio:
* -uso el useState para llevar los segundos transcurridos y si está corriendo.
* -uso el useRef para guardar el id del setInterval sin provocar re-render cuando cambia.
* -y por utlmo uso useEffect para limpiar el intervalo al desmontar
*/
export default function Ej6(){
const [seconds, setSeconds] = useState(0)
const [running, setRunning] = useState(false)
const intervalRef = useRef(null)


//arranco el intervalo sólo si no estaba ya corriendo
const start = () => {
if(running) return
setRunning(true)
intervalRef.current = setInterval(()=> setSeconds(s=>s+1), 1000)
}


const pause = () => {
setRunning(false)
clearInterval(intervalRef.current)
intervalRef.current = null
}


const reset = () => {
pause()
setSeconds(0)
}


useEffect(()=>()=>clearInterval(intervalRef.current),[])


const hh = String(Math.floor(seconds/3600)).padStart(2,'0')
const mm = String(Math.floor((seconds%3600)/60)).padStart(2,'0')
const ss = String(seconds%60).padStart(2,'0')


return (
<Card title="6) Temporizador">
<div style={{fontSize:40, fontFamily:'monospace', textAlign:'center'}}>{hh}:{mm}:{ss}</div>
<div style={{display:'flex', gap:8, flexWrap:'wrap', justifyContent:'center'}}>
<Button onClick={start} disabled={running} style={running?{opacity:0.5, cursor:'not-allowed'}:{}}>Iniciar</Button>
<Button onClick={pause}>Pausar</Button>
<Button onClick={reset} style={{background:'#f8fafc'}}>Reiniciar</Button>
</div>
</Card>
)
}