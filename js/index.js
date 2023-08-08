// Přidání události pro načtení dokumentu
document.addEventListener('DOMContentLoaded', function () {
  // Vyberte všechny odkazy s kotvou, které mají atribut href začínající "#"
  const anchorLinks = document.querySelectorAll("a[href^='#']");

  // Funkce pro plynulé scrollování na danou kotvu
  function scrollToAnchor(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth', // Plynulá animace scrollování
      });
    }
  }

  // Přidání události kliknutí na každý odkaz s kotvou
  anchorLinks.forEach(function (link) {
    link.addEventListener('click', scrollToAnchor);
  });
});
