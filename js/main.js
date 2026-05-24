

/*darkmode*/
let btn = document.querySelector("#btn");
/*verifie si le darkmode etait deja active*/
if(localStorage.getItem("theme") ==="dark"){
    document.body.classList.add("dark-mode");
}
/*bouton*/
btn.addEventListener("click" , () =>{
    document.body.classList.toggle("dark-mode");
    /*sauvegarde le theme*/
    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem("theme" , "dark");
    }
    else{
        localStorage.setItem("theme" , "light")
    }
});


/*navbar scroll*/
window.addEventListener("scroll" , () => {
    const navbar = document.querySelector(".navbar");
    if(window.scrollY > 50){
        navbar.classList.add("navbar-scroll");
    }
    else{
        navbar.classList.remove("navbar-scroll");
    }
});
 
/*btn retour */
const topBtn = document.getElementById("topBtn");
window.addEventListener("scroll" , () =>{
    if(window.scrollY > 100){
        topBtn.style.display = "block";
    }
    else{
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click" , () => {
    window.scrollTo({
        top:0,
        behavior: "smooth"
    });
});



/* sélection des compteurs */
const counters = document.querySelectorAll(".counter");
const observerCounter = new IntersectionObserver((entries) => {  /*intersectionObserver permet de detecter quand un element apparait a l'ecran*/
    /*parcourir les elements*/
 entries.forEach((entry) => {
if(entry.isIntersecting){
const counter = entry.target;
const target = +counter.getAttribute("data-target");/*data-target contient le nbre final a atteindre*/ 
 let current = 0;
 const increment = target / 100;
const updateCounter = () => { /*fonction qui augmente progressivement le nbre*/
current += increment;
if(current < target){
 counter.innerText = Math.ceil(current);/* math.ceil (current) empeche le compteur de recommencer l'animation*/
setTimeout(updateCounter, 20); /*setTimeout(updateCounter,20) repete l'augmantation toutes les 20milliseconde*/
 }
 else{
counter.innerText = target;
 }
};
 updateCounter();
 observerCounter.unobserve(counter);/*unobserve(counter) empeche le compteur de recommencer l'animation*/
 }
 });

});
counters.forEach((counter) => {
 observerCounter.observe(counter);
});



/*fade in*/
const hiddenElements = document.querySelectorAll(".hidden");
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if(entry.isIntersecting){ /*verifie si l'element apparait a l'ecran*/
            entry.target.classList.add("show");/*ajoute la classe show pour declencher l'animation css*/
        }
    });
});
/*pour chaque elemen ".hidden"*/
/*on demande a l'observer de le surveiler*/
hiddenElements.forEach((el) =>observer.observe(el));