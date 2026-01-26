const themePicker = () => {
  // Hämta element från DOM
  const html = document.documentElement
  const buttonSystem = document.querySelector("#button-theme-system")
  const buttonLight = document.querySelector("#button-theme-light")
  const buttonDark = document.querySelector("#button-theme-dark")

  // sätta temat baserat på localstorage eller prefered color scheme.
  const checkTheme = () => {
    html.classList.toggle(
      "dark",
      localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches),
    )

    // sätta klass active på den knapp som är aktiverad
    const currentActive = document.querySelector(".theme-active")
    const currentTheme = localStorage.getItem("theme")

    // ta bort eventuella class active på knappar
    if (currentActive) {
      currentActive.classList.remove("theme-active")
    }

    // sätt class active på aktuell knapp
    if (!currentTheme) {
      buttonSystem.classList.add("theme-active")
    } else if (currentTheme == "dark") {
      buttonDark.classList.add("theme-active")
    } else if (currentTheme == "light") {
      buttonLight.classList.add("theme-active")
    }
  }

  checkTheme()

  //   Sätt theme
  const setTheme = (event) => {
    const theme = event.currentTarget.dataset.theme

    // Om det inte finns något tema avbryts funktionen
    if (!theme) return

    localStorage.setItem("theme", theme)

    checkTheme()
  }

  // Återställa till system default
  const restoreTheme = () => {
    localStorage.removeItem("theme")
    checkTheme()
  }

  //   Eventlyssnare
  buttonSystem.addEventListener("click", restoreTheme)
  buttonLight.addEventListener("click", setTheme)
  buttonDark.addEventListener("click", setTheme)
}

themePicker()
