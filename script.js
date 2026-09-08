function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // if (html.classList.contains("light")) {
  // html.classList.remove("light")
  //  } else {
  //  html.classList.add("light")
  //  }

  //pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./Assets/assets/bakushin-light.png")

    img.setAttribute("alt", "imagem de Sakura Bakushin O sorridente")
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./Assets/assets/bakushin.png")
    img.setAttribute(
      "alt",
      "Foto de Sakura Bakushin O feliz ao gritar em um megafone com o fundo de seu colégio.",
    )
  }
}
