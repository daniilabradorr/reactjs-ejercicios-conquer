import { useState } from 'react';
import Card from '../components/Card.jsx';
import Button from '../components/Button.jsx';

/**
 * En este ejercicio:
 * - mantenemos el estado `text` para el campo de entrada y `items` para la lista.
 * - al añadir, generamos un id y creamos un nuevo array con spread.
 * - al eliminar, filtramos por id para crear un nuevo array sin el elemento.
 * - ahora también añadimos al pulsar Enter sobre el input.
 */
export default function Ej3() {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]); // Lista de objetos { id, text }

  const addItem = () => {
    const t = text.trim();
    if (!t) return; // evita entradas vacías
    const id = crypto.randomUUID?.() || String(Date.now() + Math.random());
    setItems(prev => [...prev, { id, text: t }]);
    setText(''); // limpia el input
  };

  const removeItem = (id) => {
    setItems(prev => prev.filter(it => it.id !== id));
  };

  // Maneja la pulsación de teclas en el input
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      addItem();
    }
  };

  return (
    <Card title="3) Lista Dinámica">
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <label htmlFor="item" style={{ position: 'absolute', left: -9999 }}>
          Texto
        </label>
        <input
          id="item"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown} // ⬅️ Detecta Enter
          placeholder="Escribe y pulsa Agregar"
          style={{
            border: '1px solid #e2e8f0',
            borderRadius: 12,
            padding: '8px 12px',
            flex: 1,
            minWidth: 220,
          }}
        />
        <Button onClick={addItem}>Agregar</Button>
      </div>
      <ul
        style={{
          display: 'grid',
          gap: 8,
          paddingLeft: 0,
          listStyle: 'none',
        }}
      >
        {items.length === 0 && (
          <li style={{ color: '#64748b' }}>No hay elementos aún.</li>
        )}
        {items.map((it) => (
          <li
            key={it.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 12,
              background: '#f1f5f9',
              borderRadius: 12,
              padding: '8px 12px',
            }}
          >
            <span>{it.text}</span>
            <Button
              onClick={() => removeItem(it.id)}
              style={{ background: '#fff' }}
            >
              Eliminar
            </Button>
          </li>
        ))}
      </ul>
    </Card>
  );
}
