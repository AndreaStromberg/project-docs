const responsiveMenu = () => {
  // Hämta element från DOM
  const menu = document.querySelector("#responsive-menu")
  const menuButton = document.querySelector("#menu-button")
  const menuClose = document.querySelector("#menu-close")

  // Funktion för att toggla menyn
  const toggleMenu = () => {
    menu.classList.toggle("hidden")
  }

  menuButton.addEventListener("click", toggleMenu)
  menuClose.addEventListener("click", toggleMenu)
}

responsiveMenu()
