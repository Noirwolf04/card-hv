// Ejemplo de data de las cartas
const cardsData = [
    {
        frontTitle: "SOBRE MI",
        frontContent:  [],
        backTitle: "",
        backContent: "Soy Nicolas Ruiz, apasionado por la inteligencia artificial y la innovación. Me especializo en la aplicación de IA para potenciar la creatividad, optimizar procesos y diseñando experiencias interactivas que fomentan el aprendizaje y la imaginación."
      },
      {
        frontTitle: "FORMACION ACADEMICA",
        frontContent:  [],
        backTitle: "",
        backContent: ["Gestor de Emprendimiento e Innovación - Universidad del Valle (2023 - 2027)","Desarrollo de Software - Universidad del Valle (2022 - 2023)","Técnico en Asesoría Comercial y Operaciones Financieras - SENA (2021 - 2022)"]
      },
      {
        frontTitle: "FORMACION COMPLEMENTARIA",
        frontContent:  [],
        backTitle: "",
        backContent: ["Data Science - Oracle (2025-2026)","IBM AI Developer - IBM (2024-2025)","Cómo resolver problemas y tomar decisiones con eficacia - University of California, Irvine(2024)","Análisis y Visualización de Datos Avanzada - Talento Tech Mintic (2024)"]
      },
    {
        frontTitle: "EXPERIENCIA LABORAL",
        frontContent:  [],
        backTitle: "",
        backContent: ["Banco de occidente", "Mexicaps", "Freelance"]
      },
    {
        frontTitle: "IT Project Manager - Mexicaps (Nov 2024 - Feb 2025)",
        frontContent: " ",
        backTitle: "Labores y logros",
        backContent: ["Implementación de un agente AI omnicanal de atencion al cliente", "Automatización de procesos operativos", "Capacitacion en uso de herramientas de inteligencia artifical para procesos creativos y operativos","Estos proyectos permitieron a la empresa aumentar su productividad logrando atender 100% mas clientes mientras se liberan horas de trabajo, y mejorar sus procesos creativos y estrategias de marketing, aumentando el engagement y porcentaje de conversion"]
      },
    {
      frontTitle: "Consultor de Marketing Digital - Freelance (Feb 2023 - Oct 2024)",
      frontContent: "",
      backTitle: "Labores y logros",
      backContent: ["Diseño de campañas de Meta Ads efectivas", "Creacion de embudos de venta", "Optimización de campañas de Meta Ads", "Estas estrategias permitieron a los clientes aumentar la visibilidad de sus redes sociales un 500%, triplicar su facturacion y construir una comunidad solida y base de datos calificada"]
    },
    {

        frontTitle: "Banco de Occidente - (Sep 2021-  Nov 2022)",
        frontContent:  ["Cajero", "Auxiliar Operativo", "Asesor Comercial"],
        backTitle: "Labores y logros",
        backContent: ["Atención al cliente", "supervisión de operaciones", "ventas consultivas", "Operaciones de moneda local y extranjera", "Contabilidades", "Capacitacion","En el desarrollo de mis labores logre aumentar el indicar de satisfacción del cliente en un promedio de 40%, mejorar la calidad de los procesos operativos mediante la implementacion del proyecto de digitalizacion de procesos y traslado de operaciones a la nube"]
      },
      {

        frontTitle: "Soft Skills",
        frontContent: [ "Pensamiento estratégico", "Escucha activa","Adaptabilidad", "Gestion de estes","Pensamiento critico", "Trabajo en equipo","Gestion del cambio"],
        backTitle: "Hard Skills",
        backContent: ["Inteligencia Artificial aplicada", "Automatización de procesos", "Manipulacion de datos","Razonamiento analitico", "Diseño de experienciasde usuario", "Marketing Digital"],
      },
      {

        frontTitle: "Tecnologias",
        frontContent: "",
        backTitle: "",
        backContent: ["LLMs (Gpt, Claude, Gemini, Foocus,IBM Watson...", "Python", "Html", "Css", "Javascript", "Figma"],
      },
      {

        frontTitle: "Tipo Personalidad",
        frontContent: "INTJ-T",
        backTitle: "Arquitecto",
        backContent: ["Introvertido – 60%" , "Intuitivo – 93%" , "Pensamiento – 81%" , "Juzgador – 82%", "Cauteloso – 51%"],
      },
      {

        frontTitle: "Gracias por leer mi informacion",
        frontContent: "Si llegaste hasta aquí, te agradezco por tu tiempo. Asumo que mi perfil te interesó y crees que podria encajar en la vacante, así que en la tarjeta siguiente te dejo información mi informacion de contacto y mi linkedin si quiere saber mas de mi.",
        backTitle: "Contáctame",
        backContent: ["Email: nicolas.bolanos@correounivalle.edu.co", "Linkedin: https://www.linkedin.com/in/nicolas-ruiz-953323302/", "Teléfono: 302 868 2222"],
      },
  ];
  
  // Índice de la carta actual
  let currentCardIndex = 0;
  // Para saber si estamos viendo el frente o el dorso
  let isFrontVisible = true;
  
  // Referencias al DOM
  const frontTitle = document.getElementById("front-title");
  const frontContent = document.getElementById("front-content");
  const backTitle = document.getElementById("back-title");
  const backContent = document.getElementById("back-content");
  
  const cardElement = document.getElementById("card");
  
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  
  // Cargar la primera carta
  updateCardContent();
  
  /* Función para actualizar el contenido de la carta
  function updateCardContent() {
    const cardInfo = cardsData[currentCardIndex];
    frontTitle.textContent = cardInfo.frontTitle;
    
  // Manejar el contenido como lista si es un array
  if (Array.isArray(cardInfo.frontContent)) {
    frontContent.innerHTML = ''; // Limpiar contenido
    const ul = document.createElement('ul');
    cardInfo.frontContent.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      ul.appendChild(li);
    });
    frontContent.appendChild(ul);
  } else {
    frontContent.textContent = cardInfo.frontContent;
  }
  
  backTitle.textContent = cardInfo.backTitle;
  backContent.textContent = cardInfo.backContent;
}
*/
// Función para actualizar el contenido de la carta
function updateCardContent() {
    const cardInfo = cardsData[currentCardIndex];
    
    // Actualizar título frontal
    frontTitle.textContent = cardInfo.frontTitle;
    
    // Actualizar contenido frontal
    renderContent(frontContent, cardInfo.frontContent);
    
    // Actualizar título trasero
    if (cardInfo.backTitle) {
      backTitle.textContent = cardInfo.backTitle;
      backTitle.style.display = "block";
    } else {
      backTitle.style.display = "none";
    }
    
    // Actualizar contenido trasero
    renderContent(backContent, cardInfo.backContent);
  }
  
  // Función para renderizar contenido (ya sea como lista o texto normal)
  function renderContent(container, content) {
    // Si no hay contenido, ocultar el contenedor
    if (!content) {
      container.style.display = "none";
      return;
    }
    
    container.style.display = "block";
    container.innerHTML = '';
    
    // Si el contenido es un array, renderizar como lista
    if (Array.isArray(content)) {
      const ul = document.createElement('ul');
      content.forEach(item => {
        const li = document.createElement('li');
        li.textContent = "• " + item;
        ul.appendChild(li);
      });
      container.appendChild(ul);
    } else {
      // Si es texto simple, mostrarlo así
      container.textContent = content;
    }
  }
  
  // Manejo de botones
  nextBtn.addEventListener("click", () => {
    if (isFrontVisible) {
      // Si estamos viendo el frente, al dar clic en "Siguiente" giramos la carta
      flipCard();
    } else {
      // Si estamos viendo el dorso, pasamos a la siguiente carta
      goToNextCard();
    }
  });
  
  prevBtn.addEventListener("click", () => {
    if (!isFrontVisible) {
      // Si estamos viendo el dorso, giramos la carta al frente
      flipCard();
    } else {
      // Si estamos en el frente, vamos a la carta anterior
      goToPrevCard();
    }
  });
  
  // Función para voltear la carta
  function flipCard() {
    cardElement.classList.toggle("is-flipped");
    isFrontVisible = !isFrontVisible;
  }
  
  // Ir a la siguiente carta
  function goToNextCard() {
    if (currentCardIndex < cardsData.length - 1) {
      currentCardIndex++;
      updateCardContent();
      // Asegúrate de mostrar el frente
      if (!isFrontVisible) {
        flipCard();
      }
    } else {
      alert("¡Abajo tienes mi informacion de contacto, no la pierdas!");
    }
  }
  
  // Ir a la carta anterior
  function goToPrevCard() {
    if (currentCardIndex > 0) {
      currentCardIndex--;
      updateCardContent();
      // Asegúrate de mostrar el frente
      if (!isFrontVisible) {
        flipCard();
      }
    } else {
      alert("¡Click en el boton **siguiente** para saber mas de mi!");
    }
  }
  