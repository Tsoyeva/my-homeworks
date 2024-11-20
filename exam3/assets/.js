const burgerBtn=document.querySelector('.header__burger');
const burger=document.querySelector('.burger');
const nav=document.querySelector('.header__nav');
const navLinks = nav.querySelectorAll('.nav__link');
const header=document.querySelector('.header');
const playIcon=document.querySelector('.frame__play-img');
const video=document.querySelector('.frame__video');
const changeThemeBtn=document.querySelector('.change-theme-btn');
const body=document.querySelector('.body');


navLinks.forEach( link=>{
  link.addEventListener('click', ()=>{
    if (burger.classList.contains('active')) { 
      nav.classList.toggle('hide');
      header.style.height = '80px'; 
      burger.classList.remove('active');}
  });
});

burgerBtn.addEventListener('click', ()=>{
  burger.classList.toggle('active');
  if (burger.classList.contains('active')){ 
    nav.classList.remove('hide'); 
    header.style.height='100vh';
  }
  else {  
    nav.classList.add('hide');
    header.style.height = '80px'; }
});

if (window.innerWidth <= '768') {
  nav.classList.add('hide');
}
window.addEventListener('resize', () => {
  if (window.innerWidth > '768') { 
    nav.classList.remove('hide'); 
  }
  else {
    nav.classList.add('hide'); 
    burger.classList.remove('active'); 
  }
  header.style.height = '80px'; 
});

window.addEventListener('scroll', () => {
  let st = document.documentElement.scrollTop;
  if (st > 30) {
    header.style.background = 'linear-gradient(270deg, rgba(228, 228, 228, 1) 0%, rgba(228, 228, 228, 0.2) 47.19%), rgba(228, 228, 228, 0.5)'; header.style.top='0';
  } else {
    header.style.background = 'linear-gradient(270deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.244636) 24.1%, rgba(255, 255, 255, 0) 47.19%), rgba(255, 255, 255, 0.02)';
    header.style.top = '30px';
  }
});

video.addEventListener('click', ()=>{
  if (video.classList.contains('play')){
    return;
  }
  playIcon.style.display='none';
  document.querySelector('.frame__img').style.display = 'none';
  video.classList.add('play');
  video.insertAdjacentHTML('afterbegin', 
  '<iframe class="video__box" src="https://www.youtube.com/embed/vnbN9V_2Guk?autoplay=1" title="YouTube video player" frameborder = "0" allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe > ');
});

changeThemeBtn.addEventListener('click', ()=>{
  changeThemeBtn.classList.toggle('darkTheme');
  body.classList.toggle('dark');
});