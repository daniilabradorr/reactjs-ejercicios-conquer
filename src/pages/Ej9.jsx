import { useEffect, useState } from 'react';
import Card from '../components/Card.jsx';
import Button from '../components/Button.jsx';

/**
* En este ejercicio:
* - uso el useState para el texto del input y para el array de tareas.
* - inicializo 'tasks' leyendo de localStorage una sola vez (función en useState).
* - uso useEffect para persistir 'tasks' en localStorage cada vez que cambian.
* - las acciones: agregar, marcar/desmarcar (toggle), eliminar y limpiar completadas.
* - ahora también se puede pulsar Enter para agregar la tarea.
*/
export default function Ej9(){
  const STORAGE_KEY = 'react_ej9_tasks';

  const [text, setText] = useState(''); // input controlado para la nueva tarea

  // useState con función inicializadora: solo se ejecuta en el primer render
  const [tasks, setTasks] = useState(() => {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
    catch { return []; }
  });

  // useEffect: cada vez que 'tasks' cambie, guardo en localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  // agregar tarea nueva (creo un objeto y creo un NUEVO array con spread)
  const addTask = () => {
    const t = text.trim();
    if (!t) return;
    const id = crypto.randomUUID?.() || String(Date.now() + Math.random());
    setTasks(prev => [...prev, { id, text: t, done: false }]);
    setText('');
  };

  // toggle: mapeo y cambio solo la tarea cuyo id coincide
  const toggle = (id) => setTasks(prev =>
    prev.map(x => x.id === id ? { ...x, done: !x.done } : x)
  );

  // eliminar: filtro y me quedo con todas menos la que tenga ese id
  const remove = (id) => setTasks(prev => prev.filter(x => x.id !== id));

  // limpiar completadas: me quedo solo con las que aún no están 'done'
  const clearDone = () => setTasks(prev => prev.filter(x => !x.done));

  // manejar Enter en el input para agregar tarea
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  };

  return (
    <Card title="9) Lista de Tareas con localStorage">
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <label htmlFor="task" style={{ position: 'absolute', left: -9999 }}>Tarea</label>
        {/* input controlado para el texto de la tarea */}
        <input
          id="task"
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyDown={handleKeyDown}   // ⬅️ Agrega al pulsar Enter
          placeholder="Nueva tarea…"
          style={{
            border: '1px solid #e2e8f0',
            borderRadius: 12,
            padding: '8px 12px',
            flex: 1,
            minWidth: 220,
          }}
        />
        <Button onClick={addTask}>Agregar</Button>
        <Button onClick={clearDone} style={{ background: '#f8fafc' }}>Limpiar completadas</Button>
      </div>
      <ul style={{ display: 'grid', gap: 8, paddingLeft: 0, listStyle: 'none' }}>
        {tasks.length === 0 && <li style={{ color: '#64748b' }}>No hay tareas.</li>}
        {tasks.map(t => (
          <li
            key={t.id}
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
            <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <input type="checkbox" checked={t.done} onChange={() => toggle(t.id)} />
              <span style={t.done ? { textDecoration: 'line-through', color: '#64748b' } : {}}>{t.text}</span>
            </label>
            <Button onClick={() => remove(t.id)} style={{ background: '#fff' }}>Eliminar</Button>
          </li>
        ))}
      </ul>
    </Card>
  );
}
