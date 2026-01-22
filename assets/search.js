const searchModal = () => {
  // Hämta element från DOM
  const searchDialog = document.querySelector("#search-modal")
  const searchButton = document.querySelector("#search-button")
  const searchButtonResp = document.querySelector("#search-button-resp")
  const closeButton = document.querySelector("#search-close")

  //   Funktion för att hantera tangentbordstryckningar
  const handleKeypress = (event) => {
    // Om man trycker på esc. Esc har keycode 27
    if (event.keyCode === 27) {
      event.preventDefault()
      closeSearchModal()
    }

    if (
      (event.ctrlKey && event.key == "k") ||
      (event.metaKey && event.key == "k")
    ) {
      openSearchModal()
    }
  }

  // Funktion öppna modul
  const openSearchModal = () => {
    searchDialog.showModal()
  }

  // Funktion stänga modul
  const closeSearchModal = () => {
    searchDialog.close()
  }

  // Eventlyssnare
  searchButton.addEventListener("click", openSearchModal)
  searchButtonResp.addEventListener("click", openSearchModal)
  closeButton.addEventListener("click", closeSearchModal)

  document.addEventListener("keydown", handleKeypress)
}

searchModal()
