# Investigación de Mercado: Centro de Suscripciones

## 1. Resumen Ejecutivo
El mercado de "Gestión de Suscripciones" se divide principalmente en dos categorías:
1.  **Gestores Automatizados (ej. Rocket Money)**: Se conectan a bancos, detectan gastos automáticamente y ofrecen servicios de negociación de facturas. Son potentes pero requieren acceso a datos sensibles.
2.  **Trackers Manuales / Privacidad (ej. Bobby, Subby)**: El usuario introduce los datos manualmente. Se valoran por su diseño minimalista, respeto a la privacidad y simplicidad.

**Oportunidad**: Existe una demanda clara de una herramienta que combine la **simplicidad visual** de los trackers manuales con **insights inteligentes** (métricas) sin necesariamente requerir conexión bancaria intrusiva en una primera fase (o haciéndola opcional).

## 2. Top Competidores

| Característica | Rocket Money | Bobby | Subby |
| :--- | :--- | :--- | :--- |
| **Enfoque** | Finanzas completas & Automatización | Diseño y Simplicidad Visual | Simplicidad y Funcionalidad (Android) |
| **Ingreso de Datos** | Automático (Conexión Bancaria) | Manual | Manual |
| **Privacidad** | Datos en nube (necesario para operar) | Local / Privacidad primero | Local / Privacidad primero |
| **Modelo de Precio** | Freemium + % de ahorro en facturas | Pago único / Propina | Gratis / Pago único |
| **Factor Diferencial** | **Negociación de facturas** | **Estética y UX** | **Facilidad de uso** |

## 3. Funcionalidades Clave (Regla 80/20)
El 80% del valor para el usuario reside en el 20% de las funcionalidades. Para un MVP (Producto Mínimo Viable), estas son las esenciales:

### Núcleo (Must-Have)
1.  **Catálogo Visual**: Lista clara de suscripciones con iconos reconocibles (Netflix, Spotify, etc.).
2.  **Alertas de Renovación**: Notificaciones *antes* de que se realice el cobro (ej. "Netflix se cobra mañana").
3.  **Cálculo de Gasto Total**: Saber exactamente cuánto se gasta al mes y al año (el "shock factor").
4.  **Soporte Multi-moneda**: Vital para usuarios con servicios en USD, EUR, etc.

### Factor "Wow" (Diferenciadores)
*   **Detección de "Gastos Hormiga"**: Visualización de cuánto se va en suscripciones pequeñas acumuladas.
*   **Calendario de Pagos**: Una vista de calendario para ver la distribución de pagos en el mes.
*   **Conversión Automática de Divisas**: Si pago en USD pero gano en EUR, ver el coste real actualizado.

## 4. Métricas para el Dashboard (Top 5)
Estas son las métricas críticas que deben aparecer en la pantalla principal ("Dashboard"):

1.  **Gasto Mensual Total / Promedio**: El dato número uno que el usuario quiere reducir. _(ej. "Este mes: $145.00")_
2.  **Próximo Cobro Inminente**: La urgencia. _(ej. "Spotify: en 2 días")_
3.  **Gasto Anual Proyectado**: Para dar perspectiva a largo plazo. _(ej. "Al año: $1,740")_
4.  **Distribución por Categorías**: ¿Gasto más en Entretenimiento o en Productividad?
5.  **Suscripciones Activas**: Número total de servicios contratados.

## 5. Recomendaciones de Diseño & Tech
*   **Estética**: "Glassmorphism" y modo oscuro son tendencia. Usar colores vibrantes para los logos de las marcas sobre fondos limpios.
*   **Interacción**: Micro-interacciones al marcar una suscripción como "pagada" o al añadir una nueva.
*   **Privacidad**: Destacar que los datos "viven en tu dispositivo" si se opta por el enfoque manual.
