// Ejemplo de data de las cartas
const cardsData = [
    {
        frontTitle: "EXPERIENCIA LABORAL",
        frontContent:  [],
        backTitle: "",
        backContent: ["Banco de occidente", "Mexicaps", "Freelance"]
      },
    {
        frontTitle: "Banco de Occidente - 2021-2022",
        frontContent:  ["Cajero", "Auxiliar Operativo", "Asesor Comercial"],
        backTitle: "Logros",
        backContent: "Atención al cliente, supervisión, ventas, etc."
      },
    {
      frontTitle: "Proyecto Freelance",
      frontContent: "Marketing digital y automatización",
      backTitle: "Detalles",
      backContent: "Diseño de campañas, chatbots, etc."
    },
    {
      frontTitle: "Formación",
      frontContent: "Universidad del Valle",
      backTitle: "Estudios",
      backContent: "Gestor de Emprendimiento e Innovación, etc."
    },
    // ... Agrega más cartas según necesites
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
        li.textContent = item;
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
      alert("¡No hay más cartas!");
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
      alert("¡Esta es la primera carta!");
    }
  }
  