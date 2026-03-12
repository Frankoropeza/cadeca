// src/data/directorio.ts — Datos del directorio de empresas CADECA
// ⚠️  Actualización semana 1 (2026-03-12): 5 categorías con empresas reales de Google Maps sin sitio web
// ⚠️  Semana 2-4: completar categorías marcadas como [PENDIENTE]

export interface Empresa {
  nombre: string;
  giro: string;
  ciudad: string;
  desc: string;
  direccion?: string;
  tel?: string;
  maps?: string;      // URL directa a Google Maps
  rating?: number;    // Calificación en Google Maps
  reviews?: number;   // Número de reseñas
  web?: string;       // Solo si tiene sitio web (potencial cliente)
  verificado?: boolean; // Verificado manualmente en Google Maps
}

export interface Categoria {
  id: string;
  grupoId: string;
  titulo: string;
  desc: string;
  empresas: Empresa[];
}

export interface Grupo {
  id: string;
  nombre: string;
  desc: string;
  color: string;
}

// ─── Grupos ────────────────────────────────────────────────────────────────────
export const grupos: Grupo[] = [
  {
    id: "cadena-de-valor",
    nombre: "Cadena de valor",
    desc: "Fabricantes de materia prima, conversores de corrugado, distribuidores e impresores que forman la columna vertebral del sector del empaque en México.",
    color: "#1C2B4A",
  },
  {
    id: "diseno-y-tecnologia",
    nombre: "Diseño y tecnología",
    desc: "Agencias de diseño estructural y gráfico, proveedores de maquinaria industrial y fabricantes de insumos para la producción de empaques.",
    color: "#0066CC",
  },
  {
    id: "logistica-local",
    nombre: "Logística local",
    desc: "Negocios locales de paquetería, mensajería, almacenaje y materiales complementarios para el movimiento y embalaje de mercancía en CDMX y ZMCM.",
    color: "#E05800",
  },
  {
    id: "proveedores-locales",
    nombre: "Proveedores locales",
    desc: "Proveedores PYME de tarimas, materiales de relleno, cintas, flejes y etiquetas para completar la solución de empaque en el mercado local.",
    color: "#2E7D32",
  },
  {
    id: "servicios-empaque",
    nombre: "Servicios de empaque",
    desc: "Maquiladoras de empaque, centros de acopio de cartón, renta de maquinaria y servicios de corte y transformación de cartón corrugado.",
    color: "#6A1B9A",
  },
];

// ─── Categorías y empresas ─────────────────────────────────────────────────────
export const categorias: Categoria[] = [

  // ══════════════════════════════════════════════════════════════════════════════
  // GRUPO 1 · Cadena de valor
  // ══════════════════════════════════════════════════════════════════════════════

  // ── ✅ Semana 1: Fabricantes de Papel ────────────────────────────────────────
  {
    id: "fabricantes-papel",
    grupoId: "cadena-de-valor",
    titulo: "Fabricantes de Papel y Cartón",
    desc: "Productores y expendios de materia prima para la industria del empaque corrugado: papel kraft, liner, medium y cartón reciclado en CDMX y Zona Metropolitana.",
    empresas: [
      {
        nombre: "SK Corrugado Cerro Gordo",
        giro: "Fábrica de papel corrugado",
        ciudad: "Cerro Gordo, Estado de México",
        direccion: "Vías Industriales 3, Cerro Gordo, Ecatepec",
        tel: "Sin registro público",
        maps: "https://www.google.com/maps/search/SK+Corrugado+Cerro+Gordo+Vias+Industriales+Ecatepec",
        rating: 4.3,
        reviews: 385,
        desc: "Fábrica de papel y corrugado con amplia trayectoria en la zona norte del Estado de México. 385 reseñas en Google Maps avalan su operación. Sin sitio web.",
        verificado: true,
      },
      {
        nombre: "Bodega de Papel KCV",
        giro: "Distribución y venta de papel",
        ciudad: "CDMX",
        direccion: "C. Ramón Corona 8, CDMX",
        maps: "https://www.google.com/maps/search/Bodega+de+Papel+KCV+Ramon+Corona+CDMX",
        rating: 4.0,
        reviews: 54,
        desc: "Bodega especializada en venta de papel y cartón al mayoreo. Presencia consolidada en Google Maps. Operación sin sitio web propio.",
        verificado: true,
      },
      {
        nombre: "Expendio de Cartón Valle",
        giro: "Expendio de cartón corrugado",
        ciudad: "CDMX / Valle",
        direccion: "Av. Gobernadora Prof. Carlos Hank González 32B",
        maps: "https://www.google.com/maps/search/Expendio+Carton+Valle+Gobernadora+Carlos+Hank+CDMX",
        rating: 5.0,
        reviews: 1,
        desc: "Expendio local de cartón corrugado en zona oriente de CDMX. Perfil activo en Google Maps con dirección y referencias verificadas. Sin sitio web.",
        verificado: true,
      },
      {
        nombre: "Cartón Corrugado CP",
        giro: "Fábrica de papel corrugado",
        ciudad: "CDMX / Oriente",
        direccion: "Ret. de Coatlicue MZ 037, CDMX",
        tel: "55 6941 7404",
        maps: "https://www.google.com/maps/search/Carton+Corrugado+CP+Coatlicue+CDMX",
        rating: 4.0,
        reviews: 4,
        desc: "Fabricante local de papel y cartón corrugado en zona oriente de CDMX. Perfil en Google Maps con teléfono y dirección verificados. Sin sitio web.",
        verificado: true,
      },
      {
        nombre: "Papelera Cuauhtémoc",
        giro: "Fábrica de papel",
        ciudad: "Iztapalapa, CDMX",
        direccion: "Sur 8-B 48, Iztapalapa, CDMX",
        maps: "https://www.google.com/maps/search/Papelera+Cuauhtemoc+Sur+8B+Iztapalapa",
        rating: 4.8,
        reviews: 20,
        desc: "Papelera con años de operación en Iztapalapa. Perfil verificado en Google Maps con alta calificación. Empresa sin sitio web activo.",
        verificado: true,
      },
    ],
  },

  // ── ✅ Semana 1: Fabricantes de Cajas ────────────────────────────────────────
  {
    id: "fabricantes-cajas",
    grupoId: "cadena-de-valor",
    titulo: "Fabricantes de Cajas Corrugadas",
    desc: "Fábricas y talleres locales que convierten el cartón corrugado en cajas terminadas: regular, automática, a la medida. Empresas verificadas en Google Maps sin sitio web.",
    empresas: [
      {
        nombre: "Cajas de Cartón y Empaque Neza",
        giro: "Empresa de embalaje y cajas",
        ciudad: "Nezahualcóyotl, Estado de México",
        direccion: "C. Acacia 191, Nezahualcóyotl, Estado de México",
        tel: "Sin registro público",
        maps: "https://www.google.com/maps/search/Cajas+de+Carton+y+Empaque+Neza+Acacia+191",
        rating: 4.7,
        reviews: 14,
        desc: "Empresa de embalaje y fabricación de cajas en Neza. Muy bien calificada en Google Maps (4.7★). Atiende pedidos locales sin sitio web propio.",
        verificado: true,
      },
      {
        nombre: "Cajas y Empaques",
        giro: "Fabricante de cajas corrugadas",
        ciudad: "Iztapalapa, CDMX",
        direccion: "10 de Abril de 1859 No. 21, Iztapalapa, CDMX",
        maps: "https://www.google.com/maps/search/Cajas+y+Empaques+10+Abril+1859+Iztapalapa",
        rating: 4.4,
        reviews: 47,
        desc: "Taller de fabricación de cajas corrugadas con 47 reseñas positivas en Google Maps. Zona industrial Iztapalapa. Operación activa sin presencia web.",
        verificado: true,
      },
      {
        nombre: "KJ Sucursal La Viga",
        giro: "Fabricante y distribuidor de cajas",
        ciudad: "Iztacalco, CDMX",
        direccion: "Calz. de la Viga 1183, Iztacalco, CDMX",
        tel: "Sin registro público",
        maps: "https://www.google.com/maps/search/KJ+Sucursal+La+Viga+1183+Iztacalco+CDMX",
        rating: 4.1,
        reviews: 137,
        desc: "Punto de venta y fabricación de cajas corrugadas con 137 reseñas en Google Maps. Alta frecuencia de clientes locales. Sin sitio web propio.",
        verificado: true,
      },
      {
        nombre: "Cartón Kraft Ecatepec",
        giro: "Fábrica de cajas y cartón corrugado",
        ciudad: "Ecatepec, Estado de México",
        direccion: "Cuauhtémoc 42, Ecatepec, Estado de México",
        tel: "55 2508 0684",
        maps: "https://www.google.com/maps/search/Carton+Kraft+Fabrica+cajas+corrugado+Cuauhtemoc+42+Ecatepec",
        rating: 3.8,
        reviews: 6,
        desc: "Fábrica de cajas y cartón corrugado en Ecatepec. Teléfono y dirección verificados en Google Maps. Planta sin sitio web activo.",
        verificado: true,
      },
      {
        nombre: "Cajas de Cartón ARREMMA",
        giro: "Tienda de materiales de embalaje",
        ciudad: "Estado de México",
        direccion: "5 de Mayo Pte. 34, Estado de México",
        tel: "56 2389 5250",
        maps: "https://www.google.com/maps/search/Cajas+de+carton+ARREMMA+5+de+Mayo+Pte+34",
        rating: 4.5,
        reviews: 8,
        desc: "Negocio local de venta de cajas de cartón con domicilio a domicilio. Teléfono activo y perfil en Google Maps. Sin sitio web.",
        verificado: true,
      },
    ],
  },

  // ── ✅ Semana 1: Distribuidores ──────────────────────────────────────────────
  {
    id: "distribuidores",
    grupoId: "cadena-de-valor",
    titulo: "Distribuidores de Empaques",
    desc: "Distribuidores y comercializadores locales de cajas de cartón, materiales de embalaje y suministros al mayoreo en CDMX y Zona Metropolitana. Sin sitio web.",
    empresas: [
      {
        nombre: "Todo De Cartón",
        giro: "Tienda de materiales de embalaje",
        ciudad: "Estado de México",
        direccion: "Av. Morelos 100, Estado de México",
        tel: "55 5770 1023",
        maps: "https://www.google.com/maps/search/Todo+De+Carton+Av+Morelos+100",
        rating: 4.2,
        reviews: 198,
        desc: "Distribuidor local con amplia variedad de empaques y materiales. 198 reseñas en Google Maps. Entrega en zona norte del Edomex. Sin sitio web.",
        verificado: true,
      },
      {
        nombre: "Cajas de Cartón (Vía Morelos)",
        giro: "Distribuidor de cajas de cartón",
        ciudad: "Ecatepec, Estado de México",
        direccion: "Av. Vía Morelos 583, Ecatepec, Estado de México",
        tel: "55 4193 9241",
        maps: "https://www.google.com/maps/search/Cajas+de+Carton+Via+Morelos+583+Ecatepec",
        rating: 4.7,
        reviews: 46,
        desc: "Distribuidor de cajas en zona norte con alta calificación (4.7★). Teléfono activo y horario verificado en Google Maps. Sin sitio web.",
        verificado: true,
      },
      {
        nombre: "FYCAMEX",
        giro: "Tienda de insumos para embalaje",
        ciudad: "Iztapalapa, CDMX",
        direccion: "1160 bis Av. Ermita Iztapalapa, CDMX",
        tel: "55 5686 4998",
        maps: "https://www.google.com/maps/search/FYCAMEX+Ermita+Iztapalapa+1160",
        rating: 4.2,
        reviews: 46,
        desc: "Tienda de insumos para embalaje en Ermita Iztapalapa. Entrega a domicilio, teléfono activo. Perfil completo en Google Maps sin sitio web.",
        verificado: true,
      },
      {
        nombre: "Comercializadora Saleman",
        giro: "Tienda de materiales de embalaje",
        ciudad: "CDMX",
        direccion: "Valle de Arriba 160, CDMX",
        tel: "55 1337 8496",
        maps: "https://www.google.com/maps/search/Comercializadora+Saleman+Valle+de+Arriba+160+CDMX",
        rating: 5.0,
        reviews: 2,
        desc: "Comercializadora de materiales de embalaje con calificación perfecta en Google Maps. Teléfono directo verificado. Sin sitio web propio.",
        verificado: true,
      },
    ],
  },

  // ── ✅ Semana 1: Impresión y Troquelado ──────────────────────────────────────
  {
    id: "impresion-troquelado",
    grupoId: "cadena-de-valor",
    titulo: "Impresión y Troquelado",
    desc: "Talleres y empresas especializadas en impresión sobre cartón, corte, maquila y troquelado de empaques en CDMX y Zona Metropolitana.",
    empresas: [
      {
        nombre: "Maquila de Corte García",
        giro: "Compra venta de cartón y maquila de corte",
        ciudad: "Vallejo, Azcapotzalco, CDMX",
        direccion: "Av. Ing. Alfredo Robles Domínguez 128-Local B, Vallejo, Azcapotzalco, CDMX 07870",
        maps: "https://www.google.com/maps/search/Compra+Venta+Carton+Papel+Maquila+Corte+Garcia+Robles+Dominguez+Vallejo",
        rating: 3.0,
        reviews: 4,
        desc: "Taller de maquila de corte de cartón en zona industrial Vallejo. Compra, venta y transformación de cartón. Dirección completa en Google Maps. Sin sitio web.",
        verificado: true,
      },
      {
        nombre: "Corrugados Leysa",
        giro: "Fabricante de corrugado e impresión",
        ciudad: "CDMX / Norte",
        maps: "https://www.google.com/maps/search/Corrugados+Leysa+CDMX",
        rating: 3.6,
        reviews: 7,
        desc: "Empresa de corrugados con capacidad de impresión flexográfica. Perfil verificado en Google Maps. Operación sin sitio web propio.",
        verificado: true,
      },
      {
        nombre: "Troquelados y Cortes MX",
        giro: "Taller de troquelado de cartón",
        ciudad: "CDMX",
        maps: "https://www.google.com/maps/search/troquelados+cortes+carton+CDMX+industrial",
        desc: "Taller de troquelado y corte de cartón corrugado para cajas display y empaques especiales. Zona industrial CDMX. Pendiente de verificación directa en Maps.",
        verificado: false,
      },
    ],
  },

  // ── [PENDIENTE Semana 2]: Diseño Packaging ───────────────────────────────────
  {
    id: "diseno-packaging",
    grupoId: "diseno-y-tecnologia",
    titulo: "Diseño Estructural y Gráfico de Packaging",
    desc: "Estudios y agencias locales especializados en diseño de packaging: estructura, branding e identidad visual para marcas mexicanas. [Investigación en Maps: Semana 2]",
    empresas: [
      {
        nombre: "PackDesign Local",
        giro: "Diseño estructural de empaque",
        ciudad: "CDMX",
        maps: "https://www.google.com/maps/search/diseño+estructural+packaging+CDMX",
        desc: "[PENDIENTE] Agencia local de diseño estructural de empaques. Investigación en Google Maps programada para Semana 2.",
        verificado: false,
      },
    ],
  },

  // ── [PENDIENTE Semana 2]: Maquinaria ─────────────────────────────────────────
  {
    id: "maquinaria",
    grupoId: "diseno-y-tecnologia",
    titulo: "Maquinaria y Equipo para Empaque",
    desc: "Proveedores locales de maquinaria para embalaje: formadoras, selladoras, flejadoras y sistemas de paletizado. [Investigación en Maps: Semana 2]",
    empresas: [
      {
        nombre: "Equipo Industrial Empaque",
        giro: "Proveedor de maquinaria de embalaje",
        ciudad: "CDMX / Industrial",
        maps: "https://www.google.com/maps/search/maquinaria+embalaje+selladora+CDMX+industrial",
        desc: "[PENDIENTE] Proveedor local de maquinaria de embalaje. Investigación en Google Maps programada para Semana 2.",
        verificado: false,
      },
    ],
  },

  // ── [PENDIENTE Semana 2]: Tintas y Barnices ──────────────────────────────────
  {
    id: "tintas-barnices",
    grupoId: "diseno-y-tecnologia",
    titulo: "Tintas, Barnices y Adhesivos",
    desc: "Proveedores locales de tintas base agua, barnices y adhesivos industriales para impresión de empaques. [Investigación en Maps: Semana 2]",
    empresas: [
      {
        nombre: "Tintas y Barnices Local",
        giro: "Proveedor de tintas industriales",
        ciudad: "CDMX",
        maps: "https://www.google.com/maps/search/tintas+barnices+adhesivos+industriales+CDMX",
        desc: "[PENDIENTE] Proveedor local de tintas y barnices para empaques. Investigación en Google Maps programada para Semana 2.",
        verificado: false,
      },
    ],
  },

  // ── ✅ Semana 1: Materiales Complementarios ──────────────────────────────────
  {
    id: "materiales-complementarios",
    grupoId: "logistica-local",
    titulo: "Materiales y Suministros de Embalaje",
    desc: "Negocios locales de cintas adhesivas, rellenos, flejes, esquineros y materiales complementarios para embalaje. Empresas verificadas en Google Maps sin sitio web.",
    empresas: [
      {
        nombre: "Grupo Aredca",
        giro: "Empresa de envases y embalaje",
        ciudad: "CDMX",
        direccion: "Arenal 100, CDMX",
        tel: "56 1057 1116",
        maps: "https://www.google.com/maps/search/Grupo+Aredca+Arenal+100+CDMX+envases",
        rating: 3.8,
        reviews: 24,
        desc: "Empresa local de envases y embalaje con perfil completo en Google Maps. Teléfono verificado. Sin sitio web activo.",
        verificado: true,
      },
      {
        nombre: "Empaques Durán",
        giro: "Distribución de materiales de embalaje",
        ciudad: "CDMX / Oriente",
        maps: "https://www.google.com/maps/search/Empaques+Duran+CDMX+embalaje",
        rating: 4.1,
        reviews: 50,
        desc: "Distribuidor de materiales de embalaje con 50 reseñas en Google Maps. Operación local activa. Sin sitio web propio.",
        verificado: true,
      },
      {
        nombre: "Expendio de Materiales JR",
        giro: "Materiales de empaque y relleno",
        ciudad: "CDMX",
        maps: "https://www.google.com/maps/search/materiales+relleno+empaque+cinta+adhesiva+Iztapalapa+CDMX",
        desc: "Expendio de materiales de empaque: rellenos, cintas, bolsas. Presencia en Google Maps con clientes activos. Sin sitio web.",
        verificado: false,
      },
    ],
  },

  // ── [PENDIENTE Semana 3]: Mensajería Local ───────────────────────────────────
  {
    id: "mensajeria-local",
    grupoId: "logistica-local",
    titulo: "Mensajería y Paquetería Local",
    desc: "Empresas locales de mensajería, paquetería y entrega última milla en CDMX y ZMCM sin sitio web. [Investigación en Maps: Semana 3]",
    empresas: [
      {
        nombre: "Mensajería Express Local",
        giro: "Servicio de mensajería local",
        ciudad: "CDMX",
        maps: "https://www.google.com/maps/search/mensajeria+paqueteria+local+CDMX+sin+web",
        desc: "[PENDIENTE] Empresa local de mensajería. Investigación en Google Maps programada para Semana 3.",
        verificado: false,
      },
    ],
  },

  // ── [PENDIENTE Semana 3]: Almacenes Locales ──────────────────────────────────
  {
    id: "almacenes-locales",
    grupoId: "logistica-local",
    titulo: "Almacenes y Bodegas Locales",
    desc: "Pequeñas bodegas y almacenes de renta en CDMX y ZMCM. Negocios con perfil en Google Maps sin sitio web. [Investigación en Maps: Semana 3]",
    empresas: [
      {
        nombre: "Bodega Renta Local",
        giro: "Renta de bodegas y almacenes",
        ciudad: "CDMX / ZMCM",
        maps: "https://www.google.com/maps/search/renta+bodega+almacen+CDMX+industrial",
        desc: "[PENDIENTE] Bodega de renta local. Investigación en Google Maps programada para Semana 3.",
        verificado: false,
      },
    ],
  },

  // ── [PENDIENTE Semana 3]: Proveedores de Tarimas ────────────────────────────
  {
    id: "pallets-tarimas",
    grupoId: "proveedores-locales",
    titulo: "Proveedores de Tarimas y Pallets",
    desc: "Negocios locales de fabricación, venta y renta de tarimas de madera, plástico y cartón. Perfiles en Google Maps sin sitio web. [Investigación Semana 3]",
    empresas: [
      {
        nombre: "Tarimas y Pallets MX",
        giro: "Fabricación y venta de tarimas",
        ciudad: "CDMX / Industrial",
        maps: "https://www.google.com/maps/search/tarimas+pallets+madera+CDMX+venta",
        desc: "[PENDIENTE] Fabricante/vendedor local de tarimas. Investigación en Google Maps programada para Semana 3.",
        verificado: false,
      },
    ],
  },

  // ── [PENDIENTE Semana 3]: Cintas y Flejes ────────────────────────────────────
  {
    id: "cintas-y-flejes",
    grupoId: "proveedores-locales",
    titulo: "Cintas Adhesivas y Flejes Industriales",
    desc: "Distribuidores locales de cintas adhesivas, flejes plásticos y metálicos, herramientas de flejado. Perfiles en Google Maps sin sitio web. [Investigación Semana 3]",
    empresas: [
      {
        nombre: "Cintas y Flejes CDMX",
        giro: "Distribución de cintas industriales",
        ciudad: "CDMX",
        maps: "https://www.google.com/maps/search/cintas+adhesivas+flejes+industriales+CDMX",
        desc: "[PENDIENTE] Distribuidor local de cintas y flejes. Investigación en Google Maps programada para Semana 3.",
        verificado: false,
      },
    ],
  },

  // ── [PENDIENTE Semana 3]: Materiales de Relleno ──────────────────────────────
  {
    id: "materiales-relleno",
    grupoId: "proveedores-locales",
    titulo: "Materiales de Relleno y Protección",
    desc: "Proveedores locales de espuma, papel kraft, burbujas y materiales de amortiguación para protección de productos. [Investigación Semana 3]",
    empresas: [
      {
        nombre: "Rellenos y Protección MX",
        giro: "Materiales de amortiguación y relleno",
        ciudad: "CDMX",
        maps: "https://www.google.com/maps/search/relleno+espuma+burbujas+papel+kraft+embalaje+CDMX",
        desc: "[PENDIENTE] Proveedor local de materiales de relleno. Investigación en Google Maps programada para Semana 3.",
        verificado: false,
      },
    ],
  },

  // ── [PENDIENTE Semana 4]: Maquiladoras de Empaque ───────────────────────────
  {
    id: "maquiladoras-empaque",
    grupoId: "servicios-empaque",
    titulo: "Maquiladoras de Empaque",
    desc: "Empresas locales de maquila de empaque, kitting, ensamble y etiquetado para marcas que tercerizan su operación. [Investigación en Maps: Semana 4]",
    empresas: [
      {
        nombre: "Maquila Empaque Local",
        giro: "Maquila de empaque y kitting",
        ciudad: "CDMX / ZMCM",
        maps: "https://www.google.com/maps/search/maquila+empaque+kitting+ensamble+CDMX",
        desc: "[PENDIENTE] Maquiladora local de empaque. Investigación en Google Maps programada para Semana 4.",
        verificado: false,
      },
    ],
  },

  // ── [PENDIENTE Semana 4]: Centros de Acopio ─────────────────────────────────
  {
    id: "centros-acopio",
    grupoId: "servicios-empaque",
    titulo: "Centros de Acopio y Reciclaje de Cartón",
    desc: "Centros locales de compra, venta y acopio de cartón reciclado y papel usado. Proveedores de materia prima reciclada. [Investigación en Maps: Semana 4]",
    empresas: [
      {
        nombre: "Centro de Acopio Cartón",
        giro: "Compra y venta de cartón reciclado",
        ciudad: "CDMX",
        maps: "https://www.google.com/maps/search/centro+acopio+carton+reciclado+CDMX",
        desc: "[PENDIENTE] Centro local de acopio de cartón. Investigación en Google Maps programada para Semana 4.",
        verificado: false,
      },
    ],
  },

  // ── [PENDIENTE Semana 4]: Renta de Equipo ────────────────────────────────────
  {
    id: "renta-equipo-embalaje",
    grupoId: "servicios-empaque",
    titulo: "Renta de Equipo de Embalaje",
    desc: "Negocios locales de renta de envolvedoras, selladoras, flejadoras y equipo para embalaje industrial. [Investigación en Maps: Semana 4]",
    empresas: [
      {
        nombre: "Renta Equipo Embalaje MX",
        giro: "Renta de maquinaria de embalaje",
        ciudad: "CDMX",
        maps: "https://www.google.com/maps/search/renta+selladora+envolvedora+maquinaria+embalaje+CDMX",
        desc: "[PENDIENTE] Empresa local de renta de equipo. Investigación en Google Maps programada para Semana 4.",
        verificado: false,
      },
    ],
  },
];

// ─── Helpers ───────────────────────────────────────────────────────────────────
export function getGrupo(id: string): Grupo | undefined {
  return grupos.find(g => g.id === id);
}

export function getCategoriasByGrupo(grupoId: string): Categoria[] {
  return categorias.filter(c => c.grupoId === grupoId);
}

export function getCategoria(grupoId: string, catId: string): Categoria | undefined {
  return categorias.find(c => c.grupoId === grupoId && c.id === catId);
}

export const totalEmpresas = categorias
  .filter(c => c.empresas.some(e => e.verificado))
  .reduce((acc, c) => acc + c.empresas.filter(e => e.verificado).length, 0);
