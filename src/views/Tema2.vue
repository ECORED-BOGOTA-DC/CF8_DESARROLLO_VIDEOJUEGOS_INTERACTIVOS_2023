<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 2
      h1 Programación en Unity3D
    
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0(data-aos="fade-left") El programa Unity es un motor de tipo gráfico; esto quiere decir que contiene muchas funcionalidades que resuelven aspectos en la creación de un videojuego sin que se necesite programar; por ejemplo poner color a un objeto seleccionado, iluminar un plano o cambiar el nivel de una imagen entre otros.
          br
          br
          |Para adicionar algún tipo de comportamiento, componente o atributo que no se pueda hacer desde el menú del programa, lo que se debe hacer es escribir líneas de código o scripts para que le proporcionen estas características. Esto es lo que se llama programación orientada a objetos.

    p.mb-5(data-aos="fade-right") <b>La Programación Orientada a Objetos -POO-</b> posee las siguientes características:

    TabsA.color-acento-contenido.mb-5(data-aos="fade-left")
      .tarjeta.p-4(titulo="Abstracción" style="background-color: #DFF5FA")
        p Consiste en abstraer o aislar las características o atributos esenciales que definen un objeto y que lo distinguen de los demás con el propósito de que las pueda usar otro objeto. Por ejemplo si el objeto es una puerta las características esenciales es que tenga un marco, bisagras y cerradura sin importar el tamaño, el color y el tipo de material entre otras.
      .tarjeta.p-4(titulo="Herencia" style="background-color: #DFF5FA")
        p Al encapsulamiento de las características de un objeto se le llama clase; que está conformada por un patrón de atributos que la hacen de orden superior o superclase porque tiene características generales, pero pueden surgir clases hijas o subclases que hereden estas características y se encuentren en orden inferior dentro de la jerarquía. 
          br
          br
          |En el ejemplo de la puerta, las clases hijas que heredan las características son los tipos de puertas que pueden elaborarse como las correderas, plegables, pivotantes, de seguridad, entre otras.
      .tarjeta.p-4(titulo="Polimorfismo" style="background-color: #DFF5FA")
        p Consiste en definir un método con un conjunto de parámetros el cual puede ser aplicado en varios tipos de objetos. El método puede aumentar o disminuir los parámetros dependiendo del objeto al que se aplique. Por ejemplo el método se llama Open y es utilizado para abrir diferentes objetos como: puerta, cuenta bancaria, evento, historia clínica, entre otros. Dependiendo de lo que se abra, el proceso como tal, tiene más o menos actividades por realizar.
      .tarjeta.p-4(titulo="Encapsulamiento" style="background-color: #DFF5FA")
        p Es el conjunto de características esenciales que han sido separadas de las no esenciales. En el ejemplo de la puerta en el encapsulamiento se encuentra el marco, las bisagras y la cerradura ya que son los atributos principales o generales que hacen que el objeto sea definido como puerta, los demás atributos como el color, el material y el tamaño, hacen parte lo que se consideran características, pues estos son atributos que pueden poseer innumerables tipos de objetos.

    p.mb-5(data-aos="fade-right") El lenguaje de programación que se utiliza en Unity para generar las líneas de código o Scripts es C#; el cual se compone de variables, funciones y clases que se explicarán más adelante. Para escribir el código, Unity tiene un editor de texto asociado llamado Visual Studio, aunque el programador puede utilizar simplemente el bloc de notas. El editor (Visual Studio) le ayuda a determinar los errores de sintaxis que se puedan cometer en el desarrollo, por esa razón es recomendable hacer uso de este.   
      br
      br
      |Antes de comenzar a estructurar un programa en Unity, ver la explicación de algunos conceptos básicos en el siguiente enlace:
    
    .tarjeta.p-3.mb-5.col-lg-10.mx-auto(style="background-color: #C0EBF6" data-aos="fade-left")
      .row.justify-content-around.align-items-center
        img(src="@/assets/curso/temas/tema2/img-2.svg" style="max-width: 98px")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-3 Fundamentos de programación: algoritmos, estructura de datos y objetos
              p.text-small Consultar en la base de datos SENA, ingresando su usuario y contraseña.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=10409" target="_blank")
                span.pe-2 Enlace web
                img(src="@/assets/curso/temas/decorador-3.svg" style="max-width: 15px")

    Separador
    .titulo-segundo.color-acento-contenido
      h2#t_2_1 2.1 Conceptos básicos de algoritmo y programa
    
    p.mb-5(data-aos="fade-right") Para introducirse en el mundo de la programación, es necesario comprender los procedimientos y técnicas para desarrollar programas, teniendo claro de antemano que estos (programas) se conciben como la solución a un problema o situación determinada. A continuación se exponen los pasos fundamentales que conducen al desarrollo de un software:
    
    img.mb-5.mx-auto(src="@/assets/curso/temas/tema2/img-3.svg" style="max-width: 400px" data-aos="fade-left")
    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/n-1.svg' style="max-width: 138px")
          .tarjeta(style="background-color: #E1DDFC")
            .p-4
              h4.text-center Analizar el problema o situación
              p Consiste en apoyar al desarrollador en la comprensión del contexto y las variables que determinan la situación o problema presentado. Es la identificación de los datos iniciales que se deben procesar para llegar a la solución.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/n-2.svg' style="max-width: 138px")
          .tarjeta(style="background-color: #E1DDFC")
            .p-4
              h4.text-center Diseñar el algoritmo
              p Consiste en definir una serie de acciones a ejecutar en el proceso y que deben culminar con la solución del problema.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/n-3.svg' style="max-width: 138px")
          .tarjeta(style="background-color: #E1DDFC")
            .p-4
              h4.text-center Realizar la programación
              p Es la codificación del algoritmo en un lenguaje de programación que sea interpretado y ejecutado por el ordenador para que se lleve a cabo la solución del problema.
      
    .cajon.color-primario.p-4.mb-5.col-lg-10.mx-auto(style="background-color: #C0EBF6")
      p(data-aos="fade-right") Para lograr el objetivo de solucionar un problema o tarea, se debe analizar la situación para tener claridad de lo que se pretende, se diseña un algoritmo con los pasos a seguir y se realiza la programación con líneas de código escritas en un lenguaje para ser procesadas y ejecutas por un ordenador del cual se obtienen los resultados esperados.

    .d-flex.flex-wrap.align-items-center.mb-5
      img(src="@/assets/curso/temas/decorador-titulo.svg" style="max-width: 40px; max-height: 40px;")
      h3.mb-0.ps-3 Algoritmo
    
    p.mb-5(data-aos="fade-right") Es el conjunto de pasos o instrucciones ordenadas lógicamente para resolver un problema o realizar una tarea específica. Es uno de los pasos previos antes de entrar a la programación, es decir, antes escribir las líneas de código. Un algoritmo posee características muy definidas para que resulte efectivo:

    ol.lista-ol--cuadro.lista-ol--separador.col-xl-8.mx-auto.mb-5
      li 
        .lista-ol--cuadro__vineta(data-aos="fade-right")
          span a
        | <b>Preciso:</b> tener un objetivo claramente definido.
      li
        .lista-ol--cuadro__vineta(data-aos="fade-right")
          span b
        | <b>Secuencial:</b> llevar a cabo una serie de pasos en secuencia y siguiendo un orden lógico.
      li
        .lista-ol--cuadro__vineta(data-aos="fade-right")
          span c
        | <b>Finito:</b> poseer un número delimitado de pasos.
      li
        .lista-ol--cuadro__vineta(data-aos="fade-right")
          span d
        | <b>Determinado:</b> obtener un mismo resultado no importa cuántas veces se ejecute.
      li
        .lista-ol--cuadro__vineta(data-aos="fade-right")
          span e
        | <b>Llegar a un resultado:</b> solucionar el problema detectado o resolver la tarea que se ha planteado.
      li
        .lista-ol--cuadro__vineta(data-aos="fade-right")
          span f
        | <b>Corto:</b> analizar los tiempos para optimizar los recursos de programación.
    
    p.mb-5 Los algoritmos pueden ser:

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-acento-contenido.p-5.texto-blanco
        .row.justify-content-center.mb-5
          .col-6
            figure
              img.mx-auto(src='@/assets/curso/temas/tema2/img-4.svg' style="max-width: 213px" data-aos="fade-right")
          
        h2.text-center Cualitativos
        p.mx-auto(style="max-width: 400px" data-aos="fade-left").text-center Cuando dentro de los pasos lógicos que lo conforman no se involucran operaciones matemáticas para obtener el resultado deseado.

      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-5
          .col-6
            figure
              img.mx-auto(src='@/assets/curso/temas/tema2/img-5.svg' style="max-width: 213px" data-aos="fade-right")
          
        h2.text-center(style="color: black") Cuantitativos
        p.mx-auto(style="max-width: 400px; color: black" data-aos="fade-left").text-center Cuando dentro de los pasos lógicos se involucra operaciones y cálculos matemáticos que son necesarios para obtener el resultado esperado.
    p.mb-5(data-aos="fade-right") Y un algoritmo se puede diseñar utilizando la técnica:

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-5
          .col-6
            figure
              img.mx-auto(src='@/assets/curso/temas/tema2/img-6.svg' style="max-width: 213px" data-aos="fade-right")
          
        h2.text-center(style="color: black") Pseudocódigo
        p.mx-auto(style="max-width: 400px; color: black" data-aos="fade-left").text-center Las instrucciones que se deben seguir paso a paso de manera lógica y ordenada se representan en forma descriptiva elaborando una serie de expresiones a manera de proposición o afirmación sobre un evento.

      .col-md.tarjeta.color-acento-contenido.p-5.texto-blanco
        .row.justify-content-center.mb-5
          .col-6
            figure
              img.mx-auto(src='@/assets/curso/temas/tema2/img-7.svg' style="max-width: 213px" data-aos="fade-right")
          
        h2.text-center Diagrama de flujo
        p.mx-auto(style="max-width: 400px" data-aos="fade-left").text-center Las instrucciones son representadas por medio de símbolos con formas específicas de acuerdo con la acción que se desea realizar. Este concepto se ampliará en el siguiente apartado.

    p.mb-5(data-aos="fade-right") <b>Ejemplo</b>
      br
      br
      |En la historia <b>“La isla de los tesoros escondidos”</b>, se debe diseñar un algoritmo de búsqueda para encontrar el primer tesoro de cinco (5), el jugador pasará al siguiente nivel solo si lo ha encontrado y podrá terminar la primera fase del juego:
    h4.col-xl-10.mx-auto.mb-4 Pseudocódigo
    ol.lista-ol--cuadro.lista-ol--separador.col-xl-10.mx-auto.mb-5
      li 
        .lista-ol--cuadro__vineta(data-aos="fade-right")
          span 1
        | <b>Preciso:</b> inicio.
      li
        .lista-ol--cuadro__vineta(data-aos="fade-right")
          span 2
        | <b>Paso 2:</b> mirar en el mapa los datos de la ubicación actual y las rutas que puede seguir.
      li
        .lista-ol--cuadro__vineta(data-aos="fade-right")
          span 3
        | <b>Paso 3:</b> seleccionar una ruta.
      li
        .lista-ol--cuadro__vineta(data-aos="fade-right")
          span 4
        | <b>Paso 4:</b> emprender la búsqueda.
      li
        .lista-ol--cuadro__vineta(data-aos="fade-right")
          span 5
        | <b>Paso 5:</b> ¿encontró un tesoro?.
      li
        .lista-ol--cuadro__vineta(data-aos="fade-right")
          span 6
        | <b>Paso 6:</b> Si es verdad pasar al siguiente nivel y terminar fase, de lo contrario volver al paso 2 y repetir la secuencia hasta encontrar el tesoro.
      li
        .lista-ol--cuadro__vineta(data-aos="fade-right")
          span 7
        | <b>Paso 7:</b> fin.
    p.mb-5(data-aos="fade-right") Más adelante se verá este mismo algoritmo expresado en forma de diagrama de flujo para comprender la diferencia.

    .d-flex.flex-wrap.align-items-center.mb-5
      img(src="@/assets/curso/temas/decorador-titulo.svg" style="max-width: 40px; max-height: 40px;")
      h3.mb-0.ps-3 Programa
    
    p.mb-5(data-aos="fade-right") Debido a que el diseño del algoritmo representado en forma de pseudocódigo o diagrama de flujo, no es comprensible por ningún ordenador que vaya a procesar las instrucciones, estas se deben traducir a un lenguaje entendible. Entonces:
    
    .cajon.color-primario.p-4.mb-5.col-lg-10.mx-auto(style="background-color: #C0EBF6")
      p(data-aos="fade-right") Un <b>programa</b> es la codificación de las instrucciones de un algoritmo en un lenguaje de programación, con una sintaxis correcta para que pueda ser interpretado por el ordenador.
    
    p.mb-5(data-aos="fade-right") La sintaxis correcta se refiere a que cada lenguaje de programación tiene ciertas reglas semánticas que se deben respetarse para que en el momento de ser procesadas por la computadora no se generen errores que impidan lograr los resultados esperados. Al proceso de escribir las líneas de código del programa se le denomina <b>programación</b> y las personas que se dedican a esta labor se les denomina <b>programadores</b>.

    TabsA.color-acento-contenido.mb-5(data-aos="fade-left")
      .tarjeta.p-4(titulo="Características de un <br> lenguaje de programación" style="background-color: #DFF5FA")
        p • Poseen reglas de sintaxis y semántica que se debe seguir al pie de la letra para que pueda ser interpretado por la computadora.
          br
          br
          |• Son de alto nivel porque son comprendidos por cualquier persona cuando los escribe al seguir las reglas por ejemplo Contador = 10; asigna el valor de 10 a la variable Contador.
          br
          br
          |• Deben ser traducidos a un lenguaje que entienda el ordenador para que se conviertan en lenguajes ejecutables. 
      .tarjeta.p-4(titulo="Tipos de programas" style="background-color: #DFF5FA")
        p  Pueden ser de dos tipos:
          br
          br
          |• Sistema: son un conjunto de instrucciones que sirven para gestionar el funcionamiento del ordenador como la Unidad Central de Procesos – CPU-, los recursos de memoria como el disco duro y la memoria RAM, periféricos como impresoras y dispositivos de comunicación entre otros. 
          br
          br
          |• Aplicación: conjunto de instrucciones escritas por programadores para que se ejecuten tareas específicas, por ejemplo procesar textos (Word), realizar cálculos (Excel), hacer presentaciones (PowerPoint), desarrollar videojuegos (Unity); entre muchos otros.
    p.mb-5(data-aos="fade-right") El proceso que se lleva a cabo para que un programa sea ejecutado por el ordenador y realice la función deseada se muestra a continuación:

    ImagenInfografica.col-xl-8.mx-auto.color-acento-botones.mb-5(data-aos="fade-left")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema2/img-8.svg')

      .tarjeta.p-3(x="11.5%" y="20%" numero="+" style="background-color: #DFF5FA")
        p.mb-0 Es la escritura ordenada y lógica de las instrucciones que se deben llevar a cabo para resolver un problema o situación determinada, representado en forma de pseudocódigo o de diagrama de flujo.
      .tarjeta.p-3(x="11.5%" y="57%" numero="+" style="background-color: #DFF5FA")
        p Codificación del algoritmo a través de un editor de código que sirve para escribir las instrucciones del algoritmo en un lenguaje de programación de alto nivel, llamado programa fuente.
      .tarjeta.p-3(x="11.5%" y="95%" numero="+" style="background-color: #DFF5FA")
        p Al programa fuente se aplica la opción de compilar del editor de código utilizado, para que el ordenador a través de un lenguaje intérprete (interno en la máquina) lo convierta en un programa objeto que puede entender la máquina.
      .tarjeta.p-3(x="50%" y="20%" numero="+" style="background-color: #DFF5FA")
        p Es el programa que resulta de enlazar todas las funciones para convertir el programa objeto en un programa que la computadora pueda ejecutar.
      .tarjeta.p-3(x="50%" y="95%" numero="+" style="background-color: #DFF5FA")
        p Es el programa que se obtiene producto del proceso de compilación que ha realizado la máquina. Si el programa fuente llega a tener algún error de sintaxis cometido por el programador, el compilador entrega los errores generados para que sean corregidos y se vuelva a realizar la compilación.
      .tarjeta.p-3(x="89%" y="20%" numero="+" style="background-color: #DFF5FA")
        p El programa está listo para ser ejecutado por el ordenador y producir  los resultados que se esperan de este.
    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_2_2 2.2 Diagramas de flujo
    
    p.mb-5(data-aos="fade-right") Es una herramienta de tipo gráfica que representa el diseño de un algoritmo y está compuesta por símbolos que indican las acciones a realizar para obtener un resultado que resuelve un problema, situación o tarea. Los símbolos están unidos por flechas las cuales señalan la secuencia lógica de ejecución de dichas acciones. Todo algoritmo tiene un comienzo y un final representados por sus símbolos respectivos. A continuación se explica cada uno de ellos, ver tabla 2:

    .titulo-sexto.color-acento-contenido
      h5 Tabla 2.
      span Símbolos utilizados en los diagramas de flujo.
    
    .tabla-b.color-acento-contenido.mb-5.col-xl-10.mx-auto(data-aos="fade-right")
      .tabla-b__header.d-flex
        h4.mb-0.text-white.text-center(style="width: 28%") Símbolo
        h4.mb-0.text-white.col.text-center Descripción
      table
        tr
          td(style="width: 20%")
            img.mx-auto(src='@/assets/curso/temas/tema2/t-1.svg' style="max-width: 97px")
          td.text-start Indica el inicio y la terminación del algoritmo.
        tr
          td(style="width: 20%")
            img.mx-auto(src='@/assets/curso/temas/tema2/t-2.svg' style="max-width: 150px")
          td.text-start Símbolo de entrada de datos, indica los valores iniciales que deberán ingresar para ser procesados.
        tr
          td(style="width: 20%")
            img.mx-auto(src='@/assets/curso/temas/tema2/t-3.svg' style="max-width: 150px")
          td.text-start Realización de un proceso llevado a cabo con los datos introducidos, indica operaciones matemáticas de las cuales se genera un resultado; por ejemplo: A ← B + C el resultado de sumarle B a C se almacena en la variable A. 
        tr
          td(style="width: 20%")
            img.mx-auto(src='@/assets/curso/temas/tema2/t-4.svg' style="max-width: 97px")
          td.text-start Símbolo que indica la toma de una decisión. Al interior de él se coloca una pregunta que puede ser cierta/falsa y de la cual salen dos flechas que indica la ruta a seguir de acuerdo con la respuesta.
        tr
          td(style="width: 20%")
            img.mx-auto(src='@/assets/curso/temas/tema2/t-5.svg' style="max-width: 77px")
          td.text-start Símbolos que indican haber alcanzado la solución de la tarea, evento o problema. Al interior se coloca la respuesta obtenida.
        tr
          td(style="width: 20%")
            img.mx-auto(src='@/assets/curso/temas/tema2/t-6.svg' style="max-width: 97px")
          td.text-start Conector que se utiliza para enlazar dos partes del diagrama de flujo que se encuentran en una misma página o interfaz (pantalla) de usuario.
        tr
          td(style="width: 20%")
            img.mx-auto(src='@/assets/curso/temas/tema2/t-7.svg' style="max-width: 97px")
          td.text-start Conector que enlaza dos partes de un diagrama de flujo donde sus partes se encuentra en páginas diferentes.
        tr
          td(style="width: 20%")
            img.mx-auto(src='@/assets/curso/temas/tema2/t-8.svg' style="max-width: 138px")
          td.text-start Flechas que conectan los procesos e indican el flujo del diagrama de flujo.
    p.mb-5(data-aos="fade-right") Los diagramas de flujo tienen unas reglas de elaboración, las cuales son:

    ol.lista-ol--cuadro.lista-ol--separador.col-xl-10.mx-auto.mb-5
      li 
        .lista-ol--cuadro__vineta(data-aos="fade-right")
          span a
        | Se deben elaborar en orden lógico que empieza arriba y termina abajo.
      li
        .lista-ol--cuadro__vineta(data-aos="fade-right")
          span b
        | Inician y finalizan con el mismo símbolo.
      li
        .lista-ol--cuadro__vineta(data-aos="fade-right")
          span c
        | Las flechas que se coloquen deben indicar el flujo o secuencia de las acciones a realizar.
      li
        .lista-ol--cuadro__vineta(data-aos="fade-right")
          span d
        | Los símbolos que indican decisión deben tener dos líneas de salida; una cuando la pregunta o afirmación que se coloca al interior es verdadera la cual debe tener encima la palabra SI y la otra en el caso contrario y a la cual se le debe colocar encima la palabra NO.
      li
        .lista-ol--cuadro__vineta(data-aos="fade-right")
          span e
        | Lo que se escriba al interior de los símbolos debe tener el menor número de palabras posibles o contener operaciones claras:  Z ← A – B
      li
        .lista-ol--cuadro__vineta(data-aos="fade-right")
          span f
        | El diagrama debe probarse con datos reales para verificar su funcionamiento. A esta verificación se le llama “prueba de escritorio”.
    p.mb-5(data-aos="fade-right") Las ventajas que tiene elaborar un algoritmo utilizando esta técnica, son las siguientes:

    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/n-1.svg' style="max-width: 138px")
          .tarjeta(style="background-color: #E1DDFC")
            .p-4
              p.text-center(data-aos="fade-right") Facilita la visualización general del problema, situación o tarea a resolver.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/n-2.svg' style="max-width: 138px")
          .tarjeta(style="background-color: #E1DDFC")
            .p-4
              p.text-center(data-aos="fade-right") Identifica con facilidad si los pasos que se han diseñado para la solución del problema tienen la secuencia lógica para lograr una solución adecuada.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/n-3.svg' style="max-width: 138px")
          .tarjeta(style="background-color: #E1DDFC")
            .p-4
              p.text-center(data-aos="fade-right") Permite verificar con datos reales si el diseño de las instrucciones logra la solución planteada.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/n-4.svg' style="max-width: 138px")
          .tarjeta(style="background-color: #E1DDFC")
            .p-4
              p.text-center(data-aos="fade-right") Comprueba si hay procedimientos que se repiten.
    p.mb-5 <b>Ejemplo</b>
      br
      br
      |En la siguiente figura se observa el diagrama de flujo del ejemplo de la historia “La isla de los tesoros escondidos”, en la cual se había elaborado un algoritmo con la técnica de Pseudocódigo.  En este diagrama, ver figura 2, se ilustra la actividad que se le ha propuesto llevar a cabo al jugador.

    .col-xl-6.col-lg-10.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido
        h5 Figura 2.
        span Diagrama de flujo de una tarea a realizar en el juego “La isla de los tesoros escondidos”
      img(src="@/assets/curso/temas/tema2/img-9.svg" data-aos="fade-left")

    .cajon.color-primario.p-4.mb-5.col-lg-10.mx-auto(style="background-color: #C0EBF6")
      p(data-aos="fade-right") Este flujo de tareas a realizar es apenas una parte muy pequeña del juego y se puede continuar agregando tareas de acuerdo con las mecánicas definidas, para lo cual se sigue agrandando el diagrama que posteriormente se codificará.

    .row.mb-5
      .col-auto.mx-auto(data-aos="fade-left")
        a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
          span Vamos a practicar
          img.ms-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 27px")
    
    ModalA.modal-edit-1(:abrir-modal.sync="modal1")
      .row.align-items-center.col-lg-10.mx-auto.mb-4
        .col-md.pb-4.order-2.order-md-1
          p.fw-bold Diseñando el Algoritmo 
          p.mb-3 Suponga que debe modificar el algoritmo diseñado anteriormente de tal forma que si el jugador no encuentra el tesoro, debe pedir una pista para lo cual se le descuentan 20 monedas y cuando encuentre el tesoro se le dará una recompensa de 50 monedas y podrá terminar esta fase del juego.
          p <b>Tarea #1</b>
            br
            |Diseñar el algoritmo utilizando la técnica de <b>Pseudocódigo.</b>
            br
            br
            |<b>Tarea #2</b>
            br
            |Diseñar el algoritmo utilizando la técnica de <b>Diagrama de Flujo.</b>
        img.mb-4.mb-md-0.order-1.order-md-2.mx-auto(src="@/assets/curso/temas/tema2/img-10.svg" style="max-width: 238px")
    
    p.mb-5.text-center(data-aos="fade-right") Para complementar el aprendizaje de la temática se recomienda hacer la siguiente lectura:

    .tarjeta.p-3.col-lg-8.mx-auto(style="background-color: #C0EBF6" data-aos="fade-left")
      .row.justify-content-around.align-items-center
        img(src="@/assets/curso/temas/tema2/img-2.svg" style="max-width: 98px")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-3 Diseño y construcción de algoritmos
              p.text-small Consultar en la base de datos SENA, ingresando su usuario y contraseña.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=6425" target="_blank")
                span.pe-2 Enlace web
                img(src="@/assets/curso/temas/decorador-3.svg" style="max-width: 15px")
    Separador
    .titulo-segundo.color-acento-contenido
      h2#t_2_3 2.3 Conceptos de variables, operadores, funciones, métodos, estructuras de control
    
    p.mb-5(data-aos="fade-right") En los lenguajes de programación dentro de la sintaxis de las líneas de código; se utilizan elementos o identificadores los cuales son utilizados dentro de la estructura del programa para lograr la solución del problema, situación o tarea determinada. A continuación, se estudiará cada uno de ellos.

    .d-flex.flex-wrap.align-items-center.mb-5
      img(src="@/assets/curso/temas/decorador-titulo.svg" style="max-width: 40px; max-height: 40px;")
      h3.mb-0.ps-3 Variables
    
    p.mb-5(data-aos="fade-right") Son espacios en la memoria del ordenador con un nombre que las identifica (identificador); los cuales son destinados para el almacenamiento de datos que pueden tomar diferentes tipos de valores durante la ejecución del programa. 
      br
      br
      |Los <b>tipos de datos</b> que pueden almacenar las variables son:
    
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta-edit" data-aos="fade-left")
      .row(titulo="Numéricos")
        .mb-4.mb-md-0
          p.col-lg-10.mx-auto Representados por valores enteros o valores reales que incorporan el signo, por ejemplo el valor -5 corresponde a un número entero con signo negativo y 4,5 corresponde a un valor real con un solo decimal y sin signo.
      .row(titulo="Lógicos")
        .mb-4.mb-md-0
          p.col-lg-10.mx-auto Son tipos de datos que representa uno de dos valores “falso” o “verdadero”, utilizados en los algoritmos cuando se diseñan instrucciones en las cuales se debe cumplir una condición para la toma de una decisión; por ejemplo la condición es encontrar el tesoro; si la respuesta es verdadera puede continuar al siguiente nivel y si es falsa debe seguir buscando.
      .row(titulo="Alfanumérico")
        .mb-4.mb-md-0
          p.col-lg-10.mx-auto Son datos representados por caracteres diferentes a los números puros o a los lógicos; pues estos pueden contener letras con números y símbolos especiales como guion (-), asterisco (*), símbolo de número (#), entre otros.
    
    .cajon.color-primario.p-4.mb-5.col-lg-10.mx-auto(style="background-color: #C0EBF6")
      p(data-aos="fade-left") Dentro de las líneas de código del programa se debe indicar el tipo de variable que se está creando; es decir qué tipo de valor almacenará;  a esto se le llama declarar una variable. Por ejemplo si la variable se declara tipo numérica, entonces no podrá contener caracteres.
    
    p.mb-5(data-aos="fade-right") En el lenguaje de programación de C# utilizado en el programa de Unity para el desarrollo de videojuegos, se deben tener en cuenta una serie de <b>reglas para definir variables:</b>

    ul.mb-5
      li.d-flex.slign-items-center
        img(src='@/assets/curso/temas/decorador-2.svg' style="max-width: 25px" data-aos="fade-right")
        span.ps-3 El nombre de la variable no puede comenzar con un número pero si puede hacer parte del nombre.
      li.d-flex.slign-items-center
        img(src='@/assets/curso/temas/decorador-2.svg' style="max-width: 25px" data-aos="fade-right")
        span.ps-3 No se pueden colocar espacios dentro del nombre.
      li.d-flex.slign-items-center
        img(src='@/assets/curso/temas/decorador-2.svg' style="max-width: 25px" data-aos="fade-right")
        span.ps-3 No puede contener caracteres como +, - que los cuales son utilizados en operaciones matemáticas.
      li.d-flex.slign-items-center
        img(src='@/assets/curso/temas/decorador-2.svg' style="max-width: 25px" data-aos="fade-right")
        span.ps-3 No pueden existir dos variables que se llamen igual  dentro de un mismo bloque de instrucciones.
      li.d-flex.slign-items-center
        img(src='@/assets/curso/temas/decorador-2.svg' style="max-width: 25px" data-aos="fade-right")
        span.ps-3 No se pueden utilizar nombres con palabras propias del lenguaje de programación; por ejemplo la no se puede llamar a una variable “int”  pues esta es una palabra que reserva el programa para definir que el tipo de datos es entero. 
      li.d-flex.slign-items-center
        img(src='@/assets/curso/temas/decorador-2.svg' style="max-width: 25px" data-aos="fade-right")
        span.ps-3 El lenguaje hace diferencia entre letras mayúsculas y minúsculas; por ejemplo las variables X y x son diferentes.
      li.d-flex.slign-items-center
        img(src='@/assets/curso/temas/decorador-2.svg' style="max-width: 25px" data-aos="fade-right")
        span.ps-3 Se recomienda darle un valor inicial a la variable.
    
    .conatiner-left-right.mb-5(style="background-color: #F7F6FE")
      .col-xl-10.mx-auto.d-flex.flex-wrap.py-4(data-aos="fade-right")
        p.col-md.pe-md-4 <b>Ejemplo</b>
          br
          br
          |En este caso se han definido unas variables en C#
          br
          br
          |Las palabras marcadas en rojo son palabras que hacen parte de la sintaxis del lenguaje; bool indica que la variable A es de tipo lógico y que puede contener el valor de <em>true</em> o <em>false</em> y en este caso la viable se inicializó con “<em>false</em>”. La variable B es de tipo numérico que puede tomar valores enteros y se ha inicializado con el valor “80”.
        img(src="@/assets/curso/temas/tema2/img-11.svg" style="max-width: 190px" data-aos="fade-left")
    
    .d-flex.flex-wrap.align-items-center.mb-5
      img(src="@/assets/curso/temas/decorador-titulo.svg" style="max-width: 40px; max-height: 40px;")
      h3.mb-0.ps-3 Operadores
    p.mb-5(data-aos="fade-right") Son elementos dentro de la programación, con los cuales se realizan operaciones básicas sobre los datos. Cuando el programa fuente es compilado el ordenador realiza internamente los procedimientos matemáticos o lógicos para entregar el resultado.
  
    .tabla-b.color-acento-contenido.mb-5(data-aos="fade-right")
      .tabla-b__header.d-flex
        h4.mb-0.text-white.text-center(style="width: 28%") Operador
        h4.mb-0.text-white.col.text-center Operandos
      table
        tr
          td Es el elemento como tal, con el que se realiza la operación de adición, substracción, comparación:
            br
            |+,-,<,>
          td Son los elementos sobre los cuales se aplican las operaciones:
            br
            |<b>variables, números</b>

    .p-4.mx-auto.mb-5(style="background-color: #E1DDFC; max-width: 400px" data-aos="fade-left")
      p •  Lo que se quiere es sumar las variables A,B y colocar el resultado en la variable Total
        br
        |•  Limpiar los valores  
        br
        br
        |<b>A = ____</b>
        |<b>B = ____</b>
        br
        br
        |<b>Total = _____________</b>
        br
        br
        |<b>Limpiar (A y B): _________</b>
    
    p.mb-5(data-aos="fade-right") En el lenguaje de programación C# el cual se utiliza en Unity para el desarrollo de los videojuegos, se distinguen los siguientes <b>tipos de operadores</b>:

    TabsA.color-acento-contenido.mb-5(data-aos="fade-left")
      .tarjeta.p-4(titulo="Operadores de Asignación" style="background-color: #DFF5FA")
        p.mb-0 <b>Operadores de Asignación</b>
          br
          br
          |Se utilizan para asignar un nuevo valor a una variable que ha sido declarada dentro del programa. En la izquierda de la asignación se coloca el nombre de la variable y en la derecha el valor que se asigna. Ejemplo:
          br
          br
          |<span style="color: red">string</span> logo;  ⇒ se ha declarado la variable logo de tipo texto.
          br
          |<span style="color: red">int</span>      total;  ⇒ se ha declarado la variable total de tipo numérico.
          br
          br
          |logo = ETR; ⇒ se ha asignado a la variable logo (izquierda)  el valor ETR (derecha).
          br
          |total = 28;    ⇒ se  ha asignado a la variable total (izquierda)  el valor 28 (derecha).
      .tarjeta.p-4(titulo="Operadores Aritméticos" style="background-color: #DFF5FA")
        p.mb-0 <b>Operadores Aritméticos</b>
          br
          br
          |Están conformados por los símbolos que permiten hacer operaciones matemáticas con los números como suma (+), resta (-), multiplicación (*), división (/); modular (%); este último devuelve como resultado el residuo de una división. Ejemplo: 
          br
          br
          |<span style="color: red">Long</span> 	A; ⇒ se ha declarado la variable A de tipo entero almacenando números muy grandes, diferente a la tipo int que almacena números enteros muy pequeños.
          br
          |<span style="color: red">Int</span> 	B; ⇒ se ha declarado la variable B de tipo entero.
          br
          |<span style="color: red">Double</span> C; ⇒ se ha declarado la variable C de tipo decimal albergando hasta quince números decimales después del punto. 
          br
          br
          |A = 25 * 30;
          br
          |B = 5 * 3;
          br
          |C = 3 / 2;
      .tarjeta.p-4.d-flex.flex-wrap(titulo="Operadores Relacionales" style="background-color: #DFF5FA")
        .col-lg-7.order-2.order-lg-1
          p.fw-bold Operadores Relacionales
          p Estos operadores se utilizan para realizar la comparación entre dos valores donde el resultado es verdadero si la afirmación de la expresión comparada es correcta, de lo contrario el resultado es falso. Los símbolos para comparar las variables son:
          p Ejemplo:
            br
            |<span style="color: red">bool</span> total;  ⇒ se ha declarado la variable total de tipo booleano es decir que solo puede tomar uno de dos valores; “verdadero” o “falso”.
            br
            br
            |total = 8 > 9 ; ⇒ esto da como resultado falso (<em>false</em>).
        .col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0.d-flex.ps-lg-3
          tabla.tabla-edit-2
            thead(style="border: 1px solid black")
              tr
                th Operador
                th Ejemplo
                th Descripción
            tbody
              tr
                td <
                td a < b
                td a menor que b
              tr
                td >
                td a > b
                td a mayor que b
              tr
                td ≦
                td a ≦ b
                td a menor o igual que b
              tr
                td ≧
                td a ≧ b
                td a mayor o igual que b
              tr
                td ==
                td a == b
                td a igual que b
              tr
                td !=
                td a != b
                td a distinto que b
      .tarjeta.p-4(titulo="Operadores Lógicos" style="background-color: #DFF5FA")
        p <b>Operadores Lógicos</b>
          br
          br
          |Estos operadores se utilizan con las tablas de verdad;
          ul
            li • El operador && (AND) es decir “y” ; solo devuelve un valor verdadero si las dos expresiones son verdad. 
            li • El operador || (OR) es decir “o”; solo devuelve un valor verdadero si una de las dos expresiones es verdadera.
            li • El operador ! (NOT) es decir “no”; devuelve un valor verdadero si la expresión es falsa y devuelve un valor falso si la expresión es verdadera.
          br
          br
          |Ejemplo: 
          br
          |<span style="color: red">Int</span> a = 10; ⇒ se ha declarado la variable a de tipo entero.
          br
          |<span style="color: red">Int</span> b = 20; ⇒ se ha declarado la variable b de tipo entero.
          br
          |<span style="color: red">Int</span> c = 8; ⇒ se ha declarado la variable c de tipo entero.
          br
          |<span style="color: red">bool</span> total;  ⇒ se ha declarado la variable total de tipo booleana.
          br
          br
          |total = a < b && b > c;  ⇒ el resultado es verdadero ya que a < b es verdad y b > c también es verdadero.
      .tarjeta.p-4(titulo="Operadores de Incremento" style="background-color: #DFF5FA")
        p <b>Operadores de Incremento</b>
          br
          br
          |Estos operadores se llevan a cabo incrementando o disminuyendo el valor de la variable en una unidad. El operador que indica incremento es “++” y el que indica disminución es “—“. Ejemplo:
          br
          br
          |<span style="color: red">Int</span> a = 5; ⇒ se ha declarado la variable a de tipo entero.
          br
          br
          |a ++; ⇒ se ha incrementado la variable a en 1 y ahora su valor es 6.
          br
          |a ++; ⇒ se ha incrementado la variable a en 1 y ahora su valor es 7.
          br
          |a ++; ⇒ se ha incrementado la variable a en 1 y ahora su valor es 8.
          br
          |a  —; ⇒ se ha disminuido la variable a en 1 y ahora su valor es 7.
          br
    
    .d-flex.flex-wrap.align-items-center.mb-5
      img(src="@/assets/curso/temas/decorador-titulo.svg" style="max-width: 40px; max-height: 40px;")
      h3.mb-0.ps-3 Funciones y métodos
    
    p.mb-5(data-aos="fade-right") Son procedimientos dentro de la programación llamados bloques y en los cuales se escriben líneas de código o instrucciones para llevar a cabo una determinada acción dentro del programa. Estos elementos le proporcionan una estructura modular al programa ya que líneas de código pueden ser invocados en otra parte del programa, sin necesidad de repetirlas o también se pueden invocar en otros programas para no escribirlas de nuevo. La diferencia entre estos dos procedimientos radica en siguiente característica:

    .col-lg-8.col-xl-6.row.mb-5.mx-auto
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img-12.svg' style="max-width: 138px")
          .tarjeta.w-100(style="background-color: #E1DDFC")
            .p-3.text-center
              p.fw-bold Función
              p.text-center Es un bloque de instrucciones que cuando se ejecutan retornan siempre un valor de salida.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img-13.svg' style="max-width: 138px")
          .tarjeta.w-100(style="background-color: #E1DDFC")
            .p-3.text-center
              p.fw-bold Método
              p.text-center Es un bloque de instrucciones que cuando se ejecutan no necesariamente retornan un valor.

    p.mb-5(data-aos="fade-right") De acuerdo con lo anterior, todos los bloques de instrucciones que lleven a cabo alguna acción dentro del programa se llaman métodos.

    .conatiner-left-right.mb-5(style="background-color: #F7F6FE")
      .d-flex.flex-wrap.col-xl-10.mx-auto.py-4.mb-4
        p.col-lg-6.col-xl-8.pe-lg-3(data-aos="fade-right") <b>Ejemplo</b>
          br
          br
          |En el lenguaje de programación C# (que se utiliza en Unity):
          br
          br
          |La instrucción para realizar la primera parte corresponde a una función dado que devuelve un valor, entonces:
          br
          br
          |La primera instrucción indica que el procedimiento que se va a realizar se llama local el cual es de tipo privado y devuelve un valor entero, contiene dos para parámetros: una variable de tipo entera llamada A y otra del mismo tipo llamada B.
        img.col-lg-6.col-xl-4(src="@/assets/curso/temas/tema2/img-14.svg" data-aos="fade-left")
      .d-flex.flex-wrap.col-xl-10.mx-auto.py-4
        img.col-lg-6.col-xl-4(src="@/assets/curso/temas/tema2/img-15.svg" data-aos="fade-right")
        p.col-lg-6.col-xl-8.ps-lg-3(data-aos="fade-left") Los procedimientos pueden ser de tipo private o public, es decir, si el bloque de instrucciones solo se puede utilizar en el programa actual es private, pero si se puede utilizar en otros es public. El procedimiento suma las variables A y B retornando el resultado en la variable total. Como hay un resultado que se genera el procedimiento es una <b>Función.</b>
          br
          br
          |La primera instrucción indica que el procedimiento que se va a realizar se llama limpiar el cual es de tipo privado (private) y retorna un valor nulo (void),  en las cajas de texto (txt) de las variables A,B y total. Obsérvese que como el procedimiento no devuelve un valor, entonces es un método.

    .d-flex.flex-wrap.align-items-center.mb-5
      img(src="@/assets/curso/temas/decorador-titulo.svg" style="max-width: 40px; max-height: 40px;")
      h3.mb-0.ps-3 Estructuras de control
    
    p.mb-5(data-aos="fade-right") Las estructuras de control permiten que se ejecuten los procedimientos o bloques de instrucciones de una manera secuencial, condicional o repetitiva.

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta-edit" data-aos="fade-left")
      .row(titulo="Estructura de control secuencial")
        .w-100
          p.col-lg-11.mx-auto.mb-4 Permite que las instrucciones de un procedimiento se ejecuten una tras otra, es decir en secuencia. 
            |Ejemplo: en lenguaje C#; las siguientes instrucciones se deben llevar a cabo en secuencia:
            br
            br
            |• Ingresar el primer valor y en pantalla debe aparecer “Ingresar el primer número:”
            br
            |• Ingresar el segundo valor y en pantalla debe aparecer “Ingresar el segundo número:”
            br
            |• Sumar los dos valores ingresados y en pantalla debe aparecer “ la suma es:”
          img.mx-auto(src="@/assets/curso/temas/tema2/img-16.png" style="max-width: 892px")
      .row(titulo="Estructura de control condicional")
        .w-100
          p.col-lg-11.mx-auto.mb-4 Permite que se ejecuten instrucciones siempre y cuando se cumpla una condición y el formato de la sintaxis se escribe con los códigos if y else.
            br
            |Ejemplo: en lenguaje C#: 
            br
            br
            |•   La condición es que la venta sea mayor a 50 dólares.
            br
            |•   Si es verdadero se aplica descuento.
            br
            |•   Si es falso no se aplica el descuento.
          img.mx-auto(src="@/assets/curso/temas/tema2/img-17.png" style="max-width: 892px")
      .row(titulo="Estructura repetitiva")
        .w-100
          p.col-lg-11.mx-auto.mb-4 Permite que se ejecuten un bloque de instrucciones varias veces hasta que se cumpla una condición. La sintaxis se escribe con el código while (mientras). 
            |Ejemplo: en lenguaje C#:
            br
            br
            |•   Imprimir los múltiplos de 2.
            br
            |•   Hasta que llegue a 20.
          img.mx-auto(src="@/assets/curso/temas/tema2/img-18.png" style="max-width: 892px")
    p.mb-4(data-aos="fade-right") Para complementar el aprendizaje de las temáticas se recomienda la lectura de los textos Documentación de C# y Fundamentos del lenguaje C#, los cuales se encuentran en el material complementario.
    Separador 

    .titulo-segundo.color-acento-contenido
      h2#t_2_4 2.4 Funciones de eventos y control de acciones
    
    p.mb-5(data-aos="fade-right") En la programación orientada a objetos se mencionaron las características de abstracción, encapsulamiento, herencia y polimorfismo; aspectos que se aplican a los objetos de una situación o tarea determinada y el desarrollador construye líneas de código que son aplicadas a estos casos:

    .col-xl-10.mx-auto.row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/n-1.svg' style="max-width: 138px")
          .tarjeta(style="background-color: #E1DDFC")
            .p-4
              p.text-center Cuando se desarrollan programas que resuelven problemas o tareas se construyen bloques de instrucciones que realizan determinadas funciones y actúan sobre los objetos para que estos se comporten de cierta manera y generen resultados específicos. 
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/n-2.svg' style="max-width: 138px")
          .tarjeta(style="background-color: #E1DDFC")
            .p-4
              p.text-center Cuando se desarrollan programas en los que hay fuerte interacción del usuario con las funciones de éste, como es el caso de los videojuegos; ocurren lo que se llaman eventos.
    
    .d-flex.flex-wrap.mb-5
      img(src='@/assets/curso/temas/decorador-2.svg' style="max-width: 25px")
      p.mb-0.ps-2.fw-bold Evento
    
    p.mb-5(data-aos="fade-right") Es entonces una acción que es ejecutada sobre un objeto del programa y que es provocada por el usuario al interactuar con la interfaz de este (programa), recuérdese que la interfaz es la pantalla inicial que el usuario visualiza y en la cual puede llevar a cabo acciones. 
      br
      br
      |Cuando se estén escribiendo las líneas de código se deben tener en cuenta los eventos que se pueden dar sobre los objetos creados dentro del programa; por ejemplo cuando el usuario hace clic sobre un botón ocurre algo al interior del sistema que hace que se active alguna función determinada. Los eventos incluyen: 

    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0.d-flex
        .d-flex.align-items-center.justify-content-center.w-100.tarjeta(style="background-color: #FAE8C6")
          .p-4
            p.fw-bold.mb-0.text-center(data-aos="fade-right") Mouse
      .col-md-6.col-lg.mb-5.mb-lg-0.d-flex
        .d-flex.align-items-center.justify-content-center.w-100.tarjeta(style="background-color: #FAE8C6")
          .p-4
            p.fw-bold.mb-0.text-center(data-aos="fade-right") Teclado
      .col-md-6.col-lg.mb-5.mb-lg-0.d-flex
        .d-flex.align-items-center.justify-content-center.w-100.tarjeta(style="background-color: #FAE8C6")
          .p-4
            p.fw-bold.mb-0.text-center(data-aos="fade-left") Interfaz de usuario
      .col-md-6.col-lg.mb-5.mb-lg-0.d-flex
        .d-flex.align-items-center.justify-content-center.w-100.tarjeta(style="background-color: #FAE8C6")
          .p-4
            p.fw-bold.mb-0.text-center(data-aos="fade-left") Acciones que se activan cuando ocurren
    
    .d-flex.flex-wrap.mb-5
      img(src='@/assets/curso/temas/decorador-2.svg' style="max-width: 25px")
      p.mb-0.ps-2.fw-bold Funciones y controlador de eventos
    
    p.mb-5(data-aos="fade-right") Cuando ocurre un evento sobre algún objeto del programa se activa el bloque de instrucciones que contienen la función que debe entrar a operar para controlar el evento. Esta función despliega una serie de acciones que lleva a cabo el sistema para controlar el evento y responderle al usuario en la interfaz con la que él está interactuando.
      br
      br
      |Las ventajas de tener en cuenta los eventos en el desarrollo de programas radican en que:
    
    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/n-1.svg' style="max-width: 138px")
          .w-100.tarjeta(style="background-color: #E1DDFC")
            .p-4
              p.text-center El procesamiento de las funciones es mucho más rápido ya que como se han tenido en cuenta  las acciones que puede realizar el usuario al interactuar con el programa, se han desarrollado líneas de código que las activen cuando estos eventos ocurran.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/n-2.svg' style="max-width: 138px")
          .w-100.tarjeta(style="background-color: #E1DDFC")
            .p-4
              p.text-center Se mejora la experiencia del usuario ya que se tienen en cuanta todas las interacciones que este puede realizar con el programa y para cada una de ellas se planifican y ejecutan respuestas que lo ayuden a encontrar caminos o soluciones a lo que está buscando.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/n-3.svg' style="max-width: 138px")
          .w-100.tarjeta(style="background-color: #E1DDFC")
            .p-4
              p.text-center Se minimizan las líneas de código ya que es el usuario quien genera el evento y el sistema se encarga de responder.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/n-4.svg' style="max-width: 138px")
          .w-100.tarjeta(style="background-color: #E1DDFC")
            .p-4
              p.text-center La interfaz del programa es mas amigable ya que ofrece opciones como botones, menús, ventanas, casillas de verificación, entre otras y los usuarios pueden escoger cual de estos utilizar para navegar en él.
    p.mb-5(data-aos="fade-right") <b>Ejemplo</b>
      br
      br
      |En Unity se desea crear un evento en el cual el usuario presione el botón Exit y salga del juego. En el proyecto en el que se está trabajando realizar las siguientes acciones:
    
    .tarjeta.p-4.mb-5(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/bg-linea-tiempo.svg')})`}"
      style="background-size: cover"
      data-aos="fade-left"
    )
      PasosB.color-acento-botones
        .row.px-3
          .col-lg-6.mb-4.mb-lg-0
            p • En el programa Unity, dar clic en la ventana de jerarquía
              br
              |• Clic en la opción UI (Interfaz de Usuario).
              br
              |• Clic en la opción <em>Button</em>.
            a.boton.color-acento-botones(@click="imgSelect = 1; modal2 = true;")
              span Ampliar imagen
              img.ms-2(src="@/assets/curso/temas/decorador-4.svg" style="max-width: 15px")
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-19.jpg')
              figcaption(style="background-color: transparent") <em>Evento</em>
        .row.px-3
          .col-lg-6.mb-4.mb-lg-0
            p Una vez creado el botón en la ventana de jerarquía se adiciona el objeto creado dentro de la plantilla Canvas y se pueden realizar las siguientes opciones:
              br
              |• Doble clic en la ventana de jerarquía en la opción Button.
              br
              |• Clic en el botón del menú para cambiar el tamaño arrastrando los puntos de los extremos.
              br
              |• Doble clic en la ventana de jerarquía en la opción Text para cambiar el nombre del botón que este caso se va a llamar <em>Exit</em>.
            a.boton.color-acento-botones(@click="imgSelect = 2; modal2 = true;")
              span Ampliar imagen
              img.ms-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 27px")
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema2/img-20.jpg')
              figcaption(style="background-color: transparent") Botón
        .row.px-3
          .col-lg-6.mb-4.mb-lg-0
            p Ya creado el botón debe asociarse la acción que va a realizar, que en este caso es salir y para ello se crea un script o líneas de código:
              br
              |• Clic en menú Assets.
              br
              |• Clic en la opción <em>Create</em>.
              br
              |• Clic en la opción C# <em>Script</em>.
            a.boton.color-acento-botones(@click="imgSelect = 3; modal2 = true;")
              span Ampliar imagen
              img.ms-2(src="@/assets/curso/temas/decorador-4.svg" style="max-width: 15px")
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema2/img-21.jpg')
              figcaption(style="background-color: transparent") <em>Script</em>
        .row.px-3
          .col-lg-6.mb-4.mb-lg-0
            p En la parte inferior en la ventana de proyecto se crea el archivo donde vamos a escribir las líneas de código, en este caso se le colocó el nombre Salir y en la ventana del inspector se muestra unas instrucciones con la estructura básica del programa:
            a.boton.color-acento-botones(@click="imgSelect = 4; modal2 = true;")
              span Ampliar imagen
              img.ms-2(src="@/assets/curso/temas/decorador-4.svg" style="max-width: 15px")
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema2/img-22.jpg')
              figcaption(style="background-color: transparent") <em>Archivo script</em>
        .row.px-3
          .col-lg-6.mb-4.mb-lg-0
            p Al hacer doble clic en el archivo C# denominado Salir se abre la ventana del editor Visual Studio en el cual se podrán escribir las líneas de código que ejecutarán la acción de salir.  
              br
              br
              |En este caso se ha declarado una función  de tipo pública (<b><em>public</em></b>), es decir, que se puede utilizar en cualquier y por otros programas y además tiene la característica <b><em>void</em></b>, que quiere decir, no devuelve ningún tipo de valor sino que ejecuta la acción. La sentencia <b><em>Application</em></b>.<em>Quit</em> ejecuta la acción de abandonar.
            a.boton.color-acento-botones(@click="imgSelect = 5; modal2 = true;")
              span Ampliar imagen
              img.ms-2(src="@/assets/curso/temas/decorador-4.svg" style="max-width: 15px")
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema2/img-23.jpg')
              figcaption(style="background-color: transparent") <em>Editor</em>
        .row.px-3
          .col-lg-6.mb-4.mb-lg-0
            p Una vez construida la línea de código se debe anexar el evento en el inspector para que pueda ser ejecutado posteriormente. 
              br
              br
              |• En la barra <span style="color: red; font-weight: bold;">1</span> On Click () se debe asociar la función del evento.
              br
              |• Clic en <span style="color: red; font-weight: bold;">2</span> el signo + para agregar la función salir.
              br
              |• En el botón <em>Runtime Only</em> se ha agregado la función Salir <span style="color: red; font-weight: bold;">(3)</span>.
            a.boton.color-acento-botones(@click="imgSelect = 6; modal2 = true;")
              span Ampliar imagen
              img.ms-2(src="@/assets/curso/temas/decorador-4.svg" style="max-width: 15px")
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema2/img-24.jpg')
              figcaption(style="background-color: transparent") <em>Asociar</em>
        .row.px-3
          .col-lg-6.mb-4.mb-lg-0
            p Cuando la función está lista para ser utilizada se observa en modo <em>Game</em> y no en modo escena para visualizar como se verá el botón del evento en la interfaz del usuario para que pueda ser accionado por éste.
            a.boton.color-acento-botones(@click="imgSelect = 7; modal2 = true;")
              span Ampliar imagen
              img.ms-2(src="@/assets/curso/temas/decorador-4.svg" style="max-width: 15px")
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema2/img-25.jpg')
              figcaption(style="background-color: transparent") <em>Juego</em>
    Separador 

    .titulo-segundo.color-acento-contenido
      h2#t_2_5 2.5 Estructura básica de un script de Unity3D
    
    p.mb-5(data-aos="fade-right") El lenguaje de programación que se utiliza en Unity es el lenguaje C# y a las líneas de código que lo configuran se les llama Scripts, las cuales consisten en una secuencia de instrucciones que se escriben en un editor de texto que es adjuntado en Unity al hacer su instalación en el PC; este editor de escritura es el Visual Studio. 
      br
      br
      |El objeto de escribir líneas de código en Unity es para asignarle comportamientos específicos a los componentes del juego (<em>GameObjects</em>), crear eventos y desarrollar funciones que controlen acciones determinadas.
      br
      br
      |El lenguaje C# se compone de:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta-edit" data-aos="fade-left")
      .row.col-xl-11.mx-auto(titulo="Variables")
        .col-lg.order-2.order-lg-1
          p Como se mencionó antes son espacios reservados en la memoria para almacenar valores de diferentes tipos, ya se vio en los anteriores apartados su tipología (numéricos, lógicos, alfanuméricos), pero en Unity también hay tipos de datos de referencia que se aplican a los objetos como Transform y Light que se visualizan en la ventana del Inspector; donde la primera trata con aspectos de posición, rotación y tamaño del objeto y la segunda con efectos de iluminación.
          p Las variables deben ser declaradas al comienzo del bloque de las líneas de código definiendo si van a ser públicas o privadas. Una <b>variable pública</b> es aquella que puede ser utilizada por otros scripts y cambiar su valor porque es accesible para ellos ya que aparece en la ventana del Inspector y una <b>variable privada</b> es aquella que solo puede ser utilizada dentro de una misma clase (ya se verá este término a continuación) y dentro de un mismo método o función y no puede ser visualizada en el Inspector porque sus valores no son manipulables por otros scripts.
          p Cuando se codifica una variable se debe tener en cuenta aspectos de nomenclatura como que el nombre no debe empezar por un número y  no debe tener espacios.
          a.col.boton.color-acento-botones(@click="imgSelect = 8; modal2 = true;")
            span Ampliar imagen
            img.ms-2(src="@/assets/curso/temas/decorador-4.svg" style="max-width: 15px")
        .col-lg-3.order-1.order-lg-2.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/tema2/img-26.jpg" style="max-width: 261px")
          em Referencias

      .row.col-xl-11.mx-auto(titulo="Funciones")
        p.mb-5 Una función en Unity es un procedimiento que realiza acciones sobre un objeto, a la función también se le llama método y consiste en un bloque de líneas de código que hacen un llamado a la acción sobre los componentes en los que se aplica. Cuando se va a construir un <em>script</em> en Unity se activa la clase <em>Mono Behaviour</em> que es la clase base la cual llama funciones automáticas que se deben activar para iniciar el <em>script</em> como son:
          br
          br
          |<b>Awake:</b> función que se encarga de llamar a todas las variables declaradas en el <em>script</em> y que necesitan ser inicializadas con un valor. 
          br
          |<b>Start:</b>  función que es llamada para inicializar el procedimiento.
          br
          |<b>Update:</b> función que se utiliza para el movimiento de los objetos sin utilizar el método física de Unity y se repite cada vez que se necesite para actualizar el brestado de este.
          br
          |<b>FixedUpdate:</b> función que se utiliza para controlar objetos cuando dependen de la física.
        .d-flex.flex-wrap.mb-5
          .col-lg.order-2.order-lg-1
            p <b>Ejemplo:</b> en la siguiente escena en Unity se van a adicionar unas líneas de código para crear un evento sobre el plano y el cubo para lo cual se creó un archivo <em>script “TestClick”</em>  que al ser llamado desplegó en la ventana del Inspector el llamado a la clase base <em>Mono Behaviour</em> que a su vez activo las funciones <em>Start y Update</em>.
            a.col.boton.color-acento-botones(@click="imgSelect = 9; modal2 = true;")
              span Ampliar imagen
              img.ms-2(src="@/assets/curso/temas/decorador-4.svg" style="max-width: 15px")
          .col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0.ps-lg-4
            img.w-100(src="@/assets/curso/temas/tema2/img-27.jpg")
            em Funciones
        p.w-100.mb-5 Para escribir líneas de código que se refieran a funciones (métodos) se deben tener en cuenta los siguientes aspectos:
          br
          |•   Puede ser pública o privada
          br
          |•   Debe tener un identificador (nombre) 
          br
          |•   Debe Incluir parámetros 
          br
          |•   Debe retornar un tipo de dato así sea nulo
          br
          br
          |<b>Ejemplo:</b> En el editor de texto Visual Studio se ha creado un método con identificador Multiplica, el cual contiene dos parámetros de tipo entero (a y b) cuya funcionalidad es multiplicar dos números. El resultado que debe retornar el método ( c ) es de tipo entero.
        .d-flex.flex-wrap.mb-5
          .col-lg.order-2.order-lg-1
            p El método Multiplica es de tipo público es decir puede ser utilizado en otros scripts y el nombre del archivo es TestClick. cs y el programa ha llamado la clase MonoBehaviour que contiene las funciones de inicialización por defecto:
              br
              br
              |public class TestClick.cs : MonoBehaviour {
            a.col.boton.color-acento-botones(@click="imgSelect = 10; modal2 = true;")
              span Ampliar imagen
              img.ms-2(src="@/assets/curso/temas/decorador-4.svg" style="max-width: 15px")
          .col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0.ps-lg-4
            img.w-100(src="@/assets/curso/temas/tema2/img-28.jpg")
            em Método

      .row.col-xl-11.mx-auto(titulo="Clases")
        p.mb-5 Son las que agrupan los atributos y características que van a contener los objetos que se crean en Unity; dentro de ellas se encuentran las variables y los métodos (funciones) que se aplicarán para que se comporte como se ha planeado. 
          br
          br
          |El objeto se comporta de acuerdo con los atributos contenidos en la clase, lo que significa que esta (clase) actúa como un molde para los objetos que se construyan dentro de ella.
          br
          br
          |Las clases cumplen con las características de abstraccionismo, encapsulamiento, heredad y polimorfismo propias de la Programación Orientada a Objetos – POO-. Algunas de las clases más importantes que se encuentran en el motor de Unity son:
        .d-flex.flex-wrap.mb-5
          .col-lg.order-2.order-lg-1
            p Cuando se están escribiendo líneas de código y se crean  varias clases para los objetos las cuales van agrupar diferentes atributos, entonces se utiliza lo que se llama “Espacios de nombres”; para organizar clases dentro de un mismo entorno, agrupándolas para darle una mejor estructura al script y evitar confusiones cuando el motor de Unity haga la compilación de las instrucciones para ser ejecutadas.
          .col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0.ps-lg-4
            tabla.tabla-edit-2
              thead(style="border: 1px solid black")
                tr
                  th Clase de Unity
                  th Detalle de la clase
              tbody
                tr
                  td.text-start Transform
                  td.text-start Proporciona información del objeto en cuanto a su posición, rotación y tamaño.
                tr
                  td.text-start MonoBehaviour
                  td.text-start Es una clase base que contiene todas las funciones que se pueden aplicar a los objetivos o eventos que se construyan en Unity.
                tr
                  td.text-start Rigidbody /
                    |Rigidbody2D
                  td.text-start Es el motor de física de Unity que se utiliza como herramienta para mover los objetos y aplicar leyes como gravedad, fuerza, masa, aceleración y fricción.
            .w-100
              em Clases
        
        .d-flex.flex-wrap.mb-5
          .col-lg.order-2.order-lg-1
            p.mb-4 <b>Ejemplo:</b> crear un Script e identificar los espacios de nombres. 
              br
              br
              |Para crear el Script hay dos formas: 
              br
              |Assets > Create > C# Script 
              br
              |Project > Create > C# Script
              br
              br
              |Se ha creado entonces un archivo llamado <em>NewBehaviourScript.cs</em> que es el nombre por defecto, el cual puede ser cambiado por el que el usuario necesite para bridentificar las acciones que realiza.
              br
              br
              |• <b>using System.Collections:</b>  esta línea de <em>Script</em> significa que se declara una clase llamada <em>Collections</em> la cual agrupara diferentes objetos dependiendo de sus atributos y funciones. 
              br
              |• <b>using System.Collections.Generic:</b> dentro de la clase Collections hay elementos que son de un solo tipo. Esto quiere decir que cuando se recupera un elemento de esta clase no hay que definirle el tipo.
              br
              |• <b>using UnityEngine:</b> permite que el Script herede de la clase MonoBehavour todas las funciones como <em>awake, start, update, Transform, Light,</em> entre otras.
            a.col.boton.color-acento-botones(@click="imgSelect = 10; modal2 = true;")
              span Ampliar imagen
              img.ms-2(src="@/assets/curso/temas/decorador-4.svg" style="max-width: 15px")
          .col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0.ps-lg-4
            img.w-100(src="@/assets/curso/temas/tema2/img-28.jpg")
            em Estructura
    Separador 
    .titulo-segundo.color-acento-contenido
      h2#t_2_6 2.6 Control mediante interfaz de usuario (Inspector)
    
    p.mb-5(data-aos="fade-right") La interfaz de usuario es (UI) es la manera en que este interacciona con el programa; en este caso la forma en que un jugador se comunica con el videojuego interactuando con él. El motor de Unity posee un componente llamado Canvas que actúa como un contenedor o plantilla donde se pueden colocar todos los elementos u objetos  que van a hacer parte de la interfaz del usuario. Canvas quieres decir lienzo y es el espacio donde se van a colocar imágenes, botones, textos, personajes, formas, entre otros que pueden ser controlados a través de la ventana del inspector.
      br
      br
      |Para utilizar Canvas entonces en la interfaz inicial de Unity se realizan las siguientes acciones:
    
    .tarjeta.mb-5.p-4.px-md-5(style="background-color: #D8F3F9" data-aos="fade-left")
      SlyderA(tipo="b")
        .row
          .col-lg-4.mb-4.mb-lg-0
            p.mb-4 • Clic en la opción de menú GameObject
              br
              |• Clic en la opción UI
              br
              |• Clic en la opción Canvas
            a.boton.color-acento-botones(@click="imgSelect = 11; modal2 = true;")
              span Ampliar imagen
              img.ms-2(src="@/assets/curso/temas/decorador-4.svg" style="max-width: 15px")
          .col-lg-8
            figure
              img(src='@/assets/curso/temas/tema2/img-30.jpg')
              figcaption Canvas.
        .row
          .col-lg-8.mb-4.mb-lg-0
            p.mb-4 Cuando se ha añadido Canvas a la escena en la ventana del Inspector se observa cada uno de sus componentes:
              br
              br
              |<em><b>1 Rect Transform:</b></em> es un componente en el que se establece la posición y tamaño de un  elemento en la interfaz del usuario, el ancho y el alto.
              br
              br
              |<em><b>2  Canvas:</b></em> es el área bajo la cual se van a ubicar los elementos que va a contener la interfaz:
              br
              |*Opción Screen Space - Overlay indica que la plantilla de Canvas se ajustara al tamaño de la pantalla.
              br
              |*Opción Screen Space - Camera indica que la plantilla de Canvas se ajustara para encajar en el plano de la cámara.
              br
              |*Opción World Space - indica que la plantilla de Canvas tratara la imagen como un objeto plano en la escena.
              br
              br
              |<em><b>3 Canvas Scaler (Script):</b></em> tiene que ver con la densidad del pixel de los elementos que se coloquen dentro de la plantilla, esto hace que se vea con mayor o menor resolución.
              br
              br
              |<em><b>4 Graphic Raycaster (Script):</b></em> controla los elementos gráficos teniendo en cuenta los que se colocan en el fondo o delante. 
            a.boton.color-acento-botones(@click="imgSelect = 12; modal2 = true;")
              span Ampliar imagen
              img.ms-2(src="@/assets/curso/temas/decorador-4.svg" style="max-width: 15px")
          .col-lg-4
            figure
              img(src='@/assets/curso/temas/tema2/img-31.jpg')
              figcaption Componentes.

    p.mb-5(data-aos="fade-right") <b>Ejemplo</b>
      br
      br
      |Construir un botón de inicio de sesión utilizando interfaz de usuario.
    
      .tarjeta.mb-5.p-4.px-md-5(style="background-color: #D8F3F9" data-aos="fade-left")
        SlyderA(tipo="b")
          .row
            .col-lg-4.mb-4.mb-lg-0
              p.mb-4 Después que se ha llamado la plantilla Canvas se realiza:
                br
                br
                |• Clic derecho del mouse en el componente Canvas de la ventana de jerarquía
                br
                |• Clic en UI
                br
                |• Clic en Button
              a.boton.color-acento-botones(@click="imgSelect = 13; modal2 = true;")
                span Ampliar imagen
                img.ms-2(src="@/assets/curso/temas/decorador-4.svg" style="max-width: 15px")
            .col-md-8
              figure
                img(src='@/assets/curso/temas/tema2/img-32.jpg')
                figcaption Crear.
          .row
            .col-lg-4.mb-4.mb-lg-0
              p.mb-4 Una vez añadido el botón al área de la escena y dentro de Canvas, realizar:
                br
                |•   Doble clic sobre Button de la ventana de jerarquía para activar texto
                br
                |•   Escribir la palabra Inicio de sesión dentro del cajón de texto del Inspector
              a.boton.color-acento-botones(@click="imgSelect = 14; modal2 = true;")
                span Ampliar imagen
                img.ms-2(src="@/assets/curso/temas/decorador-4.svg" style="max-width: 15px")
            .col-md-8
              figure
                img(src='@/assets/curso/temas/tema2/img-33.jpg')
                figcaption El área de Canvas está listo para adicionar otros componentes si se desea.

    p(data-aos="fade-right") Para profundizar en la ventana del Inspector del Canvas y en las temáticas de programación en Unity3D se recomienda consultar los siguientes sitios web:
    ModalA(:abrir-modal.sync="modal2")
      .row.align-items-center
        img(src='@/assets/curso/temas/tema2/img-19.jpg' v-if="imgSelect == 1")
        img(src='@/assets/curso/temas/tema2/img-20.jpg' v-if="imgSelect == 2")
        img(src='@/assets/curso/temas/tema2/img-21.jpg' v-if="imgSelect == 3")
        img(src='@/assets/curso/temas/tema2/img-22.jpg' v-if="imgSelect == 4")
        img(src='@/assets/curso/temas/tema2/img-23.jpg' v-if="imgSelect == 5")
        img(src='@/assets/curso/temas/tema2/img-24.jpg' v-if="imgSelect == 6")
        img(src='@/assets/curso/temas/tema2/img-25.jpg' v-if="imgSelect == 7")
        img.mx-auto(src='@/assets/curso/temas/tema2/img-26.jpg' style="max-width: 500px" v-if="imgSelect == 8")
        img(src='@/assets/curso/temas/tema2/img-27.jpg' v-if="imgSelect == 9")
        img(src='@/assets/curso/temas/tema2/img-28.jpg' v-if="imgSelect == 10")
        img(src='@/assets/curso/temas/tema2/img-30.jpg' v-if="imgSelect == 11")
        img.mx-auto(src='@/assets/curso/temas/tema2/img-31.jpg'  style="max-width: 500px" v-if="imgSelect == 12")
        img(src='@/assets/curso/temas/tema2/img-32.jpg' v-if="imgSelect == 13")
        img(src='@/assets/curso/temas/tema2/img-33.jpg' v-if="imgSelect == 14")
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    modal1: false,
    modal2: false,
    imgSelect: 0,
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
.tabs-a
  .tabs-a__tab
    background-color: #E8E8E8
    &.tabs-a__tab__selected
      color: white !important
    &:hover
      color: white !important
.tarjeta-edit
  background-color: #F0EEFD
.tabla-edit-2
  width: 100%
  thead
    tr th
      background-color: #C9D6F9
      border-color: black
      border-right: none
      text-align: center
      &:last-child
        border-right: 1px solid black
  tbody
    tr td
      border-color: black
      border-right: none
      text-align: center
      border-top: none
      &:last-child
        border-right: 1px solid black
</style>
