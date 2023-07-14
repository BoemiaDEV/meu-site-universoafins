function menuShow() {
   let menuMobile = document.querySelector(".mobile-menu");
   if (menuMobile.classList.contains("open")) {
      menuMobile.classList.remove("open");
   } else {
   menuMobile.classList.add("open");
   }
}



function resizeIframeWidth(e) {
 // Define a largura do iframe de acordo com o seu conteúdo
 if (e.Document && e.Document.body.scrollWidth) // sintaxe ie5+
    e.width = e.contentWindow.document.body.scrollWidth;
 else if (e.contentDocument && e.contentDocument.body.scrollWidth) // sintaxe netscape
    e.width = e.contentDocument.body.scrollWidth;
 else if (e.Document && e.Document.body.offsetWidth) // sintaxe ie4+
    e.width = e.contentWindow.document.body.offsetWidth;
 else if (e.contentDocument && e.contentDocument.body.offsetWidth) // sintaxe netscape
    e.width = e.contentDocument.body.offsetWidth;
}