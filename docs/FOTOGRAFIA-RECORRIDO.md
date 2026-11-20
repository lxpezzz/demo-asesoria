# Guía de Producción Fotográfica — Recorrido Arquitectónico (Fase 1)

Este documento especifica el material fotográfico necesario para sustituir las **láminas arquitectónicas conceptuales** actuales por fotografía editorial real del despacho, manteniendo coherencia espacial, fotorrealismo y rendimiento web.

## 1. Requisitos arquitectónicos obligatorios

- **Un único despacho real de 70–100 m²** (3–4 puestos de trabajo), sin mezclar instalaciones de distintas oficinas.
- **Materiales continuos en las 6 tomas:** suelo de roble natural mate, paredes en blanco roto / marfil mate, mobiliario contemporáneo sobrio en roble y grafito, archivadores en tonos piedra, grafito y acento discreto de terracota.
- **Iluminación natural coherente:** misma franja horaria (mañana suave / luz mediterránea difusa), sin mezclar luz fría de oficina con atardeceres artificiales.
- **Ventanas y exterior:** entorno urbano español discreto (fachadas de piedra o revoco claro fuera de foco). **Sin vegetación abundante, jardines ni bosques visibles.**
- **Prohibido:** recepciones de hotel o edificios corporativos enormes, renders CGI, simetrías artificiales, personas con rasgos distorsionados o encuadres imposibles.

## 2. Lista de tomas y encuadres

| Escena | Archivo escritorio (`16:10` / `16:9`) | Archivo móvil (`4:5` vertical) | Espacio negativo requerido | Enfoque / lente sugerida |
| --- | --- | --- | --- | --- |
| 01 Entrada (Hero) | `public/images/scenes/scene-01-entrada.webp` | `public/images/scenes/scene-01-entrada-mobile.webp` | Tercio izquierdo calmado para titular H1 | 28–35 mm a altura de ojos desde el umbral |
| 02 Área Fiscal | `public/images/scenes/scene-02-fiscal.webp` | `public/images/scenes/scene-02-fiscal-mobile.webp` | Encuadre equilibrado hacia escritorio y estantería AZ | 35 mm avanzando hacia el primer puesto |
| 03 Área Contable | `public/images/scenes/scene-03-contable.webp` | `public/images/scenes/scene-03-contable-mobile.webp` | Aire en el lateral derecho para titular y listado | 35–50 mm girando hacia el puesto junto al ventanal |
| 04 Área Laboral | `public/images/scenes/scene-04-laboral.webp` | `public/images/scenes/scene-04-laboral-mobile.webp` | Plano panorámico (`21:10` desktop) hacia el tercer puesto y la mampara | 35 mm desde el centro de la sala |
| 05 Mesa de Reuniones | `public/images/scenes/scene-05-reuniones.webp` | `public/images/scenes/scene-05-reuniones-mobile.webp` | Encuadre cálido de mesa de madera con 4 sillas | 35–50 mm a altura natural |
| 06 Despacho Privado | `public/images/scenes/scene-06-despacho.webp` | `public/images/scenes/scene-06-despacho-mobile.webp` | Perspectiva del visitante frente a la mesa de atención | 35 mm cruzando la puerta de la mampara |

## 3. Integración directa en el proyecto

Una vez generados los archivos optimizados en formato **WebP / AVIF** (escritorio `<= 220 KB`, móvil `<= 120 KB`, hero con prioridad LCP):

1. Colocar los archivos en `public/images/scenes/`.
2. Añadir `imageDesktop` e `imageMobile` en cada entrada de `SCENE_VISUALS` dentro de `src/data/scenes.ts`.
3. `SceneVisual.astro` activará automáticamente `<picture>` responsive, `loading="eager"` + `fetchpriority="high"` en la Escena 01 y `loading="lazy"` en las Escenas 02–06.
