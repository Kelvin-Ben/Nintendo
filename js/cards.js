class Carousel {
  constructor() {
    this.CarouselContainer = document.querySelector(".card-container");
    this.cards = Array.from(this.CarouselContainer.children);
    this.leftButton = document.querySelector(".prev-button");
    this.rightButton = document.querySelector(".next-button");
    this.currentPosition = 0;
    this.cardWidth = this.cards[0].offsetWidth;

    this.leftButton.addEventListener("click", this.moveLeft.bind(this));
    this.rightButton.addEventListener("click", this.moveRight.bind(this));

    this.updateVisibility();
  }

  moveLeft() {
    if (this.currentPosition > 0) {
      this, (this.currentPosition--);
      this.updateVisibility();
    }
  }
  moveRight() {
    if (this.currentPosition < this.cards.length - 1) {
      this.currentPosition++;
      this.updateVisibility();
    }
  }
  updateVisibility() {
    const translateX = (-this.currentPosition * this.cardWidth);
    console.log(translateX);
    this.cards.forEach((card, index) => {
      // const adjustedIndex = (index - this.currentPosition + this.cards.length)
      card.style.transform = `translateX(${translateX + index}px)`;
    });

    this.leftButton.style.display =
      this.currentPosition === 0 ? "none" : "block";
    this.rightButton.style.display =
      this.currentPosition === this.cards.length - 2 ? "none" : "block";
  }
}
const myCarousel = new Carousel();
