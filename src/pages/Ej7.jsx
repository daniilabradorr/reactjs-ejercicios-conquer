import { useState } from 'react'
import Card from '../components/Card.jsx'
import Button from '../components/Button.jsx'


/**
* En este ejercicio:
* -uso el useState para longitud, contraseña generada y errores.
* -intento usar crypto.getRandomValues para mejor aleatoriedad, creo que viene bien.
* -y pongo un boton para copiar al portapapeles.
*/
export default function Ej7(){
const [len, setLen] = useState(8)
const [pwd, setPwd] = useState('')
const [err, setErr] = useState('')


const generate = () => {
setErr('')
const n = Number(len)
if(!Number.isInteger(n) || n<4){ setErr('La longitud debe ser un entero ≥ 4.'); return }
const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{};:,.?/'

const cryptoRand = (max)=> window.crypto && crypto.getRandomValues ? (crypto.getRandomValues(new Uint32Array(1))[0] % max) : Math.floor(Math.random()*max)
let out = ''
for(let i=0;i<n;i++) out += chars[ cryptoRand(chars.length) ]
setPwd(out) //actualizo estado con la contraseña final
}


const copy = async ()=>{
if(!pwd) return
try{ await navigator.clipboard.writeText(pwd); alert('Copiado al portapapeles') } catch{}
}


return (
<Card title="7) Generador de Contraseñas">
<div style={{display:'flex', alignItems:'center', gap:8}}>
<label htmlFor="len" style={{fontSize:14}}>Longitud</label>
<input id="len" type="number" min={4} value={len} onChange={e=>setLen(e.target.value)} style={{border:'1px solid #e2e8f0', borderRadius:12, padding:'8px 12px', width:96}}/>
<Button onClick={generate}>Generar contraseña</Button>
</div>
{err && <p style={{color:'#dc2626'}}>{err}</p>}
{pwd && (
<div style={{display:'flex', alignItems:'center', gap:8}}>
<code style={{padding:'4px 8px', background:'#f1f5f9', borderRadius:6}}>{pwd}</code>
<Button onClick={copy} style={{background:'#fff'}}>Copiar</Button>
</div>
)}
</Card>
)
}