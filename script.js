const toggleColors = document.getElementById('toggle-colors');
const rootStyles = document.documentElement.style;

toggleColors.addEventListener("click",(e) => {
    rootStyles.setProperty('--primary-color',e.target.dataset.color)
});





/*---- Toggle Style Switcher-----*/

const styleSwitcherToggle = document.querySelector('.style-switcher-toggler');
styleSwitcherToggle.addEventListener('click', ()=>{
    document.querySelector('.style-switcher').classList.toggle('open');
});


/// hide style switcher on scroll

window.addEventListener('scroll',()=>{
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
});



/*---------- Theme Ligth and Dark Mode-----*/

const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click",()=>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");

    document.body.classList.toggle("dark");

})


window.addEventListener("load", ()=>{
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }
});


/*-----Typed Animation----*/

let typed = new Typed(".typing",{
    strings:["","Diseñador Web","Desarrollador Web","Diseñador Grafico"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
});