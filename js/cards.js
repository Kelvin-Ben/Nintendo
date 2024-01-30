// const nextCard = document.querySelector('.next-button');
// const prevCard = document.querySelector('.prev-button');
class Carousel {
  constructor() {
    this.CarouselContainer = document.querySelector(".games-container");
    this.card = document.querySelector(".card");
    this.leftButton = document.querySelector(".prev-button");
    this.rightButton = document.querySelector(".next-button");
    this.cardWidth = this.card[0].offsetWidth;
    this.currentPosition = 0;
  }
}
