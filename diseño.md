# Sistema de Diseño (Product Level)

## 1. Fundamentos Visuales

### Tipografía
- **Familia**: 'Outfit', sans-serif.
- **Pesos**:
  - Light (300): Detalles sutiles.
  - Regular (400): Texto cuerpo.
  - Medium (500): Etiquetas y botones.
  - SemiBold (600): Subtítulos.
  - Bold (700): Títulos principales.
- **Escala**:
  - H1: 32px (Monitor) / 28px (Mobile)
  - H2: 24px
  - H3: 20px
  - Body: 16px
  - Small: 14px
  - Tiny: 12px

### Colores (Dark Theme Premium)
- **Fondo**:
  - `bg-primary`: #0B0E14 (Fondo principal, casi negro)
  - `bg-secondary`: #151A21 (Paneles, tarjetas)
  - `bg-tertiary`: #1E252F (Inputs, elementos secundarios)
- **Acento**:
  - `primary`: #6C5DD3 (Violeta vibrante para acciones principales)
  - `primary-glow`: rgba(108, 93, 211, 0.5)
  - `secondary`: #3F8CFF (Azul para información)
- **Estado**:
  - `success`: #00D16C (Verde neón suave)
  - `warning`: #FFAD33 (Naranja cálido)
  - `danger`: #FF5B5B (Rojo salmón)
- **Texto**:
  - `text-main`: #FFFFFF
  - `text-muted`: #808191
  - `text-disabled`: #4B5264

### Espaciado y Radio
- **Radio**:
  - `radius-lg`: 24px (Contenedores grandes, modales)
  - `radius-md`: 16px (Tarjetas estándar)
  - `radius-sm`: 8px (Botones pequeños, inputs)
- **Espaciado**: Base 8px (0.5rem). Múltiplos: 16px, 24px, 32px, 48px.

## 2. Componentes UI

### Tarjetas (Cards)
- **Estilo**: Fondo `bg-secondary` con borde sutil `1px solid rgba(255,255,255,0.05)`.
- **Efecto Glassmorphism (Opcional)**: `backdrop-filter: blur(10px)` con fondo semitransparente.
- **Hover**: Elevación sutil `transform: translateY(-2px)` y sombra difusa coloreada si es interactiva.

### Botones
- **Primary**: Gradiente lineal sutil o color sólido `primary`. Sombra `box-shadow: 0 4px 12px var(--primary-glow)`.
- **Secondary**: Borde `1px solid var(--text-muted)` o fondo `bg-tertiary`.
- **Ghost**: Solo texto, hover con fondo `rgba(255,255,255,0.05)`.

### Gráficos
- Estilo minimalista.
- Grid lines muy sutiles o invisibles.
- Tooltips personalizados con estilo "Glass".
- Colores coherentes con la paleta.

## 3. Comportamientos
- **Transiciones**: `all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)` para suavidad premium.
- **Focus**: Anillo de foco visible color `primary` con opacidad.
