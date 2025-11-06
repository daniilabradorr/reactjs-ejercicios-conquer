import { useState } from 'react'
import Card from '../components/Card.jsx'
import Button from '../components/Button.jsx'


/**
* En este ejercicio:
* -uso el useState para los dos operandos (como textos), el resultado y el error.
* -valido las entradas para controlar las divisiones por cero y calcular según la operación.
*/
export default function Ej5(){
const [a, setA] = useState('')
const [b, setB] = useState('')
const [res, setRes] = useState(null)
const [error, setError] = useState('')


const parse = (v)=>{
if(v.trim()==='') return null
const n = Number(v)
return Number.isFinite(n) ? n : null
}


const compute = (op)=>{
setError(''); setRes(null)
const n1 = parse(a), n2 = parse(b)
if(n1===null || n2===null){ setError('Introduce números válidos en ambos campos.'); return }
if(op==='div' && n2===0){ setError('No se puede dividir por cero.'); return }
const r = op==='sum'? n1+n2 : op==='res'? n1-n2 : op==='mul'? n1*n2 : n1/n2
setRes(r)
}


return (
<Card title="5) Calculadora Sencilla">
<div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))', gap:8}}>
<input inputMode="decimal" value={a} onChange={e=>setA(e.target.value)} placeholder="Número A" style={{border:'1px solid #e2e8f0', borderRadius:12, padding:'8px 12px'}}/>
<input inputMode="decimal" value={b} onChange={e=>setB(e.target.value)} placeholder="Número B" style={{border:'1px solid #e2e8f0', borderRadius:12, padding:'8px 12px'}}/>
</div>
<div style={{display:'flex', gap:8, flexWrap:'wrap'}}>
<Button onClick={()=>compute('sum')}>Sumar</Button>
<Button onClick={()=>compute('res')}>Restar</Button>
<Button onClick={()=>compute('mul')}>Multiplicar</Button>
<Button onClick={()=>compute('div')}>Dividir</Button>
</div>
{/*aqui añado un render condicional según haya error o resultado */}
{error && <p style={{color:'#dc2626'}}>{error}</p>}
{res!==null && <p style={{fontSize:20}}>Resultado: <span style={{fontFamily:'monospace'}}>{res}</span></p>}
</Card>
)
}