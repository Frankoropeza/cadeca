// src/data/directorio.ts — Directorio de negocios del sector (datos públicos de Google Maps; sección en noindex hasta verificación comercial).

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
  web?: string;       // Sitio web del negocio, si lo tiene
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
        desc: "Fábrica de papel y corrugado con amplia trayectoria en la zona norte del Estado de México. 385 reseñas en Google Maps avalan su operación.",
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
        desc: "Bodega especializada en venta de papel y cartón al mayoreo. Presencia consolidada en Google Maps.",
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
        desc: "Expendio local de cartón corrugado en zona oriente de CDMX. Perfil activo en Google Maps con dirección y referencias verificadas.",
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
        desc: "Fabricante local de papel y cartón corrugado en zona oriente de CDMX. Perfil en Google Maps con teléfono y dirección verificados.",
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
        desc: "Papelera con años de operación en Iztapalapa. Perfil verificado en Google Maps con alta calificación.",
        verificado: true,
      },
    ],
  },

  // ── ✅ Semana 1: Fabricantes de Cajas ────────────────────────────────────────
  {
    id: "fabricantes-cajas",
    grupoId: "cadena-de-valor",
    titulo: "Fabricantes de Cajas Corrugadas",
    desc: "Fábricas y talleres locales que convierten el cartón corrugado en cajas terminadas: regular, automática, a la medida. Negocios con perfil público en Google Maps.",
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
        desc: "Empresa de embalaje y fabricación de cajas en Neza. Muy bien calificada en Google Maps (4.7★). Atiende pedidos locales.",
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
        desc: "Taller de fabricación de cajas corrugadas con 47 reseñas positivas en Google Maps. Zona industrial Iztapalapa.",
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
        desc: "Punto de venta y fabricación de cajas corrugadas con 137 reseñas en Google Maps. Alta frecuencia de clientes locales.",
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
        desc: "Fábrica de cajas y cartón corrugado en Ecatepec. Teléfono y dirección verificados en Google Maps. Planta activo.",
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
        desc: "Negocio local de venta de cajas de cartón con domicilio a domicilio. Teléfono activo y perfil en Google Maps.",
        verificado: true,
      },
    ],
  },

  // ── ✅ Semana 1: Distribuidores ──────────────────────────────────────────────
  {
    id: "distribuidores",
    grupoId: "cadena-de-valor",
    titulo: "Distribuidores de Empaques",
    desc: "Distribuidores y comercializadores locales de cajas de cartón, materiales de embalaje y suministros al mayoreo en CDMX y Zona Metropolitana.",
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
        desc: "Distribuidor local con amplia variedad de empaques y materiales. 198 reseñas en Google Maps. Entrega en zona norte del Edomex.",
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
        desc: "Distribuidor de cajas en zona norte con alta calificación (4.7★). Teléfono activo y horario verificado en Google Maps.",
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
        desc: "Tienda de insumos para embalaje en Ermita Iztapalapa. Entrega a domicilio, teléfono activo. Perfil completo en Google Maps.",
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
        desc: "Comercializadora de materiales de embalaje con calificación perfecta en Google Maps. Teléfono directo verificado.",
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
        desc: "Taller de maquila de corte de cartón en zona industrial Vallejo. Compra, venta y transformación de cartón. Dirección completa en Google Maps.",
        verificado: true,
      },
      {
        nombre: "Corrugados Leysa",
        giro: "Fabricante de corrugado e impresión",
        ciudad: "CDMX / Norte",
        maps: "https://www.google.com/maps/search/Corrugados+Leysa+CDMX",
        rating: 3.6,
        reviews: 7,
        desc: "Empresa de corrugados con capacidad de impresión flexográfica. Perfil verificado en Google Maps.",
        verificado: true,
      },

    ],
  },

  // ── ✅ Semana 2: Diseño Packaging ─────────────────────────────────────────────
  {
    id: "diseno-packaging",
    grupoId: "diseno-y-tecnologia",
    titulo: "Diseño Estructural y Gráfico de Packaging",
    desc: "Estudios, talleres y empresas locales especializados en diseño de empaques, cajas a la medida e identidad visual para marcas mexicanas en CDMX y Zona Metropolitana.",
    empresas: [
      {
        nombre: "Diseños de Cartón",
        giro: "Diseño y fabricación de empaques de cartón",
        ciudad: "Benito Juárez, CDMX",
        direccion: "C. San Antonio 223 Local 2, San Pedro de los Pinos, Benito Juárez, CDMX, C.P. 03800",
        maps: "https://www.google.com/maps/search/Diseños+de+Cartón+San+Antonio+223+San+Pedro+de+los+Pinos+CDMX",
        desc: "Taller especializado en diseño y fabricación de empaques de cartón a la medida. Ubicado en San Pedro de los Pinos, zona céntrica de CDMX. Registrado en Sección Amarilla.",
        verificado: true,
      },
      {
        nombre: "BoxToBox",
        giro: "Diseño de packaging y cajas",
        ciudad: "San Jerónimo, CDMX",
        direccion: "Corregidora 208, San Jerónimo, CDMX",
        maps: "https://www.google.com/maps/search/BoxToBox+Corregidora+208+San+Jeronimo+CDMX",
        desc: "Empresa de diseño de packaging y cajas personalizadas en zona sur de CDMX. Listado en directorios industriales.",
        verificado: true,
      },
      {
        nombre: "Empaques y Diseños Mundiales S.A. de C.V.",
        giro: "Diseño y fabricación de empaques",
        ciudad: "Naucalpan de Juárez, Estado de México",
        direccion: "Belisario Domínguez 92, Lomas de Chamapa, Naucalpan de Juárez, Edomex, C.P. 53680",
        maps: "https://www.google.com/maps/search/Empaques+y+Diseños+Mundiales+Belisario+Dominguez+92+Naucalpan",
        desc: "Empresa constituida de diseño y fabricación de empaques en zona industrial de Naucalpan. Razón social registrada ante SAT.",
        verificado: true,
      },
      {
        nombre: "Grupo Empaque",
        giro: "Fabricación de empaques y diseño estructural",
        ciudad: "Atizapán de Zaragoza, Estado de México",
        direccion: "Av. Hipódromo 24, San Miguel Xochimanga, Atizapán de Zaragoza, Edomex, C.P. 52927",
        maps: "https://www.google.com/maps/search/Grupo+Empaque+Hipodromo+24+Atizapan+de+Zaragoza",
        desc: "Empresa dedicada a la fabricación de empaques y diseño estructural en zona norte del Estado de México. Dirección verificada en directorio.",
        verificado: true,
      },
      {
        nombre: "E Grupo Creativo",
        giro: "Diseño gráfico y packaging",
        ciudad: "Benito Juárez, CDMX",
        direccion: "C. Gabriel Mancera 308, Del Valle Centro, Benito Juárez, CDMX, C.P. 03100",
        maps: "https://www.google.com/maps/search/E+Grupo+Creativo+Gabriel+Mancera+308+Del+Valle+CDMX",
        desc: "Estudio de diseño gráfico con servicios de packaging en la colonia Del Valle. Zona comercial con acceso directo.",
        verificado: true,
      },
    ],
  },

  // ── ✅ Semana 2: Maquinaria ───────────────────────────────────────────────────
  {
    id: "maquinaria",
    grupoId: "diseno-y-tecnologia",
    titulo: "Maquinaria y Equipo para Empaque",
    desc: "Proveedores locales de maquinaria para embalaje: formadoras, selladoras, flejadoras, cortadoras y sistemas industriales en CDMX y Zona Metropolitana.",
    empresas: [
      {
        nombre: "Componentes y Mecanizados de Embalaje",
        giro: "Fabricación de componentes para maquinaria de embalaje",
        ciudad: "Estado de México",
        direccion: "C. Francisco Villa 854, Estado de México",
        maps: "https://www.google.com/maps/search/Componentes+y+Mecanizados+de+Embalaje+Francisco+Villa+854",
        desc: "Empresa especializada en fabricación de componentes y piezas para maquinaria de embalaje industrial. Registrada en directorio industrial.",
        verificado: true,
      },
      {
        nombre: "J y M Maquinaria CDMX",
        giro: "Venta y renta de maquinaria industrial",
        ciudad: "Nezahualcóyotl, Estado de México",
        direccion: "Calle 21 No. 63, Las Águilas, Nezahualcóyotl, Edomex, C.P. 57900",
        maps: "https://www.google.com/maps/search/J+y+M+Maquinaria+CDMX+Calle+21+Las+Aguilas+Nezahualcoyotl",
        desc: "Proveedor de maquinaria industrial y equipo para embalaje en zona oriente del Estado de México. Dirección verificada en directorio.",
        verificado: true,
      },
      {
        nombre: "Grupo EMPAC S.A. de C.V.",
        giro: "Maquinaria y equipos de empaque",
        ciudad: "Iztapalapa, CDMX",
        direccion: "Bellavista 42-9, Carolinas, Iztapalapa, CDMX, C.P. 09850",
        maps: "https://www.google.com/maps/search/Grupo+EMPAC+Bellavista+42+Carolinas+Iztapalapa+CDMX",
        desc: "Empresa de maquinaria y equipos para la industria del empaque en zona industrial de Iztapalapa. Razón social registrada.",
        verificado: true,
      },
      {
        nombre: "TRAXEM",
        giro: "Equipos y maquinaria de embalaje",
        ciudad: "Tlalpan, CDMX",
        direccion: "1a Cerrada de Xochitepetl, Andador 1 C No. 20, Valle de Tepepan, Tlalpan, CDMX, C.P. 14646",
        maps: "https://www.google.com/maps/search/TRAXEM+Xochitepetl+Valle+de+Tepepan+Tlalpan+CDMX",
        desc: "Proveedor de equipos y maquinaria para procesos de embalaje industrial en zona sur de CDMX. Dirección completa verificada.",
        verificado: true,
      },
      {
        nombre: "ALTANIA",
        giro: "Maquinaria y equipos industriales",
        ciudad: "Iztapalapa, CDMX",
        direccion: "Av. San Lorenzo 123, San Miguel 8va. Ampliación, Iztapalapa, CDMX, C.P. 09837",
        maps: "https://www.google.com/maps/search/ALTANIA+San+Lorenzo+123+Iztapalapa+CDMX",
        desc: "Empresa de maquinaria y equipos industriales en zona oriente de CDMX. Ubicada en corredor industrial de Iztapalapa.",
        verificado: true,
      },
    ],
  },

  // ── ✅ Semana 2: Tintas y Barnices ────────────────────────────────────────────
  {
    id: "tintas-barnices",
    grupoId: "diseno-y-tecnologia",
    titulo: "Tintas, Barnices y Adhesivos",
    desc: "Proveedores locales de tintas industriales, barnices, adhesivos y materiales para impresión de empaques en CDMX y Zona Metropolitana.",
    empresas: [
      {
        nombre: "Tintas SIUL S.A. de C.V.",
        giro: "Fabricación y venta de tintas industriales",
        ciudad: "Cuauhtémoc, CDMX",
        direccion: "Isabel la Católica 455 Local A, Algarín, Cuauhtémoc, CDMX, C.P. 06800",
        maps: "https://www.google.com/maps/search/Tintas+SIUL+Isabel+la+Catolica+455+Algarin+CDMX",
        desc: "Empresa de tintas industriales para impresión en zona centro de CDMX. Razón social registrada con local comercial.",
        verificado: true,
      },
      {
        nombre: "Adhesivos Industriales ADHENI",
        giro: "Fabricación de adhesivos industriales",
        ciudad: "CDMX",
        direccion: "Platón Sánchez Int. 1, Magdalena Mixiuhca, CDMX",
        maps: "https://www.google.com/maps/search/Adhesivos+Industriales+ADHENI+Platon+Sanchez+Magdalena+Mixiuhca+CDMX",
        desc: "Fabricante local de adhesivos industriales para la industria del empaque y cartón. Zona centro-oriente de CDMX.",
        verificado: true,
      },
      {
        nombre: "Grupo Gocha Industrial",
        giro: "Insumos industriales y tintas",
        ciudad: "Venustiano Carranza, CDMX",
        direccion: "C. Aviadero 121, Felipe Ángeles, Venustiano Carranza, CDMX, C.P. 15310",
        maps: "https://www.google.com/maps/search/Grupo+Gocha+Industrial+Aviadero+121+Felipe+Angeles+CDMX",
        desc: "Empresa de insumos industriales incluyendo tintas y materiales para impresión. Zona industrial oriente de CDMX.",
        verificado: true,
      },
      {
        nombre: "MASEDA Productos Industriales S.A. de C.V.",
        giro: "Productos químicos y adhesivos industriales",
        ciudad: "Iztapalapa, CDMX",
        direccion: "C. Canal Nacional 294-A Bodega 4, San Antonio Culhuacán, Iztapalapa, CDMX, C.P. 09800",
        maps: "https://www.google.com/maps/search/MASEDA+Productos+Industriales+Canal+Nacional+294+Iztapalapa",
        desc: "Distribuidor de productos químicos industriales, adhesivos y selladores para la industria del empaque. Bodega verificada en Iztapalapa.",
        verificado: true,
      },
      {
        nombre: "Insumos Luziérnaga",
        giro: "Insumos para impresión y tintas",
        ciudad: "Naucalpan de Juárez, Estado de México",
        direccion: "Isidro Fabela 44, Buenavista, Naucalpan de Juárez, Edomex, C.P. 53800",
        maps: "https://www.google.com/maps/search/Insumos+Luziernaga+Isidro+Fabela+44+Naucalpan",
        desc: "Proveedor de insumos para impresión incluyendo tintas y materiales complementarios en zona industrial de Naucalpan.",
        verificado: true,
      },
    ],
  },

  // ── ✅ Semana 1: Materiales Complementarios ──────────────────────────────────
  {
    id: "materiales-complementarios",
    grupoId: "logistica-local",
    titulo: "Materiales y Suministros de Embalaje",
    desc: "Negocios locales de cintas adhesivas, rellenos, flejes, esquineros y materiales complementarios para embalaje. Negocios con perfil público en Google Maps.",
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
        desc: "Empresa local de envases y embalaje con perfil completo en Google Maps. Teléfono verificado.",
        verificado: true,
      },
      {
        nombre: "Empaques Durán",
        giro: "Distribución de materiales de embalaje",
        ciudad: "CDMX / Oriente",
        maps: "https://www.google.com/maps/search/Empaques+Duran+CDMX+embalaje",
        rating: 4.1,
        reviews: 50,
        desc: "Distribuidor de materiales de embalaje con 50 reseñas en Google Maps. Operación local activa.",
        verificado: true,
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
