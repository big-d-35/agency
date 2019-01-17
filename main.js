const headerHomeButton = document.getElementById('header-home-button');

const webDevButton = document.getElementById('button-webdev');
const videoButton = document.getElementById('button-video');
const designButton = document.getElementById('button-design');
const whyUsButton = document.getElementById('button-whyus');
const webDevExamplesButton = document.getElementById('web-dev-examples-button');
const videoExamplesButton = document.getElementById('video-examples-button');
const designExamplesButton = document.getElementById('design-examples-button');

const mainPage = document.getElementById('main-page');
const webDevPage = document.getElementById('web-dev-page');
const videoPage = document.getElementById('video-page');
const designPage = document.getElementById('design-page');
const whyPage = document.getElementById('why-page');
const contactsPage = document.getElementById('contacts-page');
const aboutPage = document.getElementById('about-page');
const webDevExamplesPage = document.getElementById('webdev-examples-page');
const videoExamplesPage = document.getElementById('video-examples-page');
const designExamplesPage = document.getElementById('design-examples-page');

const whyPageLeftButton = document.getElementById('why-left-button');
const whyPageRightButton = document.getElementById('why-right-button');
const headerContactButton = document.getElementById('header-contact-button');
const headerAboutButton = document.getElementById('header-about-button');


//preloader
window.onload = setTimeout(function(){
  document.getElementById("preloader").style.display = "none"; 
 }, 3900);

//preloader

//кнопки Хедера
headerAboutButton.onclick = function() {
    let activeSlideNow = document.querySelector('.active');
    activeSlideNow.classList.remove('active');
    aboutPage.classList.toggle('active');
    
    
}


headerContactButton.onclick = function() {
    let activeSlideNow = document.querySelector('.active');
    activeSlideNow.classList.remove('active');
    contactsPage.classList.toggle('active');
    
    
}

headerHomeButton.onclick = function() {
    videoExamplesPage.classList.remove('active');
    aboutPage.classList.remove('active');
    contactsPage.classList.remove('active');
    webDevPage.classList.remove('active');
    videoPage.classList.remove('active');
    designPage.classList.remove('active');
    whyPage.classList.remove('active');
    webDevExamplesPage.classList.remove('active');
    mainPage.classList.add('active');
}
//кнопки Хедера

//кнопки страниц
webDevButton.onclick = function() {
    
    mainPage.classList.remove('active');
    
    webDevPage.classList.add('active');
}

videoButton.onclick = function() {
    
    mainPage.classList.remove('active');
    
    videoPage.classList.add('active');
}

designButton.onclick = function() {
    
    mainPage.classList.remove('active');
    
    designPage.classList.add('active');
}

whyUsButton.onclick = function() {
    mainPage.classList.remove('active');
    
    whyPage.classList.add('active');
}

webDevExamplesButton.onclick = function(){
    webDevPage.classList.remove('active');
    webDevExamplesPage.classList.add('active');
}

videoExamplesButton.onclick = function(){
    videoPage.classList.remove('active');
    videoExamplesPage.classList.add('active');
}

designExamplesButton.onclick = function(){
    designPage.classList.remove('active');
    designExamplesPage.classList.add('active');
}
//кнопки страниц

//slideshow

let slides = document.getElementsByClassName('why__slide');
let index = 0;

whyPageRightButton.addEventListener('click', moveRight);

function moveRight() {
  slides[index].classList.remove('why__slide-active');
  index = index + 1;
  if (index == slides.length) {
    index = 0;
  }
  slides[index].classList.add('why__slide-active');
}

whyPageLeftButton.addEventListener('click', moveLeft);

function moveLeft() {
  slides[index].classList.remove('why__slide-active');
  index = index - 1;
  if (index == -1) {
    index = slides.length - 1;
  }
  slides[index].classList.add('why__slide-active');
}
//при клике получить все слайды из слайдера, найти след слайд после active и назначить ему класс актив, у предыдущего убрать этот класс

