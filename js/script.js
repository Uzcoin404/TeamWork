// Loader
const loader = document.querySelector('.loader');
window.addEventListener('load', function(){

    loader.style.display = 'none';
});
const section = document.querySelectorAll('section');
let pnLink = document.querySelectorAll('.panel__link')
let indicator = document.querySelector('.indicator')
for (let i = 0; i < section.length; i++) {
    section.forEach(sect => {
        pnLink[i].addEventListener('click', function(){
            indicator.innerHTML = pnLink[i].innerHTML
            sect.classList.remove('active');
            section[i].classList.add('active');
        });
    });
}
$('.panel__link').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
});
// Scroll animation
AOS.init();

const menuBtn = document.querySelector('.menu-btn');
const panel = document.querySelector('.panel');
const disMenu = document.querySelectorAll('.disMenu');

menuBtn.addEventListener('click', function(){
    panel.classList.add('active');
    menuBtn.style.display = 'none'
});
if (screen.width <= 650) {
    disMenu.forEach(dMenu => {
        dMenu.addEventListener('click', function(){
            menuBtn.style.display = 'block'
            panel.classList.remove('active');
        })
    });
    panel.addEventListener('click', function(event){
        menuBtn.style.display = 'block'
        if (event.currentTarget == event.target) {
            panel.classList.remove('active');
        }
    })
}

// Day night mode

$('.sun').click(function(){
    $('main').removeClass('night')
    $('main').addClass('day')
    $('.moon').removeClass('active')
    $(this).addClass('active')
});
$('.moon').click(function(){  
    $('main').removeClass('day')
    $('main').addClass('night')
    $('.sun').removeClass('active')
    $(this).addClass('active')
});
// Accordion
const accordion = document.querySelectorAll('.accordion');
accordion.forEach(accor => {
    accor.addEventListener('click', function(){
        this.classList.toggle('active');
        var accordionPanel = this.nextElementSibling
        if (accordionPanel.style.maxHeight) {
            accordionPanel.style.maxHeight = null;
        }
        else{
            accordionPanel.style.maxHeight = accordionPanel.scrollHeight + 'px';       
        }
    });
});
const sendBtn = document.querySelector('.rateus__btn');
const editBtn = document.querySelector('.rateus__post__exit');
const post = document.querySelector('.rateus__post');
const starWidget = document.querySelector('.star_widget');
const learnMoreBtn = document.querySelector('.header__btn__blog');
sendBtn.addEventListener('click', function(){
    starWidget.style.display = 'none';
    post.style.display = 'block';
})
editBtn.addEventListener('click', function(){
    starWidget.style.display = 'block';
    post.style.display = 'none';
})