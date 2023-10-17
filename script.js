function toggleMode(){
    const html = document.documentElement
    html.classList.toggle("light")

    //if(html.classList.contains('light')){
      //  html.classList.remove('light')
    //}else{
      //  html.classList.add('light')
   // }
//  html.classList.toogle('light') --funciona p/ mesma coisa

// imagem ------
    const img= document.querySelector("#profile img")

    if(html.classList.contains('light')) {
        img.setAttribute('src','avatar.png')
    }else{
        img.setAttribute('src','avatar.png')
    }
}