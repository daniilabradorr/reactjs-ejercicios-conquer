import { useMemo, useState } from 'react'
import Card from '../components/Card.jsx'


/**
* En este ejercicio:
* -uso el useState para el texto del textarea.
* -y tambine uso eluseMemo para derivar recuentos (palabras y caracteres sin espacios) sólo cuando cambia el texto.
*/
export default function Ej8(){
const [text, setText] = useState('')

//derivo los contadores: si 'text' no cambia, no recalculo
const counts = useMemo(()=>{
const trimmed = text.trim()
const words = trimmed ? trimmed.split(/\s+/).length : 0 //separo por espacios consecutivos
const chars = text.replace(/\s+/g, '').length //elimino espacios y saltos de línea
return {words, chars}
}, [text])


return (
<Card title="8) Contador de Palabras y Caracteres">
<textarea value={text} onChange={e=>setText(e.target.value)} placeholder="Escribe tu párrafo aquí…" style={{border:'1px solid #e2e8f0', borderRadius:12, padding:'8px 12px', width:'100%', minHeight:160}} />
<div style={{display:'flex', gap:16, fontSize:14}}>
<span>Palabras: <strong>{counts.words}</strong></span>
<span>Caracteres (sin espacios): <strong>{counts.chars}</strong></span>
</div>
</Card>
)
}