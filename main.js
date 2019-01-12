const headerHomeButton = document.getElementById('header-home-button');

const webDevButton = document.getElementById('button-webdev');
const videoButton = document.getElementById('button-video');
const designButton = document.getElementById('button-design');

const mainPage = document.getElementById('main-page');
const webDevPage = document.getElementById('web-dev-page');
const videoPage = document.getElementById('video-page');
const designPage = document.getElementById('design-page');
const whyPage = document.getElementById('why-page');

//preloader
window.onload = setTimeout(function(){
  document.getElementById("preloader").style.display = "none"; 
 }, 3900);

//preloader

headerHomeButton.onclick = function() {
    
    webDevPage.classList.remove('active');
    videoPage.classList.remove('active');
    designPage.classList.remove('active');
    
    mainPage.classList.add('active');
}


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