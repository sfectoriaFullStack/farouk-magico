function flipCard(card) {
    card.classList.toggle("flipped");
    if (card.childNodes[1].getAttribute("src") === "./assets/couverture.webp") {
      card.childNodes[1].setAttribute("src", "./assets/dame.png"); 
    } else {
      card.childNodes[1].setAttribute("src", "./assets/couverture.webp");
    }
  }