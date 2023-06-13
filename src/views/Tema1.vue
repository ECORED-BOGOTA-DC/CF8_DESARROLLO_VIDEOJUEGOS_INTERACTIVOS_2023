<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 1
      h1 Metodologías de desarrollo
    
    p.mb-5(data-aos="fade-right") Son un conjunto de métodos y técnicas con el objetivo de organizar los equipos de trabajo para diseñar soluciones y desarrollar las funciones de un programa de una manera organizada y eficiente.

    .col-lg-10.d-flex.flex-wrap.align-items-center.mb-5.mx-auto
      .col-lg-6.pe-lg-3.order-2.order-lg-1(data-aos="fade-right")
        h4.mb-4 Metodología rígida
        p Anteriormente para el desarrollo de un proyecto de <em>software</em> se utilizaba una metodología muy rígida en la que se llevaban a cabo procesos de identificación de necesidades, análisis y diseño, planificación, codificación, prueba piloto e implementación; fases que todavía se aplican pero que exigían grandes esfuerzos y se invertía muchísimo tiempo sobre todo en la etapa de planificación donde se debía documentar hasta el más mínimo detalle.
      img.order-1.order-lg-2.mb-4.mb-lg-0.col-lg-6.mx-auto.mb-auto(src="@/assets/curso/temas/tema1/img-1.svg" style="max-width: 505px;" data-aos="fade-left" alt="Imagen representativa del proceso de desarrollo de software")

    .col-lg-10.d-flex.flex-wrap.align-items-center.mb-5.mx-auto
      img.mb-4.mb-lg-0.col-lg-6.mx-auto.mb-auto(src="@/assets/curso/temas/tema1/img-2.svg" style="max-width: 505px;" data-aos="fade-right" alt="ilustra la rigidez del enfoque tradicional en el desarrollo de software")
      .col-lg-6.ps-lg-3(data-aos="fade-left")
        h4.mb-4 Reprocesos
        p Toda esta rigurosidad se sustentaba en el argumento de que no se tuviera que hacer ningún reproceso y el producto liberado fuera de alta calidad. Entonces, con la cantidad de tiempo invertido se hacía casi imposible realizar modificaciones en los requisitos, pues tocaba empezar de cero con el levantamiento de la información, la planificación y la documentación para diseñar y desarrollar el producto nuevamente.

    .col-lg-10.d-flex.flex-wrap.align-items-center.mb-5.mx-auto
      .col-lg-6.pe-lg-3.order-2.order-lg-1(data-aos="fade-right")
        h4.mb-4 Metodologías ágiles
        p Cuando se emprendían proyectos de desarrollo de <em>software</em> mucho más pequeños que exigían tiempos de respuesta cortos para la obtención de resultados, esta metodología se tornó completamente ineficiente pues se gastaba mucho tiempo y recursos en cada fase del proyecto y no se podían realizar cambios a los requisitos para mejorar el producto, por lo tanto empezaron a surgir nuevos métodos más ágiles con un enfoque iterativo es decir por bloques de tareas para llevar a cabo los requisitos de los usuarios teniendo en cuenta que estos pueden cambiar durante todo el proceso de desarrollo.
      img.order-1.order-lg-2.mb-4.mb-lg-0.col-lg-6.mx-auto.mb-auto(src="@/assets/curso/temas/tema1/img-3.svg" style="max-width: 505px;" data-aos="fade-left" alt="Imagen que representa la transición hacia metodologías ágiles en el desarrollo de software")

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_1_1 1.1 Metodologías ágiles
    p.mb-5(data-aos="fade-right") Como se mencionó anteriormente, las metodologías ágiles surgieron de la necesidad de proporcionar respuestas rápidas a los requerimientos de los proyectos, manteniendo flexibilidad frente a los cambios que puedan surgir o se puedan generar durante el proceso de desarrollo.

    .d-flex.flex-wrap.mb-5
      img.col-lg-6.mx-auto.mb-auto(src="@/assets/curso/temas/tema1/img-4.jpg" style="max-width: 610px;" data-aos="fade-right" alt="Imagen que representa la agilidad en el desarrollo de software")
      .col-lg-6(data-aos="fade-left")
        .bloque-texto-b.color-secundario.p-4.mb-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.mb-0 Se utilizan para gestionar proyectos donde el cliente no tiene claro todos los requisitos de este y por lo tanto no se puede definir el alcance desde el principio, igualmente cuando durante el desarrollo se cambia de opinión o se adicionan más requisitos.
            i.fas.fa-quote-right
        p.mb-5.ps-lg-4 Estas metodologías no solamente se utilizan en el sector de las TIC para el desarrollo de <em>software</em> y sistemas de información, también se pueden aplicar a cualquier sector productivo, proyecto que se quiera emprender o entorno donde se produzcan cambios de forma frecuente.
          br
          br
          |Existen aspectos muy marcados de las metodologías ágiles respecto a las metodologías tradicionales que dejan entrever sus características, ver tabla 1:
    
    .titulo-sexto.color-acento-contenido
      h5 Tabla 1
      span.d-block Metodologías ágiles vs Metodologías tradicionales
    
    .tabla-b.color-acento-contenido.mb-5(data-aos="fade-right")
      .tabla-b__header.d-flex.justify-content-around
        h4.mb-0.text-white.col-4.text-end Metodologías Ágiles
        h4.mb-0.text-white.col-4.text-center VS
        h4.mb-0.text-white.col-4.text-start Metodologías Tradicionales
      table
        tr
          td Se enfoca en las personas
          td Se enfoca en los procesos
        tr
          td El cliente participa en todas las fases del proyecto
          td El cliente solo participa al inicio del proyecto
        tr
          td El equipo trabaja colaborativamente
          td Cada miembro del equipo desarrolla una tarea
        tr
          td Trabaja con proyectos medianos y pequeños
          td Trabaja con cualquier proyecto independientemente del tamaño que sea
        tr
          td Lleva a cabo los cambios en los requisitos durante todo el proceso
          td No lleva a cabo ningún cambio en los requisitos durante el proceso
        tr
          td Planifica los requisitos del proyecto en una lista de iteraciones (tareas) para realizar en corto tiempo, luego el desarrollo es iterativo
          td Planifica los requisitos del proyecto en un desarrollo que se lleva a cabo de manera lineal durante todo el proceso
        tr
          td Hay retroalimentaciones por cada iteración para hacer mejoras al producto durante el proceso de desarrollo
          td No hay retroalimentaciones durante el proceso de desarrollo
        tr
          td Realiza entregas del proyecto al terminar cada iteración
          td Realiza solo una entrega cuando finaliza el proyecto
    
    .d-flex.flex-wrap.align-items-center.mb-5
      img(src="@/assets/curso/temas/decorador-titulo.svg" style="max-width: 40px; max-height: 40px;")
      h3.mb-0.ps-3 Manifiesto agile
    
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5.col-xl-10.mx-auto
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-5.jpg')})`}"
        style="right: 0; left: auto;"
      )
      .bloque-texto-g__texto.p-4.me-auto(data-aos="fade-right")
        p.mb-0 Debido a los diferentes procedimientos que se utilizaban para llevar a cabo los proyectos de <em>software</em> y con el afán de unificarlos en un conjunto de buenas prácticas que se pudieran aplicar en los procesos de desarrollo, en el 2001 se creó la organización <em>Agile Alliance</em>; cuyo principal objetivo fue definir un conjunto de principios bajo los cuales se pueda trabajar de manera ágil y con calidad en cualquier entorno.
    p.mb-5(data-aos="fade-right") Dichos principios fueron acuñados con el nombre de <em>“Manifiesto agile”</em> y su fundamento se halla en valores que promueven una cultura basada en la aceptación y adaptación a los cambios que sean necesarios para el progreso de una organización. Los valores mencionados priorizan:

    ol.lista-ol--cuadro.lista-ol--separador.col-xl-8.mx-auto.mb-5
      li 
        .lista-ol--cuadro__vineta(data-aos="fade-right")
          span a
        | Los individuos y las interacciones que se puedan realizar sobre los procesos y las herramientas.
      li
        .lista-ol--cuadro__vineta(data-aos="fade-right")
          span b
        | La funcionalidad del <em>software</em> que se desarrolle sobre la excesiva documentación que se haga sobre este.
      li
        .lista-ol--cuadro__vineta(data-aos="fade-right")
          span c
        | La colaboración con el cliente sobre los detalles de los aspectos contractuales.
      li
        .lista-ol--cuadro__vineta(data-aos="fade-right")
          span d
        | Las respuestas ante los cambios sobre seguir un plan preestablecido.
    
    p.mb-5(data-aos="fade-right") Los valores anteriores se concretaron en doce (12) principios que fueron consignados en un documento llamado <b>Manifiesto Ágil</b> con el objeto de que sirvan como marco de trabajo para cualquier equipo ágil:

    img.mb-5.mx-auto(src="@/assets/curso/temas/tema1/img-6.jpg" style="max-width: 610px" data-aos="fade" alt="los 12 principios del manifiesto ágil")

    p.mb-5(data-aos="fade-right") Para complementar el tema se recomienda realizar las lecturas <b>Gestión Ágil de proyectos y Manifiesto por el Desarrollo Ágil de <em>software</em></b>, que se encuentran en el material complementario.

    .row
      .col-auto.mx-auto(data-aos="fade-right")
        a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
          span Vamos a practicar
          img.ms-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 27px")
          .indicador--click(v-if="mostrarIndicador")
    
    ModalA.modal-edit-1(:abrir-modal.sync="modal1")
      .row.align-items-center.col-lg-10.mx-auto.mb-4(style="border-bottom: 1px solid #707070")
        .col-lg-6.pb-4
          p.fw-bold Tarea #1
          p.mb-0 <b>Paso 1:</b> alista un cronómetro (celular o reloj).  
            br
            |<b>Paso 2:</b> toma 6 monedas de cualquier valor.
            br
            |<b>Paso 3:</b> lánzalas al piso al mismo tiempo y activa el cronómetro.
            br
            |<b>Paso 4:</b> anota en que cayó cada moneda (cara o cruz).
            br
            |<b>Paso 5:</b> cuando termines con la última moneda debes para el cronometro.
            br
            |<b>Paso 6:</b> registra el tiempo.
        .col-lg-6.pb-4(style="border-left: 1px solid #707070")
          p.fw-bold Tarea #2
          p.mb-0 <b>Paso 1:</b> igual a la Tarea#1.  
            br
            |<b>Paso 2:</b> igual a la Tarea#1
            br
            |<b>Paso 3:</b> lanza la primera moneda y activa el cronómetro. 
            br
            |<b>Paso 4:</b> anota en que cayó (cara o sello) la primera moneda y después lanza la segunda moneda y repites el proceso hasta completar la última.
            br
            |<b>Paso 5:</b> igual a la Tarea#1.  
            br
            |<b>Paso 6:</b> igual a la Tarea#1
      h4.text-center Responde las preguntas:
      p.text-center.mb-0 ¿Hubo diferencia de tiempo en la realización de las tareas?
        br
        |¿Cuál fue la más eficiente?
        br
        |¿Cuál tarea corresponde al método ágil? Explica por qué.
    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_1_2 1.2 Metodología <em>SCRUM</em>
    
    p.mb-5(data-aos="fade-right") <em>SCRUM</em> es una de las metodologías ágiles que determinan un marco de trabajo mediante el cual se pueden enfocar problemáticas y adaptar soluciones para entregar productos de la máxima calidad y valor posibles. Se basa en el control de procesos en el desarrollo de productos y se puede llevar a cabo en tres ciclos; pre game, game y pos game basado en los conocimientos y la experiencia de las personas que participan en ellos.

    .d-flex.flex-wrap.align-items-center.mb-5
      img(src="@/assets/curso/temas/decorador-titulo.svg" style="max-width: 40px; max-height: 40px;")
      h3.mb-0.ps-3 <em>Pregame</em>
    
    p.mb-5 Se realiza una lista ordenada de lo que es necesario para el desarrollo del producto y es la fuente de requisitos para la realización de los cambios, ya que se puede variar a medida que avanza el proceso y es ordenada porque se va desarrollando de acuerdo con las prioridades establecidas. Cada elemento de la lista contiene la visión del usuario sobre las funcionalidades que espera encontrar en el producto.

    .col-lg-10.mx-auto.cajon.color-acento-contenido.p-4.mb-4(style="background-color: #E1DDFC")
      p(data-aos="fade-left") En este ciclo se seleccionan los Sprint (requisitos), se determinan los costos y los recursos para la construcción del producto, se hace un análisis general de lo que se debe entregar como producto final y se realiza un diseño del prototipo de este.

    .d-flex.flex-wrap.align-items-center.mb-5
      img(src="@/assets/curso/temas/decorador-titulo.svg" style="max-width: 40px; max-height: 40px;")
      h3.mb-0.ps-3 <em>Game</em>
    
    p.mb-5(data-aos="fade-right") En este ciclo se desarrolla la lista de requisitos que se priorizan a través de una planificación; se realiza la lista de las tareas por llevar a cabo (iteraciones); se determina el tiempo de las iteraciones que es aproximadamente de una semana (1) por actividad hasta completar un máximo de cuatro (4) por iteración, es decir, 30 días y el equipo se organizan en parejas o en las personas que sean necesarias para completarla. Los miembros del equipo se auto organizan y establecen sus propios objetivos de acuerdo con el producto que debe entregar al finalizar la iteración, ver figura 1.


    .col-xl-6.col-lg-10.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido
        h5 Figura 1
        span.d-block Ciclo <em>game</em> - Proceso realizado en cada iteración del producto
      img(src="@/assets/curso/temas/tema1/img-7.svg" data-aos="fade-left" alt="Muestra el proceso del cliclo game iniciando con :Planificación  de la iteración, pasando por Ejecución de las tareas de la iteración, siguiendo Sincronización diaria y por último Revisión del producto, Retrospectiva")
    
    p.mb-5 Después de <b>planificar la iteración</b> que algunos autores como Sánchez (2018) llaman Sprint, se comienza a <b>ejecutar cada tarea de la iteración:</b>

    PasosA.col-xl-10.mx-auto.color-acento-contenido.mb-5(tipo="n")
      .row
        p(data-aos="fade-left") Cada día se realiza una <b>sincronización</b> que consiste en una reunión del equipo con duración de 15 minutos frente a un tablero para autoevaluarse frente a los avances en la tarea en la que los miembros deben responder a las preguntas: 

        ul
          li.d-flex.slign-items-center
            img(src='@/assets/curso/temas/decorador-2.svg' style="max-width: 25px" data-aos="fade-right")
            span.ps-3 ¿Qué he hecho desde ayer para aportar al cumplimiento de la tarea?
          li.d-flex.slign-items-center
            img(src='@/assets/curso/temas/decorador-2.svg' style="max-width: 25px" data-aos="fade-right")
            span.ps-3 ¿Qué voy a hacer a partir de este momento para ayudar al equipo a cumplir el objetivo de la tarea?
          li.d-flex.slign-items-center
            img(src='@/assets/curso/temas/decorador-2.svg' style="max-width: 25px" data-aos="fade-right")
            span.ps-3 ¿Qué obstáculos me impiden colaborar con el trabajo en equipo para conseguir el objetivo?

      .row
        p.text-start(data-aos="fade-right") De acuerdo con las respuestas proporcionadas por los integrantes del equipo, el <em>SCRUM</em> manager (gestionador del proyecto) debe encargarse de hacer la inspección de los obstáculos y hacer las adaptaciones necesarias para eliminarlos, garantizando que el equipo pueda realizar las actividades para terminar la iteración.
      .row
        p.text-start(data-aos="fade-left") Después de cada superación de obstáculos y para terminar la iteración se hace una revisión del producto con lo cual se verifica el cumplimiento de los requisitos. Finalmente el día que se tiene previsto terminar la iteración, se hace nuevamente una reunión de 1 o 2 horas con el cliente para realizar una demostración del cumplimiento de los requisitos plasmados en el producto incremental, resultado de la iteración completada.
      .row
        p.text-start(data-aos="fade-right") De acuerdo con las observaciones recibidas por el cliente se inspeccionan de nuevo los obstáculos que impiden la optimización del producto obtenido y se hacen las adaptaciones necesarias. El <em>SCRUM</em> manager junto con el equipo realiza una <b>retrospectiva</b> del trabajo para identificar en que se puede mejorar la metodología y las técnicas utilizadas para incrementar la productividad.
    
    .d-flex.flex-wrap.align-items-center.mb-5
      img(src="@/assets/curso/temas/decorador-titulo.svg" style="max-width: 40px; max-height: 40px;")
      h3.mb-0.ps-3 <em>Post game</em>

    p.mb-5(data-aos="fade-right") Corresponde al cierre del proyecto dado que se han llevado a cabo todas las iteraciones que lo han perfeccionado para que el cliente quede a satisfacción con las funciones que esperaba. Entonces se prepara el producto para ser liberado haciendo la verificación de las versiones anteriores que se tengan de este, las cuales deben ser almacenadas en repositorios o carpetas para tener un control de versiones.
      br
      br
      |En esta metodología se pueden distinguir claramente tres (3) roles principales:
    
    ImagenInfografica.color-acento-botones.mb-5(data-aos="fade-left")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema1/img-8.svg' alt="ilustra la metodología para los tres roles principales (product owner, scrum, scrum team)")

      .tarjeta.p-3(x="15.5%" y="75%" numero="" style="background-color: #DFF5FA")
        p Es el responsable de entregar un producto de calidad al cliente como resultado del trabajo del resto del equipo. Es el encargado de gestionar la lista de requisitos al seleccionarlos y priorizarlos, también se asegura de que todos los miembros tengan claridad sobre ellos.
      .tarjeta.p-3(x="46.5%" y="75%" numero="" style="background-color: #DFF5FA")
        p Ayuda a entender a todos los miembros del equipo sobre las reglas y valores en la realización del trabajo. Se asegura que haya claridad sobre los objetivos y el alcance del producto a desarrollar e igualmente orienta sobre como aplicar creatividad, auto organizarse como equipo y eliminar los impedimentos para maximizar la productividad.
      .tarjeta.p-3(x="74.5%" y="75%" numero="" style="background-color: #DFF5FA")
        p Es el equipo encargado de ejecutar las tareas de cada iteración para entregar un incremento del producto de acuerdo con las especificaciones entregadas por el <em>Product Owner</em>. Organizan y gestionan su propio trabajo y están conformados por el número de personas necesarias para lograr el cumplimiento de los objetivos trazados.
    p Para complementar el tema, se recomienda realizar la lectura <b>Metodología <em>Scrum</em></b>, la cual e encuentra en el material complementario.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_1_3 1.3 Metodología SUM
    
    p.mb-5(data-aos="fade-right") Es un método ágil que se basa en <em>SCRUM</em> para el desarrollo de proyectos, es fácilmente combinable con otras metodologías ágiles por lo que es adaptable fácilmente al desarrollo de videojuegos ya que se pueden prever y administrar los riesgos, los recursos y así mismo los resultados obtenidos. Se destacan las siguientes características:

    ol.lista-ol--cuadro.lista-ol--separador.col-xl-8.col-lg-10.mx-auto.mb-5
      li 
        .lista-ol--cuadro__vineta(data-aos="fade-right")
          span a
        | El cliente participa en todas las fases del proceso.
      li
        .lista-ol--cuadro__vineta(data-aos="fade-right")
          span b
        | Los equipos de trabajo deben ser multidisciplinar y máximo de siete (7) integrantes.
      li
        .lista-ol--cuadro__vineta(data-aos="fade-right")
          span c
        | Los proyectos por desarrollar deben ser pequeños.
      li
        .lista-ol--cuadro__vineta(data-aos="fade-right")
          span d
        | El tiempo de ejecución de un proyecto debe ser menor a un año.
    p.mb-5(data-aos="fade-right") En la siguiente imagen se puede observar la estructura de SUM según Acerenza (2009):
    ImagenInfografica.color-acento-botones.mb-5.col-xl-10.mx-auto.img-edit-infografia(data-aos="fade-left")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema1/img-9.svg' alt="estructura de SUM según Acerenza (2009)")

      .tarjeta.p-3(x="15%" y="9%" numero="" style="background-color: #DFF5FA")
        .col
          p En esta etapa el equipo de trabajo y el cliente proponen ideas que precisen el tipo de producto a desarrollar, se hacen bocetos para identificar las características que poseerá, se define el alcance y los objetivos, la forma de lograrlos y  los retos que se deben afrontar. 
            br
            br
            |Esta fase termina con un boceto o prototipo que resume el concepto del producto, que en el caso del videojuego contiene el nombre, la historia, el entorno y los personajes que harán parte de este.
      .tarjeta.p-3(x="15%" y="30%" numero="" style="background-color: #DFF5FA")
        .col
          p Tiene que ver con la preparación de las actividades que se deben llevar a cabo para la ejecución del proyecto. La planificación administrativa se encarga de organizar todos los aspectos para el cumplimiento de los objetivos del proyecto como el equipo de desarrollo, el cronograma y el presupuesto.
            br
            br
            |Las especificaciones del proyecto, que este caso es el desarrollo de un videojuego, es la definición de todos los requisitos y funcionalidades que tendrá al igual que su priorización.
      .tarjeta.p-3(x="15%" y="50%" numero="" style="background-color: #DFF5FA")
        .col
          p En esta etapa se refinan los requisitos seleccionándolos y priorizándolos de nuevo para comenzar con el desarrollo de la iteración; se monitorea el cumpliendo de los objetivos de la iteración aplicando técnicas de evaluación definidas con anterioridad. 
            br
            br
            |Para cerrar la iteración se le muestra al cliente lo obtenido, se da por culminada la iteración y se planifica la siguiente.
      .tarjeta.p-3(x="15%" y="70%" numero="" style="background-color: #DFF5FA")
        .col
          p Antes de liberar la versión del producto se verifican la totalidad de sus funcionalidades, se hace un reporte de los ajustes que se deben realizar para dejarlo a punto, se ejecutan los cambios y posteriormente se hace la publicación y distribución.
      .tarjeta.p-3(x="15%" y="90%" numero="" style="background-color: #DFF5FA")
        .col
          p En esta fase se libera la versión del producto que ha sido ajustada de acuerdo con las verificaciones y se hace una evaluación de lo sucedido durante el desarrollo, teniendo en cuenta las dificultades presentadas y los logros alcanzados para documentar las lecciones aprendidas y mejorar la productividad del equipo.
      .tarjeta.p-3(x="93.5%" y="50%" numero="" style="background-color: #DFF5FA")
        .col
          p Se identifican y describen los riesgos a los que se ve expuesto el proyecto, determinando su probabilidad de ocurrencia y el impacto que tienen en el desarrollo del producto, determinando las estrategias que se pueden aplicar para mitigarlos y elaborando un plan de contingencia para saber cómo actuar en caso de que el riesgo ocurra.


    p.mb-5(data-aos="fade-right") Se pueden distinguir los siguientes roles:

    SlyderF.mb-5(columnas="col-12 col-lg-6 col-xl-4" data-aos="fade-left")
      .tarjeta.p-4(style="background-color: #C0EBF6")
        .row.justify-content-center.mb-3
          .col-8
            img.mx-auto(src='@/assets/curso/temas/tema1/sl-1.png' style="margin-top: -6rem; max-width: 136px")
        h4.text-center Cliente
        p.text-center Se encarga de validar el concepto definido para el producto, priorizando los requisitos que le dan mayor valor; evalúa el producto al final de cada iteración haciendo la retroalimentación y proponiendo los cambios a realizar para que se vaya acercando a lo que se definió en el concepto. Valida las versiones que se van a liberar.

      .tarjeta.p-4(style="background-color: #C0EBF6")
        .row.justify-content-center.mb-3
          .col-8
            img.mx-auto(src='@/assets/curso/temas/tema1/sl-2.png' style="margin-top: -6rem; max-width: 136px")
        h4.text-center Productor interno
        p.text-center Ayuda en la construcción de los objetivos del producto y es el responsable de su planificación y desarrollo, solventando todas las dificultades que se presente durante la ejecución de las iteraciones. Establece las acciones que se deben implementar para la mejora continua y se comunica constantemente con el cliente para mantenerlo informado de los avances del proyecto en general.
      .tarjeta.p-4(style="background-color: #C0EBF6")
        .row.justify-content-center.mb-3
          .col-8
            img.mx-auto(src='@/assets/curso/temas/tema1/sl-3.png' style="margin-top: -6rem; max-width: 136px")
        h4.text-center Equipo de desarrollo
        p.text-center Está conformado por diseñadores del concepto del producto, diseñadores gráficos y programadores. El equipo participa en la definición del concepto del producto, define y realiza todas las tareas a ejecutar en cada iteración del producto, estimando la duración de cada una. Participa en la evaluación de la iteración como tal, para ayudar a implementar acciones de mejora.
      .tarjeta.p-4(style="background-color: #C0EBF6")
        .row.justify-content-center.mb-3
          .col-8
            img.mx-auto(src='@/assets/curso/temas/tema1/sl-4.png' style="margin-top: -6rem; max-width: 136px")
        h4.text-center Verificador Beta
        p.text-center Participa en la fase 4 Beta del proyecto y es el responsable de verificar todas las funciones del producto. El verificador no hace parte del equipo de desarrollo ya que ejerce un rol imparcial en las pruebas que realiza. Generalmente utiliza un <em>software</em> especializado para hacer el seguimiento y detectar los errores que se deben corregir por parte del equipo desarrollador.

    p(data-aos="fade-right") Para complementar el aprendizaje de este tema, se recomienda realizar la lectura <b>SUM para el desarrollo de videos juegos</b>, la cual se encuentra en el material complementario.
</template>

<script>
import SlyderF from '../components/SlyderF.vue'
export default {
  name: 'Tema1',
  components: { SlyderF },
  data: () => ({
    modal1: false,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.pasos-a .pasos-a__item .pasos-a__circle .h2
  color: white !important
.img-infografica
  .img-infografica__content
    .img-infografica__card
      width: 610px
      @media (max-width: 768px)
        width: auto
.img-edit-infografia
  .img-infografica__content
      .img-infografica__item
        .img-infografica__item__dot
          &::before
            background-color: #00000030
          &::after
            background-color: #00000020
.slyder-f
  .slyder-f__main
    .horizontal-scroll__wrapper
      padding-top: 5rem
</style>
