# Guía Maestra de Integraciones y Conexiones MCP: Notion, Supabase y Cloudflare

**Sociedad de Escritores Letras y Voces de Tabasco, A.C.**  
**Ecosistema Digital LVT — Arquitectura de Medios y Gobernanza de Datos**

---

## 1. Integración de la Rifa Pro-Fondos en Notion

### A. Estructura de la Base de Datos en Notion
Para llevar el control exacto de los **100 números (00 al 99)** y sincronizarlos con la web, crea una Base de Datos en Notion con el nombre:  
`Control de Boletos - Rifa Pro-Fondos LVT 2026`

| Propiedad en Notion | Tipo de Propiedad | Opciones / Descripción |
| :--- | :--- | :--- |
| **Numero** | `Title` | Texto: `'00'`, `'01'`, `'02'`, ... `'99'` |
| **Estado** | `Select` | `Disponible` (Verde), `Apartado` (Amarillo), `Pagado` (Azul), `Premiado` (Dorado) |
| **Comprador** | `Text` | Nombre y apellidos del aportante |
| **Teléfono WhatsApp** | `Phone Number` | Número telefónico para confirmación |
| **Pareja / Boleto Doble** | `Relation` | Relación con el segundo número del par ($100 MXN) |
| **Monto Aportado** | `Number` | Formato moneda: `$100.00 MXN` |
| **Comprobante de Pago** | `Files & Media` | Captura o PDF de la transferencia bancaria |
| **Fecha de Registro** | `Created Time` | Marca de tiempo automática |

---

### B. Cómo Bloquear Números en la Página Web desde Notion
1. En Notion, cuando una persona reserve o pague un número, cambia su estado a **`Apartado`** o **`Pagado`**.
2. En el archivo `src/data/rifaConfig.ts` de la página web, agrega los números en la lista:
   ```typescript
   export const BOLETOS_BLOQUEADOS: string[] = [
     '07', '13', '26', '77', '99' // Se bloquearán y tacharán automáticamente en la cuadrícula
   ];
   ```
3. La página web inhabilita automáticamente esos botones con estilo tachado (`line-through`) y no permite que nadie más los elija, ni manualmente ni mediante el botón de selección al azar.

---

## 2. Implementaciones y Conexiones Disponibles en el Ecosistema

### 1. Notion API / MCP
- **Propósito:** Base de datos relacional para el padrón de socios, catálogo de publicaciones, solicitudes de membresía y control de la rifa.
- **Cómo usarlo:**
  - Crear una integración interna en [notion.so/my-integrations](https://www.notion.so/my-integrations) para obtener el `NOTION_API_KEY`.
  - Compartir la base de datos de Notion con la integración.
  - Los scripts pueden consultar en tiempo real los boletos con estado `Pagado` o `Apartado` y generar automáticamente el archivo `rifaConfig.ts` antes de cada despliegue.

### 2. Supabase (Base de Datos PostgreSQL en Tiempo Real)
- **Propósito:** Almacenamiento dinámico de datos de alta concurrencia, autenticación de miembros directivos y registro instantáneo de boletos sin necesidad de recompilar.
- **Cómo usarlo:**
  - Crear una tabla `boletos_rifa (numero text primary key, estado text, comprador text)`.
  - Usar la biblioteca `@supabase/supabase-js` en el frontend para escuchar cambios en tiempo real con WebSockets (`supabase.channel('rifa').on(...)`).

### 3. Cloudflare (Workers, Pages & CDN)
- **Propósito:** Aceleración global de carga, almacenamiento perimetral (Cloudflare KV) y microservicios API serverless sin costo de servidor.
- **Cómo usarlo:**
  - Un Cloudflare Worker puede actuar como intermediario (*webhook*) entre WhatsApp / Stripe y la base de datos de Notion, actualizando el estado de los boletos en milisegundos.

---

## 3. Guía de Uso del Botón de 2 Boletos al Azar en la Web

- **Primer Clic:** Selecciona 2 números libres que no estén tomados y muestra la notificación:  
  `🎲 Selección aleatoria #1 aplicada: Se añadieron los boletos #XX y #YY (Total: 2 números)`.
- **Segundo Clic:** Sin tocar los ya seleccionados, toma 2 nuevos números libres y actualiza:  
  `🎲 Selección aleatoria #2 aplicada: Se añadieron los boletos #ZZ y #WW (Total acumulado: 4 números = 2 boletos dobles)`.
- **Botón Limpiar:** Restablece la selección y el contador de tiradas a cero.
