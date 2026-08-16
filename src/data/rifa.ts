// src/data/rifa.ts - Configuración y Esquema de Sincronización con Notion para la Rifa 2026

export interface BoletoRifa {
  numero: string; // '00' a '99'
  estado: 'disponible' | 'apartado' | 'pagado';
  comprador?: string;
  whatsapp?: string;
  fecha?: string;
}

/**
 * Números bloqueados/apartados sincronizados desde Notion
 * Actualiza este arreglo o conecta con el Webhook de Notion para reflejar el estado en tiempo real.
 */
export const NUMEROS_APARTADOS_NOTION: string[] = [
  '07', '13', '21', '33', '77'
];

/**
 * Esquema de Base de Datos de Notion Recomendado para la Mesa Directiva:
 * 
 * Nombre de Base de Datos: "LVT - Control de Boletos Rifa 2026"
 * 
 * Columnas:
 * 1. Número (Title) -> ej. '00', '01', ... '99'
 * 2. Estado (Select) -> Opciones: ['Disponible' (Verde), 'Apartado' (Amarillo), 'Pagado' (Azul)]
 * 3. Comprador (RichText) -> Nombre del participante
 * 4. WhatsApp (Phone) -> Número telefónico de contacto
 * 5. Monto MXN (Number) -> $100 por cada par
 * 6. Folio / Comprobante (Files) -> Captura del comprobante bancario
 * 7. Fecha de Registro (Created Time)
 */
export const NOTION_INTEGRATION_CONFIG = {
  databaseName: "LVT - Control de Boletos Rifa 2026",
  precioBoletoDobleMXN: 100,
  maximoBoletosPorApartado: 20,
  whatsappSecretaria: "+52 220 588 9391",
  webhookSyncUrl: "https://api.notion.com/v1/databases/"
};
