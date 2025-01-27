export default {
  global: {
    componenteFormativo:
      'Componente Formativo con un nombre extremadamente largo y extenso',
    descripcionCurso:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vestibulum quam bibendum varius.<br/><br/>Quisque pretium at nulla sit amet placerat. Vestibulum consequat suscipit accumsan. Proin pharetra congue enim et tempus. Sed sodales dui volutpat, placerat tellus accumsan, semper est. Phasellus nec lorem elementum, mattis quam eget, vestibulum nibh. Sed.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
    ],
    numeroUnidad: '1',
    tituloUnidad: 'Habilidades, competencias y actitudes',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Liderazgo: conceptualización, características y modelos empresariales de liderazgo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Características del liderazgo',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Modelos empresariales de liderazgo',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'La comunicación como fundamento del éxito empresarial',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Adame, R. (2017). La invención del futuro: el desafío del liderazgo. Bubok Publishing S.L.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/116513?page=44',
    },
    {
      referencia:
        'Bordas Martínez, M. J. (2016). Gestión estratégica del clima laboral. UNED - Universidad Nacional de Educación a Distancia.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/48843',
    },
    {
      referencia:
        'Castro, A. D. (2014). Comunicación organizacional: técnicas y estrategias. Barranquilla, Colombia: Universidad del Norte.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/69924?page=19',
    },
    {
      referencia:
        'Lazzati, S. C., & Tailhade, M. (2019). Liderazgo gerencial. Ediciones Granica.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/151212?page=34',
    },
    {
      referencia:
        'Mercader Juan, C., & Gairín Sallán, J. (2018). Liderazgo y gestión del talento en las organizaciones. LA LEY Soluciones Legales S.A.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/63188?page=9',
    },
    {
      referencia:
        'Ramos Ramos, P. (Coord.). (2015). Dirección de equipos de trabajo: liderazgo y motivación (2.ª ed.). Editorial ICB.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/105616',
    },
    {
      referencia:
        'Ruiz Speare, O. (2017). Liderazgo. Editorial Alfil, S. A. de C. V.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/117658?page=33',
    },
    {
      referencia:
        'Seisdedos, N. (2003). El clima laboral y su medida. Colegio Oficial de la Psicología de Madrid.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/21221?page=',
    },
    {
      referencia:
        'Ulrich, D., & Smallwood, N. (2008). Marca de liderazgo. Madrid: LID Editorial España.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/271460',
    },
    {
      referencia:
        'Valencia Tovar, Á. (2015). El liderazgo, clave del éxito en la empresa. Colegio de Estudios Superiores de Administración - CESA.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/222463',
    },
  ],
  glosario: [
    {
      termino: 'Auto-liderazgo',
      significado:
        'Capacidad de dirigir y gestionar las propias acciones y decisiones, esencial para el desarrollo del liderazgo.',
    },
    {
      termino: 'Características del liderazgo',
      significado:
        'Conjunto de cualidades que definen a un líder efectivo, incluyendo la comunicación asertiva, empatía, toma de decisiones, y visión estratégica.',
    },
    {
      termino: 'Clima empresarial',
      significado:
        'Ambiente emocional y social que prevalece en una organización, influenciado por la cultura, liderazgo y relaciones interpersonales.',
    },
    {
      termino: 'Comunicación asertiva',
      significado:
        'Estilo de comunicación que permite expresar pensamientos, sentimientos y necesidades de manera clara y directa, respetando a los demás.',
    },
    {
      termino: 'Feedback',
      significado:
        'Proceso de proporcionar información a un individuo acerca de su actuación, con el propósito de fomentar la mejora y reforzar acciones específicas.',
    },
    {
      termino: 'Gestión del talento',
      significado:
        'Proceso de atraer, desarrollar y retener a empleados con habilidades valiosas para la organización.',
    },
    {
      termino: 'Inteligencia emocional',
      significado:
        'Capacidad de reconocer, comprender y gestionar las propias emociones y las de los demás, fundamental para un liderazgo efectivo.',
    },
    {
      termino: 'Liderazgo adaptativo',
      significado:
        'Habilidad de ser flexible y responder a cambios en el entorno, especialmente útil en situaciones de incertidumbre.',
    },
    {
      termino: 'Liderazgo auténtico',
      significado:
        'Estilo de liderazgo que enfatiza la transparencia, la ética y la construcción de relaciones de confianza con los empleados.',
    },
    {
      termino: 'Liderazgo transaccional',
      significado:
        'Modelo que se basa en un sistema de recompensas y castigos, estableciendo expectativas claras para incentivar el rendimiento.',
    },
    {
      termino: 'Liderazgo transformacional',
      significado:
        'Modelo que se centra en la capacidad del líder para inspirar y motivar a los empleados, fomentando la innovación y el cambio.',
    },
    {
      termino: 'Liderazgo',
      significado:
        'Capacidad de influir, guiar y motivar a un grupo hacia la consecución de objetivos, independientemente de la autoridad formal.',
    },
  ],
  complementario: [
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Maria Camila Garcia Santamaria',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
        {
          nombre: ['Nombre 1', 'Nombre 2'],
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Desarrollo Front-End',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
