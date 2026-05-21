

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


console.log("js connect");
