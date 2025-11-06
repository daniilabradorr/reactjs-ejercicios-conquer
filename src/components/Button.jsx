//Botón reutilizable con estilos simples para no repetir CSS inline
export default function Button({ children, style, ...props }){
return (
<button {...props} style={{
padding:'8px 12px',
borderRadius:12,
border:'1px solid #e2e8f0',
background:'#fff',
boxShadow:'0 1px 1px rgba(0,0,0,0.04)',
cursor:'pointer',
...style
}}>
{children}
</button>
)
}