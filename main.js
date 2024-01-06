function flipCard(card,img) {
    card.classList.toggle("flipped");
    if (card.childNodes[1].getAttribute("src") === "./assets/couverture.webp") {
      card.childNodes[1].setAttribute("src", img); 
    } else {
      card.childNodes[1].setAttribute("src", "./assets/couverture.webp");
    }
  }