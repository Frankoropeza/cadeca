// src/data/directorio.ts — Datos del directorio de empresas CADECA

export interface Empresa {
  nombre: string;
  giro: string;
  ciudad: string;
  desc: string;
  web?: string;
}

export interface Categoria {
  id: string;       // slug URL
  grupoId: string;  // slug del grupo padre
  titulo: string;
  desc: string;
  empresas: Empresa[];
}

export interface Grupo {
  id: string;       // slug URL
  nombre: string;
  desc: string;
  color: string;    // color acento para la card
}

// ─── Grupos (Nivel 1) ──────────────────────────────────────────────────────────
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
    id: "logistica",
    nombre: "Logística",
    desc: "Paqueterías, operadores 3PL, almacenes de fulfillment y proveedores de materiales complementarios para el movimiento y almacenaje de mercancía.",
    color: "#E05800",
  },
  {
    id: "sectores-clientes",
    nombre: "Sectores clientes",
    desc: "Industrias y canales de venta que son los mayores consumidores de cajas de cartón corrugado: e-commerce, alimentos, farmacéutica, retail e industria.",
    color: "#2E7D32",
  },
  {
    id: "certificaciones",
    nombre: "Certificaciones y organismos",
    desc: "Cámaras industriales, asociaciones del sector y organismos certificadores de calidad, sustentabilidad y cumplimiento normativo para empaques.",
    color: "#6A1B9A",
  },
];

// ─── Categorías y empresas (Nivel 2 y 3) ──────────────────────────────────────
export const categorias: Categoria[] = [
  // ── Cadena de valor ─────────────────────────────────────────────────────────
  {
    id: "fabricantes-papel",
    grupoId: "cadena-de-valor",
    titulo: "Fabricantes de Papel y Cartón",
    desc: "Productores de materia prima para la industria del empaque corrugado: papel kraft, liner, medium y cartón reciclado.",
    empresas: [
      { nombre: "Smurfit Kappa México",  giro: "Fabricación de cartón corrugado y embalaje",     ciudad: "CDMX / Nacional",      desc: "Líder global con planta en Tlalnepantla. Produce liner y fluting para la industria del corrugado." },
      { nombre: "Grupo Gondi",           giro: "Papel kraft y cartón corrugado integrado",        ciudad: "CDMX / Nacional",      desc: "Grupo mexicano integrado verticalmente desde la fibra reciclada hasta la caja terminada." },
      { nombre: "Bio Pappel",            giro: "Papel reciclado y cartón sustentable",            ciudad: "Nacional",             desc: "Empresa líder en reciclaje de fibra secundaria y producción de papel para empaque ecológico." },
      { nombre: "Scribe",                giro: "Papel y cartón para impresión y empaque",         ciudad: "Estado de México",     desc: "Fabricante nacional de papel con líneas industriales de cartón para aplicaciones de embalaje." },
      { nombre: "Cartones Ponderosa",    giro: "Cartón folding y liner para caja plegadiza",      ciudad: "Guadalajara / Nac.",   desc: "Productora de cartón tipo folding y duplex para industria farmacéutica, alimentos y retail." },
      { nombre: "IPAC",                  giro: "Papel kraft y liner para corrugado",              ciudad: "Estado de México",     desc: "Planta papelera orientada a la producción de liner reciclado de alta resistencia para embalaje." },
    ],
  },
  {
    id: "fabricantes-cajas",
    grupoId: "cadena-de-valor",
    titulo: "Fabricantes de Cajas Corrugadas",
    desc: "Empresas que convierten el cartón corrugado en cajas terminadas: regular, automática, personalizada y a la medida.",
    empresas: [
      { nombre: "CADECA",                giro: "Fabricante de cajas de cartón corrugado CDMX",   ciudad: "CDMX",                 desc: "Fabricante directo con entrega en 24 hrs, cajas estándar y a la medida desde pedidos pequeños." },
      { nombre: "Cajas y Empaques MX",   giro: "Cajas corrugadas estándar y a la medida",        ciudad: "Tlalnepantla, Edomex", desc: "Planta con capacidad para corrugado simple, doble y triple pared en formatos estándar e industriales." },
      { nombre: "Empaques Industriales", giro: "Embalaje pesado y contenedores corrugados",      ciudad: "Ecatepec, Edomex",     desc: "Especialistas en embalaje de exportación, pallets con tapa y cajas de doble y triple pared." },
      { nombre: "Corrugados del Valle",  giro: "Cajas corrugadas personalizadas Edomex",         ciudad: "Cuautitlán, Edomex",   desc: "Planta en zona norte ZMCM, produce cajas impresas flexográficamente en 2 y 3 colores." },
      { nombre: "Carto-Pack",            giro: "Cajas para e-commerce y autoservicio",           ciudad: "CDMX",                 desc: "Fabricante enfocado en medidas e-commerce, cajas mailer y empaques para Mercado Libre y Amazon." },
      { nombre: "Empaques Súper",        giro: "Cajas de cartón al mayoreo CDMX",               ciudad: "Iztapalapa, CDMX",     desc: "Fábrica con línea de cajas estándar en stock permanente y entregas en 24 hrs en zona metropolitana." },
    ],
  },
  {
    id: "distribuidores",
    grupoId: "cadena-de-valor",
    titulo: "Distribuidores de Empaques",
    desc: "Distribuidores y comercializadores de cajas de cartón, materiales de embalaje y suministros de empaque al mayoreo.",
    empresas: [
      { nombre: "Grupo Empacadora MX",   giro: "Distribución de materiales de empaque",          ciudad: "CDMX / ZMCM",          desc: "Distribuidor mayorista de cajas corrugadas, bolsas de papel, cintas y materiales de embalaje." },
      { nombre: "Empapack",              giro: "Venta de cajas y suministros de empaque",        ciudad: "Naucalpan, Edomex",    desc: "Amplio catálogo de empaques estándar y consumibles para pequeñas y medianas empresas." },
      { nombre: "Almacenes Cartón MX",   giro: "Distribución mayorista de cartón y cajas",       ciudad: "CDMX",                 desc: "Stock permanente de cajas en más de 40 medidas estándar con despacho inmediato en CDMX." },
      { nombre: "PackSupply México",     giro: "Suministros para empaque empresarial",           ciudad: "CDMX / Monterrey",     desc: "Proveedor B2B con catálogo online de más de 500 referencias de materiales de empaque." },
      { nombre: "Soluciones de Empaque", giro: "Distribución integral de embalaje",              ciudad: "Toluca / CDMX",        desc: "Representantes de marcas internacionales de empaques con servicio de asesoría técnica." },
    ],
  },
  {
    id: "impresion-troquelado",
    grupoId: "cadena-de-valor",
    titulo: "Impresión y Troquelado",
    desc: "Empresas especializadas en impresión flexográfica, offset y litografía sobre cartón, así como corte y troquelado de alta precisión.",
    empresas: [
      { nombre: "Flexo Impresores MX",   giro: "Impresión flexográfica en cartón corrugado",     ciudad: "Vallejo, CDMX",        desc: "Impresión de 1 a 4 colores sobre cajas corrugadas. Tiradas desde 500 piezas con tiempo express." },
      { nombre: "Cartonprint",           giro: "Offset e impresión de alta resolución",           ciudad: "CDMX",                 desc: "Impresión offset litografiado para cajas premium, cosméticos y productos de retail de alta gama." },
      { nombre: "Troquelados Industriales", giro: "Troquelado y corte de cartón y microcanal",   ciudad: "Naucalpan, Edomex",    desc: "Corte de precisión CNC, troquelados para cajas display, cajas de regalo y empaques especiales." },
      { nombre: "Graficart",             giro: "Diseño e impresión de packaging personalizado",  ciudad: "CDMX",                 desc: "Solución completa: arte, preprensa, impresión y acabados especiales sobre corrugado y microcanal." },
      { nombre: "ImprentaPack MX",       giro: "Impresión digital y convencional sobre cartón",  ciudad: "CDMX / Toluca",        desc: "Impresión digital para tiradas cortas y prototipos, con transición a flexo para producción." },
    ],
  },

  // ── Diseño y tecnología ──────────────────────────────────────────────────────
  {
    id: "diseno-packaging",
    grupoId: "diseno-y-tecnologia",
    titulo: "Diseño Estructural y Gráfico de Packaging",
    desc: "Estudios y agencias especializados en diseño de packaging: estructura CAD, branding e identidad visual para marcas mexicanas.",
    empresas: [
      { nombre: "PackDesign MX",         giro: "Diseño estructural y CAD para empaque",          ciudad: "CDMX",                 desc: "Especialistas en diagramas CAD, modelos Artios y prototipos físicos de cajas personalizadas." },
      { nombre: "Empack Studio",         giro: "Branding y diseño gráfico para packaging",       ciudad: "CDMX",                 desc: "Agencia creativa enfocada en identidad visual y diseño de arte para impresión en empaques." },
      { nombre: "Forma y Empaque",       giro: "Consultoría de ingeniería de empaque",           ciudad: "CDMX / Monterrey",     desc: "Consultoría técnica en optimización de dimensiones, materiales y costos logísticos de empaque." },
      { nombre: "PrintBox Studio",       giro: "Diseño digital para impresión flexográfica",     ciudad: "CDMX",                 desc: "Preparación de artes para corrugado, offsetado y litografía con control de separación de colores." },
      { nombre: "Dieline Agency",        giro: "Diseño de línea de corte y estructura de caja",  ciudad: "CDMX",                 desc: "Especialistas en dieline, mockups 3D y validación estructural para empaques físicos." },
      { nombre: "Packaging Lab MX",      giro: "Prototipado y maquetas de empaque",              ciudad: "CDMX / Guadalajara",   desc: "Fabricación de prototipos rápidos en cartón y microcanal para prueba de concepto antes de producción." },
    ],
  },
  {
    id: "maquinaria",
    grupoId: "diseno-y-tecnologia",
    titulo: "Maquinaria y Equipo para Empaque",
    desc: "Proveedores de maquinaria para embalaje industrial: formadoras de caja, selladoras, flejadoras, paletizadoras y sistemas automáticos.",
    empresas: [
      { nombre: "Multipack México",      giro: "Maquinaria para embalaje y sellado",             ciudad: "CDMX",                 desc: "Distribuidora de formadoras de caja, sellado de fondo automático y transportadoras de línea." },
      { nombre: "Innopack",              giro: "Automatización de líneas de empaque",             ciudad: "Estado de México",     desc: "Integración de sistemas automáticos de llenado, sellado y paletizado para manufactura." },
      { nombre: "Tecpack Industrial",    giro: "Equipos de strapping y paletizado",              ciudad: "CDMX",                 desc: "Soluciones de fleje plástico y metálico, tensionadoras y unidades de paletizado semiautomático." },
      { nombre: "SealPack MX",           giro: "Selladoras y empacadoras al vacío",              ciudad: "Tlalnepantla, Edomex", desc: "Equipos de sellado por calor, termo-encogible y empaque al vacío para industria de alimentos." },
      { nombre: "Robopac México",        giro: "Envolvedoras de tarimas y films stretch",        ciudad: "CDMX",                 desc: "Representante de Robopac en México: envolvedoras rotativas, films y paletizado automático." },
    ],
  },
  {
    id: "tintas-barnices",
    grupoId: "diseno-y-tecnologia",
    titulo: "Tintas, Barnices y Adhesivos",
    desc: "Proveedores de insumos para impresión y fabricación de empaques: tintas base agua, barnices UV, almidones y adhesivos industriales.",
    empresas: [
      { nombre: "Tintas y Barnices MX",  giro: "Tintas base agua y barnices UV para corrugado", ciudad: "CDMX",                 desc: "Formulación de tintas flexográficas aptas para alimentos, certificadas FDA/COFEPRIS." },
      { nombre: "Sun Chemical México",   giro: "Tintas y pigmentos para impresión industrial",   ciudad: "CDMX / Nacional",      desc: "Subsidiaria de Sun Chemical, proveedor global de tintas y pigmentos para empaques de consumo." },
      { nombre: "Henkel México",         giro: "Adhesivos industriales para fabricación de cajas", ciudad: "Nacional",           desc: "Adhesivos hot melt, almidones y sistemas de pegado para líneas de producción de corrugado." },
      { nombre: "Barnices Especiales MX",giro: "Barnices UV y acabados para packaging premium",  ciudad: "CDMX",                 desc: "Barnices brillantes, mate, relieve y soft-touch para empaques de lujo y presentación retail." },
    ],
  },

  // ── Logística ────────────────────────────────────────────────────────────────
  {
    id: "paqueterias",
    grupoId: "logistica",
    titulo: "Paqueterías y Mensajería",
    desc: "Empresas de transporte, paquetería y mensajería que mueven tus productos empacados a nivel nacional e internacional.",
    empresas: [
      { nombre: "Estafeta",              giro: "Paquetería nacional y último kilómetro",         ciudad: "Nacional",             desc: "Red de paquetería con cobertura nacional. Convenios con medidas estándar para e-commerce." },
      { nombre: "DHL México",            giro: "Mensajería express y logística internacional",   ciudad: "Nacional / Intl.",     desc: "Envíos nacionales e internacionales con rastreo en tiempo real y servicios de aduana." },
      { nombre: "FedEx México",          giro: "Envíos express y fulfillment",                   ciudad: "Nacional",             desc: "Servicios prioritarios con integración nativa para Shopify, WooCommerce y Amazon." },
      { nombre: "Mercado Envíos",        giro: "Logística integrada para vendedores ML",         ciudad: "Nacional",             desc: "Solución logística oficial de Mercado Libre con guías automáticas y medidas estandarizadas." },
      { nombre: "99minutos",             giro: "Entrega de última milla mismo día",              ciudad: "CDMX y ciudades ppal.", desc: "Especialistas en entregas express para e-commerce en zona metropolitana, con seguimiento en app." },
      { nombre: "Paquetexpress",         giro: "Paquetería económica zona norte y bajío",        ciudad: "Nacional",             desc: "Red de paquetería con cobertura especial en norte y bajío de México, tarifas competitivas." },
      { nombre: "J&T Express México",    giro: "Paquetería para e-commerce y grandes volúmenes", ciudad: "Nacional",             desc: "Paquetería orientada a grandes volúmenes de e-commerce con tarifas escalonadas y recolección." },
    ],
  },
  {
    id: "almacenes-fulfillment",
    grupoId: "logistica",
    titulo: "Almacenes y Fulfillment",
    desc: "Empresas de almacenaje, maquila de empaque, fulfillment para e-commerce y operación logística tercerizada (3PL).",
    empresas: [
      { nombre: "Fulfillment MX",        giro: "Fulfillment y almacenaje para e-commerce",      ciudad: "CDMX / Edomex",        desc: "Centro de fulfillment con gestión WMS, pick & pack y entrega en 24 hrs para tiendas online." },
      { nombre: "Grupo Logistics 3PL",   giro: "Operador logístico 3PL CDMX",                   ciudad: "Tlalnepantla, Edomex", desc: "Almacenaje fiscal y no fiscal, maquila de empaque, cross-docking y distribución urbana." },
      { nombre: "Mexpack Fulfillment",   giro: "Maquila de empaque y fulfillment",               ciudad: "Cuautitlán, Edomex",   desc: "Servicio de ensamble, kitting, empaque y etiquetado para marcas que tercerizan su operación." },
      { nombre: "Amazon Logística MX",   giro: "FBA — Fulfillment by Amazon México",            ciudad: "Nacional",             desc: "Red de centros de distribución Amazon en CDMX y Guadalajara para vendedores marketplace." },
      { nombre: "iVoy",                  giro: "Logística y fulfillment para PYME e-commerce",  ciudad: "CDMX",                 desc: "Plataforma SaaS con almacenaje, picking y envíos multicarrier para tiendas Shopify y VTEX." },
    ],
  },
  {
    id: "materiales-complementarios",
    grupoId: "logistica",
    titulo: "Materiales y Suministros Complementarios",
    desc: "Insumos para completar tu solución de empaque: rellenos, cintas adhesivas, esquineros, pallets, films y etiquetas.",
    empresas: [
      { nombre: "Sellos y Empaques Mex.",giro: "Cintas adhesivas y materiales de sellado",      ciudad: "CDMX",                 desc: "Distribuidora de cintas bopp, kraft, de doble cara y sistemas de cierre para embalaje industrial." },
      { nombre: "Espopackaging",         giro: "Rellenos: espuma, burbujas, papel kraft",        ciudad: "CDMX / Edomex",        desc: "Materiales de amortiguación para proteger productos frágiles en tránsito y almacenaje." },
      { nombre: "Cormex Esquineros",     giro: "Cantoneras y esquineros de cartón y plástico",   ciudad: "CDMX",                 desc: "Fabricante de cantoneras angulares para protección de tarimas y embalaje de exportación." },
      { nombre: "Pallets MX",            giro: "Tarimas de madera, plástico y cartón",           ciudad: "CDMX / Nacional",      desc: "Fabricante y rentador de tarimas ISPM-15 para exportación y tarimas de plástico reciclado." },
      { nombre: "Stretch Film MX",       giro: "Films stretch y termoencogible para paletizado", ciudad: "CDMX",                 desc: "Distribuidor de film estirable manual y máquina con distintos calibres para carga pesada y ligera." },
      { nombre: "Etiquetas Pro MX",      giro: "Etiquetas térmicas, RFID y logísticas",          ciudad: "CDMX",                 desc: "Impresión de etiquetas para código de barras, RFID y labels logísticos compatibles con todos los carriers." },
    ],
  },

  // ── Sectores clientes ────────────────────────────────────────────────────────
  {
    id: "ecommerce",
    grupoId: "sectores-clientes",
    titulo: "E-commerce y Marketplaces",
    desc: "Plataformas y canales de venta en línea que son los mayores consumidores de cajas estándar, mailer y empaques personalizados.",
    empresas: [
      { nombre: "Mercado Libre México",  giro: "Marketplace líder en América Latina",           ciudad: "Nacional",             desc: "Principal canal de venta online en México. Define medidas estándar para cajas de envío ML." },
      { nombre: "Amazon México",         giro: "Marketplace y plataforma de fulfillment",        ciudad: "Nacional",             desc: "Plataforma con medidas FBA estrictas para caja externa. Requiere cajas con certificado BCT." },
      { nombre: "Shopify",               giro: "Plataforma de tienda en línea para marcas",      ciudad: "Internacional",        desc: "Plataforma SaaS de e-commerce usada por miles de marcas mexicanas que necesitan empaque personalizado." },
      { nombre: "VTEX",                  giro: "Plataforma de comercio digital enterprise",      ciudad: "CDMX / Regional",      desc: "Solución enterprise de e-commerce con integración logística para retailers medianos y grandes." },
      { nombre: "Tiendanube México",     giro: "Tiendas online para PYME",                       ciudad: "Nacional",             desc: "Plataforma de tienda en línea para pequeños negocios mexicanos que envían con cajas estándar." },
    ],
  },
  {
    id: "alimentos",
    grupoId: "sectores-clientes",
    titulo: "Industria Alimentaria",
    desc: "Empresas del sector alimentos y bebidas que utilizan corrugado para protección, transporte y exhibición de productos.",
    empresas: [
      { nombre: "Grupo Bimbo",           giro: "Producción y distribución de pan y alimentos",   ciudad: "Nacional",             desc: "Comprador de grandes volúmenes de corrugado para distribución de panadería y snacks." },
      { nombre: "Lala",                  giro: "Lácteos y bebidas — empaque y transporte",        ciudad: "Nacional",             desc: "Cadena láctea que consume cajas de alta resistencia para distribución refrigerada." },
      { nombre: "Maseca / Gruma",        giro: "Harinas, tortilla y alimentos básicos",          ciudad: "Nacional",             desc: "Productora de harinas que usa corrugado pesado para embarque de bultos y distribución." },
      { nombre: "Bachoco",               giro: "Industria avícola y producción de proteína",     ciudad: "Nacional",             desc: "Una de las principales consumidoras de corrugado para empaque de pollo y productos avícolas." },
      { nombre: "Sigma Alimentos",       giro: "Embutidos, lácteos y alimentos procesados",      ciudad: "Nacional",             desc: "Grupo de alimentos con alta demanda de corrugado de doble pared para temperatura controlada." },
    ],
  },
  {
    id: "farmaceutica",
    grupoId: "sectores-clientes",
    titulo: "Farmacéutica y Cosmética",
    desc: "Laboratorios, distribuidores farmacéuticos y marcas de belleza que requieren empaques técnicos con cumplimiento COFEPRIS.",
    empresas: [
      { nombre: "Laboratorios Pisa",     giro: "Fabricación y distribución farmacéutica",        ciudad: "Nacional",             desc: "Laboratorio que requiere corrugado con especificaciones técnicas para distribución de medicamentos." },
      { nombre: "Genomma Lab",           giro: "Productos OTC y de cuidado personal",            ciudad: "CDMX",                 desc: "Empresa de medicamentos OTC y cosméticos con necesidad de empaque personalizado y troquelado." },
      { nombre: "L'Oréal México",        giro: "Cosméticos y productos de cuidado personal",     ciudad: "CDMX",                 desc: "Marca global con planta en CDMX que consume corrugado para exportación e importación regional." },
      { nombre: "Farmacias del Ahorro",  giro: "Cadena de farmacias y distribución",             ciudad: "Nacional",             desc: "Red de farmacias con demanda de corrugado para logística interna y distribución de productos." },
      { nombre: "Beiersdorf México",     giro: "Cuidado personal y productos dermatológicos",    ciudad: "CDMX",                 desc: "Fabricante de Nivea y Eucerin en México, requiere corrugado especial para exportación regional." },
    ],
  },
  {
    id: "textil-retail",
    grupoId: "sectores-clientes",
    titulo: "Textil, Moda y Retail",
    desc: "Marcas de ropa, calzado y retail que usan corrugado y microcanal para envíos, tiendas y presentación de producto.",
    empresas: [
      { nombre: "Liverpool",             giro: "Departamental — logística y distribución",       ciudad: "CDMX / Nacional",      desc: "Cadena departamental que requiere cajas corrugadas personalizadas para distribución interna y e-commerce." },
      { nombre: "Palacio de Hierro",     giro: "Tienda de lujo — empaque premium",               ciudad: "CDMX",                 desc: "Departamental premium con necesidad de corrugado y microcanal para envíos y empaques especiales." },
      { nombre: "Coppel",                giro: "Retail masivo — logística de empaque",           ciudad: "Nacional",             desc: "Retail con operación logística de gran escala que mueve miles de cajas corrugadas diariamente." },
      { nombre: "VidaXL México",         giro: "E-commerce de muebles y hogar",                  ciudad: "Nacional",             desc: "Plataforma con empaque de alta especificación para muebles y artículos de gran volumen." },
      { nombre: "Andrea",                giro: "Calzado y moda por catálogo y e-commerce",       ciudad: "Guanajuato / Nac.",    desc: "Marca de calzado y moda que usa cajas corrugadas estándar para envío directo al consumidor." },
    ],
  },
  {
    id: "industrial",
    grupoId: "sectores-clientes",
    titulo: "Industrial y Manufactura",
    desc: "Empresas de manufactura, autopartes, electrónica y bienes de capital que consumen corrugado pesado para exportación y distribución B2B.",
    empresas: [
      { nombre: "Nissan México",         giro: "Manufactura automotriz — embalaje de autopartes", ciudad: "Aguascalientes / CDMX", desc: "Planta automotriz que consume corrugado doble y triple pared para embalaje de autopartes de exportación." },
      { nombre: "Mabe",                  giro: "Manufactura de electrodomésticos",               ciudad: "Estado de México",     desc: "Fabricante de línea blanca que usa corrugado heavy-duty para embalaje de refrigeradores y estufas." },
      { nombre: "Honeywell México",      giro: "Componentes industriales y automatización",      ciudad: "CDMX / Industrial",    desc: "Empresa industrial que requiere empaques técnicos para componentes electrónicos y sensores." },
      { nombre: "Sigma Electric MX",     giro: "Materiales eléctricos y conductos",              ciudad: "CDMX / Nacional",      desc: "Distribuidor de material eléctrico con corrugado estándar para logística de distribución." },
      { nombre: "3M México",             giro: "Manufactura diversificada — empaque especializado", ciudad: "CDMX",              desc: "Empresa con producción local que requiere cajas certificadas para productos adhesivos e industriales." },
    ],
  },

  // ── Certificaciones ──────────────────────────────────────────────────────────
  {
    id: "asociaciones",
    grupoId: "certificaciones",
    titulo: "Asociaciones del Sector",
    desc: "Cámaras, asociaciones y organismos de la industria papelera, del empaque y del comercio en México.",
    empresas: [
      { nombre: "CANACINTRA",            giro: "Cámara Nacional de la Industria de Transformación", ciudad: "CDMX / Nacional",   desc: "Cámara que agrupa fabricantes de cartón, papel y empaques. Programas de capacitación y networking." },
      { nombre: "ANIERM",                giro: "Asociación de Importadores y Exportadores",      ciudad: "CDMX",                 desc: "Organismo que impulsa el comercio exterior mexicano incluyendo exportación de empaques industriales." },
      { nombre: "ANPIC",                 giro: "Asociación Prov. Industria del Calzado",         ciudad: "Guanajuato / Nac.",    desc: "Asociación relevante para fabricantes de cajas de cartón para calzado y sectores relacionados." },
      { nombre: "AMEE",                  giro: "Asoc. Mexicana de Empresas de Empaque",          ciudad: "CDMX",                 desc: "Organismo que agrupa a los principales actores del sector empaque en México para normas y fomento." },
      { nombre: "INAES",                 giro: "Instituto Nal. Economía Social — cooperativas",  ciudad: "Nacional",             desc: "Organismo de apoyo para cooperativas productoras de cajas de cartón y empaques artesanales." },
    ],
  },
  {
    id: "certificadoras",
    grupoId: "certificaciones",
    titulo: "Certificadoras y Organismos de Normas",
    desc: "Entidades que otorgan certificaciones de calidad, sustentabilidad y cumplimiento normativo a fabricantes y distribuidores de empaques.",
    empresas: [
      { nombre: "Bureau Veritas México", giro: "Inspección, verificación y certificación ISO",   ciudad: "CDMX / Nacional",      desc: "Certifica sistemas de gestión ISO 9001, 14001 y 45001 para empresas del sector cartón y empaque." },
      { nombre: "SGS México",            giro: "Pruebas de laboratorio y certificación",         ciudad: "CDMX",                 desc: "Ensayos de compresión BCT, pruebas de humedad y certificación de calidad para cajas corrugadas." },
      { nombre: "FSC México",            giro: "Certificación de cadena de custodia forestal",   ciudad: "Nacional",             desc: "Certifica que el cartón y papel proviene de bosques gestionados de forma responsable (FSC CoC)." },
      { nombre: "IMNC",                  giro: "Instituto Mexicano de Normalización — NMX",      ciudad: "CDMX",                 desc: "Organismo que emite normas NMX para cajas de cartón corrugado: resistencia, medidas y calidad." },
      { nombre: "TÜV Rheinland México",  giro: "Certificación técnica y de producto",            ciudad: "CDMX",                 desc: "Pruebas mecánicas, análisis de materiales y certificación de producto para empaques de exportación." },
      { nombre: "Ecocert México",        giro: "Certificación orgánica y sustentable",           ciudad: "Nacional",             desc: "Certifica materias primas y procesos sustentables para empaques ecológicos y de base bio." },
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

export const totalEmpresas = categorias.reduce((acc, c) => acc + c.empresas.length, 0);
