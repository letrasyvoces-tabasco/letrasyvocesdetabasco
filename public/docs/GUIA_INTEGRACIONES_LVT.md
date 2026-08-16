# Guía Maestra de Integraciones y Servicios: Notion, Supabase, Cloudflare y Servidores MCP

### Sociedad de Escritores Letras y Voces de Tabasco, A.C. (LVT)
**Dirección de Tecnologías de la Información y Arquitectura de Medios**

---

## 1. Integración con Notion (Control de Boletos de la Rifa e Inventario)

### ¿Para qué sirve?
Permite a la Mesa Directiva gestionar en una tabla visual e interactiva de Notion los 100 números de la Rifa Pro-Fondos ($100 MXN por boleto doble). Cuando un directivo marca un número como «Apartado» o «Pagado» en Notion, ese número se bloquea en la web para que nadie más lo pueda elegir.

### Estructura de la Base de Datos en Notion
Crea una base de datos en Notion llamada **«LVT - Control de Boletos Rifa 2026»** con las siguientes columnas:

| Propiedad | Tipo en Notion | Opciones / Descripción |
|---|---|---|
| **Número** | Title | `00`, `01`, `02`, ..., `99` (100 filas creadas) |
| **Estado** | Select | `Disponible` (Gris/Verde), `Apartado` (Amarillo), `Pagado` (Azul) |
| **Comprador** | Text | Nombre completo de la persona que apartó el boleto |
| **WhatsApp** | Phone | Teléfono para enviar confirmación |
| **Monto MXN** | Number | `$100` por cada 2 números |
| **Folio Comprobante** | Files & media | Fotografía de la transferencia bancaria |
| **Fecha de Apartado** | Created time | Registro de auditoría automática |

### ¿Cómo sincronizar con la Página Web?
1. **Método Rápido (Actualización de Archivo):**
   - Edita el archivo `src/data/rifa.ts` y añade los números apartados al arreglo:
     ```typescript
     export const NUMEROS_APARTADOS_NOTION = ['07', '13', '21', '33', '77', ...];
     ```
   - Compila (`npm run build`) y publica a GitHub. Los números aparecerán automáticamente tachados y bloqueados en la cuadrícula.
2. **Método en Tiempo Real (Notion API Webhook):**
   - Obtén un *Integration Token* en `https://www.notion.so/my-integrations`.
   - Comparte la base de datos de Notion con tu integración.
   - Configura una Cloudflare Worker o función de Supabase que consulte `https://api.notion.com/v1/databases/{DATABASE_ID}/query` y devuelva el JSON de números reservados a la cuadrícula.

---

## 2. Integración con Supabase (Base de Datos en Tiempo Real y Backend)

### ¿Para qué sirve?
Supabase es una plataforma backend basada en PostgreSQL que ofrece:
- **Base de Datos Relacional:** Para almacenar el padrón de socios, obras publicadas y registros de membresía.
- **Autenticación (Auth):** Acceso privado para miembros de la Mesa Directiva.
- **Almacenamiento (Storage):** Para alojar PDFs pesados de antologías completas y audios de alta fidelidad sin consumir espacio en el repositorio de GitHub.
- **Suscripciones en Tiempo Real (Realtime):** Para que cuando un usuario seleccione un boleto de la rifa, todos los demás visitantes lo vean bloquearse en su pantalla en milisegundos.

### ¿Cómo configurarlo en el proyecto?
1. Crea un proyecto en `https://supabase.com`.
2. En `src/data/`, crea la conexión con las credenciales de entorno:
   ```typescript
   import { createClient } from '@supabase/supabase-js';
   const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
   const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;
   export const supabase = createClient(supabaseUrl, supabaseAnonKey);
   ```

---

## 3. Integración con Cloudflare (Workers, Pages y Seguridad DNS)

### ¿Para qué sirve?
- **Cloudflare Pages:** Hosting ultrarrápido con CDN perimetral en más de 300 ciudades del mundo, despliegue continuo desde GitHub y certificados SSL automáticos.
- **Cloudflare Workers:** Microservicios serverless sin servidor para procesar formularios de contacto, plicas digitales del Certamen «Un Soneto por Sor Juana» o pagos con Stripe/MercadoPago sin exponer servidores propios.
- **Seguridad y Anti-DDoS:** Protección del dominio oficial de LVT contra ataques y bloqueo de bots.

### ¿Cómo desplegar en Cloudflare Pages?
1. Conecta tu repositorio de GitHub `letrasyvocesdetabasco/letrasyvocesdetabasco` en el panel de Cloudflare Pages.
2. Configuración de compilación:
   - **Framework:** `Astro`
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
3. Despliegue instantáneo con dominio personalizado (ej. `letrasyvocesdetabasco.org`).

---

## 4. Servidores MCP (Model Context Protocol)

### ¿Para qué sirve?
Los servidores MCP son puentes estandarizados que permiten a los asistentes de inteligencia artificial y agentes autónomos conectarse de forma segura con herramientas del sistema:
- **`github-mcp-server`:** Permite crear ramas, confirmar cambios, gestionar incidencias y desplegar código directamente en GitHub.
- **`securityServer` / `osvScanner`:** Auditan el código fuente en busca de vulnerabilidades antes de cada despliegue.
- **`nanobanana`:** Genera diagramas arquitectónicos, mapas y elementos gráficos para enriquecer los reportes y la web.

---

Cordialmente,  
**Sociedad de Escritores Letras y Voces de Tabasco, A.C.**
