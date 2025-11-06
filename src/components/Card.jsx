// Componente de presentación para dar marco visual y consistencia (lo reuso del curso de react typescritp que me informe que se puede con jsx)

export default function Card({ title, children, actions }){
return (
<div style={{background:'#fff', border:'1px solid #e2e8f0', borderRadius:16, padding:20, boxShadow:'0 1px 2px rgba(0,0,0,0.04)'}}>
{title && <h2 style={{fontSize:18, fontWeight:600, marginTop:0}}>{title}</h2>}
<div style={{display:'grid', gap:12}}>{children}</div>
{actions && <div style={{marginTop:12, display:'flex', gap:8, flexWrap:'wrap'}}>{actions}</div>}
</div>
)
}