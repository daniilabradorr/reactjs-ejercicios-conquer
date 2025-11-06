import { useMemo, useState } from 'react'
import Card from '../components/Card.jsx'


/**
* En este ejercicio:
* -uso el useState para guardar la query de búsqueda.
* -tambien uso useMemo para fijar la lista base (data) y para calcular resultados filtrados sólo cuando cambia 'q'.
* de esta manera así evito recalcular en renders donde 'q' no varía.
*/
export default function Ej4(){
const [q, setQ] = useState('')


//Lista fuente "estable": la memorizo para que su referencia no cambie entre renders
const data = useMemo(()=>['Perro','Gato','Pez','Loro','Caballo','Gacela','Gallo'],[])


//los resultados filtrados: depende de 'q' y 'data'. Sólo recalcula si alguno cambia
const results = useMemo(()=>{
const s = q.trim().toLowerCase()
if(!s) return data // Sin query => se muestra todo
return data.filter(x=>x.toLowerCase().includes(s))
}, [q, data])


return (
<Card title="4) Filtro de Búsqueda en Tiempo Real">
<input value={q} onChange={e=>setQ(e.target.value)} placeholder="Escribe para filtrar…" style={{border:'1px solid #e2e8f0', borderRadius:12, padding:'8px 12px', width:'100%'}}/>
<ul style={{paddingLeft:20}}>
{results.length===0 && <li style={{listStyle:'none', color:'#64748b'}}>Sin coincidencias</li>}
{results.map((x,i)=>(<li key={i}>{x}</li>))}
</ul>
</Card>
)
}