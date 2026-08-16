// rifaConfig.ts - Configuración de Boletos y Esquema de Sincronización con Notion / Base de Datos

export interface BoletoRifa {
  numero: string; // '00' a '99'
  estado: 'disponible' | 'apartado' | 'pagado' | 'premiado';
  comprador?: string;
  telefono?: string;
  fechaApartado?: string;
  folioNotion?: string;
}

/**
 * Números actualmente apartados o pagados (Gestionados desde Notion / Mesa Directiva).
 * Cualquier número añadido a este arreglo quedará bloqueado automáticamente en la cuadrícula web.
 */
export const BOLETOS_BLOQUEADOS: string[] = [
  // Ejemplos de boletos reservados por la directiva:
  // '07', '13', '26', '77'
];

/**
 * Estructura del Esquema de Base de Datos para Notion:
 * Nombre de la Base de Datos en Notion: "Control de Boletos - Rifa Pro-Fondos LVT 2026"
 * 
 * Propiedades de Notion:
 * 1. Número (Title): Formato texto '00', '01', ... '99'
 * 2. Estado (Select): ['Disponible', 'Apartado', 'Pagado', 'Premiado']
 * 3. Comprador (Text): Nombre completo del aportante
 * 4. Teléfono (Phone Number): WhatsApp para confirmación
 * 5. Pareja / Boleto Doble (Relation): Vinculación con el segundo número del par
 * 6. Monto Aportado (Number): $100 MXN por cada par
 * 7. Comprobante Pago (Files & Media): Captura de transferencia bancaria
 * 8. Fecha Registro (Date): Marca de tiempo
 */
export const NOTION_DATABASE_SCHEMA = {
  database_name: "Control de Boletos - Rifa Pro-Fondos LVT 2026",
  total_boletos: 100,
  precio_par: 100, // MXN
  moneda: "MXN",
  propiedades: [
    { nombre: "Numero", tipo: "title" },
    { nombre: "Estado", tipo: "select", opciones: ["Disponible", "Apartado", "Pagado", "Premiado"] },
    { nombre: "Comprador", tipo: "rich_text" },
    { nombre: "Telefono", tipo: "phone_number" },
    { nombre: "Monto", tipo: "number" },
    { nombre: "Comprobante", tipo: "files" },
    { nombre: "Fecha", tipo: "created_time" }
  ]
};
