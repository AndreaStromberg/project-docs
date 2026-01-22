const responsiveSidebar = () => {
  // Hämta element från DOM
  const sidebar = document.querySelector("#sidebar")
  const sidebarButton = document.querySelector("#sidebar-button")
  const sidebarClose = document.querySelector("#sidebar-close")
  const sidebarOverlay = document.querySelector("#sidebar-overlay")

  // Funktion för att toggla sidebar
  const toggleSidebar = () => {
    sidebar.classList.toggle("hidden")
    sidebarOverlay.classList.toggle("hidden")
    document.body.classList.toggle("h-dvh")
    document.body.classList.toggle("overflow-hidden")
  }

  sidebarButton.addEventListener("click", toggleSidebar)
  sidebarClose.addEventListener("click", toggleSidebar)
  sidebarOverlay.addEventListener("click", toggleSidebar)
}

responsiveSidebar()
