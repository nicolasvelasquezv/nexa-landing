# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# NEXA Landing Page — Sitio estático

Landing page pública de NEXA Limpieza Profesional, lista para Netlify Drop (sin build step).

## Archivos

```
nexa-landing/
├── index.html          — estructura completa (todas las secciones)
├── styles.css          — estilos (CSS custom properties, mobile-first)
├── script.js           — interactividad (scroll animations, counter, nav)
├── logo.png            — logo oficial exportado de NEXAVECTORES.ai (fondo transparente)
└── fonts/
    └── FiftiesVariable.ttf  — fuente Fifties Variable (del branding oficial)
```

## Branding

| Token | Valor |
|---|---|
| Verde oscuro | `#2a5f5c` |
| Verde claro | `#cbe4c5` |
| Fuente | Fifties Variable (`fonts/FiftiesVariable.ttf`) |

Estilo flat: sin sombras, sin bordes redondeados. El logo se muestra blanco sobre fondos oscuros con `filter: brightness(0) invert(1)`.

## Contacto fijo

- WhatsApp: `https://wa.me/573202335336` (Colombia +57, número 320 233 5336)
- Mensaje preescrito: `Hola NEXA, quiero cotizar un servicio de limpieza`
- Email: nexa.limpiezaprofesional@gmail.com
- Instagram: @nexa.limpieza

## Secciones

| Sección | ID | Notas |
|---|---|---|
| Nav | — | Fija, transparente → `#2a5f5c` al hacer scroll |
| Hero | `#inicio` | Imagen Unsplash, overlay verde |
| Stats | — | Contadores animados con IntersectionObserver |
| Servicios | `#servicios` | 4 cards: Sofás, Colchones, Tapetes, Cortinas |
| Por qué elegirnos | `#nosotros` | Fondo `#cbe4c5` |
| Cómo funciona | `#proceso` | 3 pasos |
| Testimonios | `#testimonios` | 3 reseñas |
| CTA final | — | Fondo `#2a5f5c` |
| Footer | `#contacto` | 22 barrios de Bogotá + Chía y Cajicá |

## Deploy

Sin dependencias de backend. Para actualizar en Netlify: reemplazar archivos en [app.netlify.com/drop](https://app.netlify.com/drop).

El logo fuente original está en `~/Desktop/nexa branding/NEXAVECTORES.ai`.
## Deploy actualizado (desde Mar 2026)

El proyecto está conectado a GitHub. Para publicar cambios:
```bash
git add . && git commit -m "descripcion" && git push
```

Netlify detecta el push y despliega automáticamente en ~30 segundos.
Repositorio: https://github.com/nicolasvelasquezv/nexa-landing

## Instrucciones para Claude Code

- Siempre preservar colores de branding (#2a5f5c, #cbe4c5)
- No cambiar la fuente Fifties Variable
- Las imágenes de servicios son URLs de Unsplash
- No tocar el logo.png ni la carpeta fonts/
- El sitio no tiene backend ni build step — solo HTML/CSS/JS puro
