import React from 'react'
import { HashRouter, Routes, Route, NavLink, Link } from 'react-router-dom'
import Ej1 from './pages/Ej1.jsx'
import Ej2 from './pages/Ej2.jsx'
import Ej3 from './pages/Ej3.jsx'
import Ej4 from './pages/Ej4.jsx'
import Ej5 from './pages/Ej5.jsx'
import Ej6 from './pages/Ej6.jsx'
import Ej7 from './pages/Ej7.jsx'
import Ej8 from './pages/Ej8.jsx'
import Ej9 from './pages/Ej9.jsx'


// Pequeño layout reutilizable para no repetir estructura
const Shell = ({ children }) => (
<div style={{minHeight:'100vh', background:'#f8fafc', color:'#0f172a'}}>
<header style={{position:'sticky',top:0,backdropFilter:'blur(4px)',background:'rgba(255,255,255,0.9)',borderBottom:'1px solid #e2e8f0', zIndex:10}}>
<div style={{maxWidth:960, margin:'0 auto', padding:'12px 16px', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
<Link to="/" style={{fontWeight:700, fontSize:18, textDecoration:'none', color:'inherit'}}>React · Ejercicios 1</Link>
<nav style={{display:'flex', gap:8, fontSize:14}}>
<NavLink to="/" style={({isActive})=>({padding:'6px 8px', borderRadius:8, textDecoration:'none', background:isActive?'#0f172a':'transparent', color:isActive?'#fff':'#0f172a'})}>Inicio</NavLink>
{[1,2,3,4,5,6,7,8,9].map(n=> (
<a key={n} href={`#/${n}`} style={{padding:'6px 8px', borderRadius:8, textDecoration:'none', color:'#0f172a', background:'#e2e8f0'}}> {n} </a>
))}
</nav>
</div>
</header>
<main style={{maxWidth:960, margin:'0 auto', padding:16}}>{children}</main>
<footer style={{maxWidth:960, margin:'0 auto', padding:16, fontSize:12, color:'#64748b', textAlign:'center'}}>Con HashRouter para GitHub Pages.</footer>
</div>
)


function Home(){
const items = [
{n:1,t:'Cambiador de color de fondo'},
{n:2,t:'Contador de clics'},
{n:3,t:'Lista dinámica (add/delete)'},
{n:4,t:'Filtro de búsqueda en tiempo real'},
{n:5,t:'Calculadora sencilla'},
{n:6,t:'Temporizador (iniciar/pausar/reiniciar)'},
{n:7,t:'Generador de contraseñas'},
{n:8,t:'Contador de palabras y caracteres'},
{n:9,t:'To‑Do con localStorage'},
]
return (
<Shell>
<div style={{marginBottom:16}}>
<h1 style={{fontSize:24, fontWeight:700, margin:0}}>Índice</h1>
<p style={{color:'#475569'}}>Haz clic en un ejercicio para abrirlo.</p>
</div>
<div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:16}}>
{items.map(it=> (
<Link key={it.n} to={`/${it.n}`} style={{display:'block', background:'#fff', border:'1px solid #e2e8f0', borderRadius:16, padding:16, textDecoration:'none', color:'#0f172a'}}>
<div style={{fontSize:12, textTransform:'uppercase', letterSpacing:1, color:'#64748b'}}>Ejercicio {it.n}</div>
<div style={{fontWeight:600}}>{it.t}</div>
</Link>
))}
</div>
</Shell>
)
}


export default function App(){
return (
// Uso HashRouter para que en GitHub Pages no haya 404 al recargar una ruta
<HashRouter>
<Routes>
<Route path="/" element={<Home/>} />
{/* Cada ejercicio va en su fichero y lo envuelvo con el Shell */}
<Route path="/1" element={<Shell><Ej1/></Shell>} />
<Route path="/2" element={<Shell><Ej2/></Shell>} />
<Route path="/3" element={<Shell><Ej3/></Shell>} />
<Route path="/4" element={<Shell><Ej4/></Shell>} />
<Route path="/5" element={<Shell><Ej5/></Shell>} />
<Route path="/6" element={<Shell><Ej6/></Shell>} />
<Route path="/7" element={<Shell><Ej7/></Shell>} />
<Route path="/8" element={<Shell><Ej8/></Shell>} />
<Route path="/9" element={<Shell><Ej9/></Shell>} />
</Routes>
</HashRouter>
)
}