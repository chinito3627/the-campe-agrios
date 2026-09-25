// Filtro interactivo de productos
function filterCategory(category) {
  const tabs = document.querySelectorAll(".tab-btn");
  tabs.forEach(tab => tab.classList.remove("active"));
  
  if (event && event.target) {
    event.target.classList.add("active");
  }

  const cards = document.querySelectorAll(".product-card");
  cards.forEach(card => {
    const cardCat = card.getAttribute("data-cat");
    if (category === "todos" || cardCat === category || cardCat === "todos") {
      card.style.display = "flex";
      card.style.opacity = "0";
      setTimeout(() => {
        card.style.transition = "opacity 0.3s ease";
        card.style.opacity = "1";
      }, 50);
    } else {
      card.style.display = "none";
    }
  });
}

// Navegación suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});