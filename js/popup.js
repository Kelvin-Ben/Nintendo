const store = document.querySelector('.store');
const popup = document.querySelector('.popup');
const popupContent = document.querySelector('.popup__content')
const dropArrow = document.querySelector('.store-icon');
const close = document.querySelector('.close-icon')


// create events
store.addEventListener('click', e => {
  popup.style.display = 'flex';
  document.body.classList.add('popup-open')
})

close.addEventListener('click', e => {
  popup.style.display = 'none';
  document.body.classList.remove('popup-open')
})

popup.addEventListener('click', e => {
  if(!popupContent.contains(e.target) && popup.style.display === 'flex') {
    popup.style.display = 'none';
    document.body.classList.remove('popup-open');
  }
})