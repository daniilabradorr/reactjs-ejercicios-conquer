# ReactJS – Entrega de Ejercicios

**Repositorio con 9 ejercicios básicos de React** desarrollados para que **ustedes profesores me corrijan los ejercicos**.

Cada ejercicio está **comentado**, poniendo foco en el uso de **useState, useEffect, useMemo y useRef**.

---

## 🧰 Tecnologías

* **React 18**
* **Vite**
* **React Router DOM** (HashRouter)
* **JavaScript** (ES Modules)

---

## 🧠 Hooks usados
* `**useState**`: fuente de verdad de la UI; cada `setState` re-renderiza.
* `**useEffect**`: sincroniza efectos con el mundo exterior; devuelve **función de limpieza**.
* `**useMemo**`: **memoriza** cálculos derivados para no recomputar si no cambian dependencias.
* `**useRef**`: guarda valores **mutables** que no provocan re-render (ids de intervalos, referencias DOM).

---

## ✅ Checklist de corrección (para usted profesor)

* [x] Estructura por componentes (`Card`, `Button`) y páginas separadas.
* [x] Rutas `/`, `/1…/9` funcionando con `HashRouter`.
* [x] **Inmutabilidad** en operaciones de lista (`map`, `filter`, `spread`).
* [x] `useEffect` con **limpieza** donde corresponde (Ej1, Ej6, Ej9 persistencia).
* [x] `useMemo` aplicado con dependencias correctas (Ej4, Ej8).
* [x] `useRef` para el intervalo (Ej6).
* [x] Accesibilidad mínima (`labels`) y **Enter** en Ej3/Ej9.
* [x] Sin warnings de consola en ejecución normal.