export default {
  global: {
    componenteFormativo: 'Programación orientada a objetos',
    descripcionCurso:
      'El componente formativo se enfoca en la programación orientada a objetos para facilitar el desarrollo de líneas de código que pueda ser interpretadas por el motor de Unity bajo el cual se van a procesar y ejecutar.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Metodologías de desarrollo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Metodologías ágiles',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Metodología <em>SCRUM</em>',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Metodología SUM',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Programación en Unity3D',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Conceptos básicos de algoritmo y programa',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Diagramas de flujo',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Conceptos de variables, operadores, funciones, métodos, estructuras de control',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Funciones de eventos y control de acciones',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Estructura básica de un script de Unity3D',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Control mediante interfaz de usuario (Inspector)',
            hash: 't_2_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_8_228108.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Metodologías ágiles',
      referencia:
        'RobertoTouza.com. (s.f). <em>Gestión Ágil de proyectos.</em>',
      tipo: 'Artículo',
      link: 'https://robertotouza.com/agile/gestion-agil-de-proyectos/',
    },
    {
      tema: 'Metodologías ágiles',
      referencia:
        'Agilemanifiesto.org. (2001). <em>Manifiesto para el desarrollo de software ágil.</em>',
      tipo: 'Documento',
      link: 'http://agilemanifesto.org/',
    },
    {
      tema: 'Metodología <em>SCRUM</em>',
      referencia: 'Trigas, M. (s.f). <em>Metodología Scrum. TFC</em>',
      tipo: 'PDF',
      link:
        'http://openaccess.uoc.edu/webapps/o2/bitstream/10609/17885/1/mtrigasTFC0612memoria.pdf',
    },
    {
      tema: 'Metodología SUM',
      referencia: 'SUM. (s.f). <em>Introducción a SUM</em>',
      tipo: 'Artículo',
      link: 'http://www.gemserk.com/sum/',
    },
    {
      tema: 'Programación en Unity3D',
      referencia:
        'Joyanes Aguilar, L. (2020). Propiedades fundamentales de orientación a objetos. <em>Fundamentos de programación: algoritmos, estructura de datos y objetos (pp. 576-590). McGraw-Hill.</em>',
      tipo: 'Libro',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=10409',
    },
    {
      tema: 'Diagramas de flujo',
      referencia:
        'Mancilla Herrera, A., Capacho Portilla, J., Ebratt Gómez, R.(2016). Cap. 3. Primitivas algorítmicas. Diseño y construcción de algoritmos. Ediciones de la U.',
      tipo: 'Libro',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=6425',
    },
    {
      tema: 'Estructuras de control',
      referencia: 'Microsoft. (2021). <em>Documentación de C#.</em>',
      tipo: 'Manual',
      link: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
    },
    {
      tema: 'Estructuras de control',
      referencia:
        'C#Sharp. Com.es. (2021). <em>Fundamentos del lenguaje C#.</em>',
      tipo: 'Artículo',
      link: 'https://csharp.com.es/fundamentos-del-lenguaje-c/',
    },
    {
      tema: 'Control mediante interfaz de usuario (Inspector)',
      referencia:
        'Academia Android. (2015). <em>Canvas: creación de interfaz de usuario en Unity</em>',
      tipo: 'Blog',
      link:
        'https://academiaandroid.com/canvas-creacion-de-interfaz-de-usuario-en-unity/',
    },
    {
      tema: 'Control mediante interfaz de usuario (Inspector)',
      referencia: 'Unity. (2018). <em>Documentation.</em>',
      tipo: 'Manual',
      link: 'https://docs.unity3d.com/es/2018.4/Manual/UnityManual.html',
    },
    {
      tema: 'Control mediante interfaz de usuario (Inspector)',
      referencia:
        'López, B. (s.f). <em>Introducción a la programación en C#.</em>',
      tipo: 'PDF',
      link:
        'http://www.itnuevolaredo.edu.mx/takeyas/Apuntes/Fundamentos%20de%20Programacion/Apuntes/03.-ElLenguajeCSharp.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Algoritmo',
      significado:
        'Es una secuencia que se lleva a cabo de forma lógica y secuencial que tiene como objetivo la solución de un problema (colombiaaprende.edu.co, s.f).',
    },
    {
      termino: 'Diagrama de flujo',
      significado:
        'Forma gráfica de representación de un algoritmo utilizando simbología (colombiaaprende.edu.co, s.f).',
    },
    {
      termino: 'Función',
      significado:
        'Es un método en programación que permite dividir un programa en bloques más pequeños (lenguajesdeprogramador.net, s.f).',
    },
    {
      termino: 'Metodologías ágiles',
      significado:
        'Conjunto de buenas prácticas y técnicas para que el desarrollo de proyectos se realice en menos tiempo y de forma más dinámica (Da silva, 2021).',
    },
    {
      termino: 'Script',
      significado:
        'Es un conjunto de instrucciones escritas en un lenguaje de programación siguiendo reglas de sintaxis para que se puedan traducir a lenguaje de máquina (gamedevtraum, 2021).',
    },
    {
      termino: '<em>Scrum</em>',
      significado:
        'Metodología de trabajo ágil que está basada en ciclos con periodos de tiempo cortos que pueden ser semanas o meses para entregar una parte del proyecto (Da silva, 2021).',
    },
    {
      termino: 'SUM',
      significado:
        'Metodología utilizada para llevar a cabo el ciclo de vida de un <em>software</em> desarrollado secuencialmente en fases iterativas e incrementales que se ejecutan en corto y por equipos pequeños (Acerenza, 2009).',
    },
    {
      termino: 'Variable',
      significado:
        'Espacio de memoria de un ordenador o dispositivo electrónico destinado al almacenamiento de datos (lenguajesdeprogramador.net, s.f).',
    },
  ],
  referencias: [
    {
      referencia:
        'MinTIC, MinEducación. (s.f.). <em>Lección 1: ¿Qué es un algoritmo?</em>',
      link:
        'http://contenidos.sucerman.com/nivel1/programacion/unidad1/leccion1.html',
    },
    {
      referencia:
        'MinTIC, MinEducación. (s.f.) <em>Lección 2: Los diagramas de flujo.</em>',
      link:
        'http://contenidos.sucerman.com/nivel1/programacion/unidad1/leccion2.html',
    },
    {
      referencia:
        'Da Sila, D. (2021). <em>¿Qué es la metodología ágil? ¿Para qué sirve?.</em>',
      link: 'https://www.zendesk.com.mx/blog/metodologia-agil-que-es/',
    },
    {
      referencia: 'GameDevTraum. (2021). <em>Scripts en programación.</em>',
      link:
        'https://gamedevtraum.com/es/programacion-informatica/introduccion-a-la-programacion/que-es-script-programacion/',
    },
    {
      referencia:
        'Lenguajesdeprogramador.net. (s.f). <em>¿Qué es una FUNCION (o un método) en programación?.</em>',
      link:
        'https://lenguajesdeprogramacion.net/diccionario/que-es-una-funcion-o-metodo-en-programacion/',
    },
    {
      referencia:
        'Lenguajesdeprogramador.net. (s.f). <em>¿Qué es una variable en programación?.</em>',
      link:
        'https://lenguajesdeprogramacion.net/diccionario/que-es-una-variable-en-programacion/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Olga Lucía Mogollón Carvajal',
          cargo: 'Experto Temático',
          centro:
            'Regional Distrito Capital - Centro de Formación de Talento Humano en Salud',
        },
        {
          nombre: 'Luz Aida Quintero Velásquez',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial.',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Asesor Metodológico',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital.',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura.',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñones',
          cargo: 'Diseñador web',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Jhon Edinson Castañeda Oviedo',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'egional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Gloria Amparo López Escudero',
          cargo: 'Adecuadora Instruccional',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Metodólogo para la formación virtual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Leyson Fabian Castaño Pérez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Validación de contenidos accesibles',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
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
