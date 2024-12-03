document.querySelector(".label").addEventListener('click',()=>{
    const navBar = document.querySelector('.nav');
    navBar.style.display = "flex"
    document.querySelector(".label").style.display = "none";
})
document.querySelector(".exit").addEventListener('click',()=>{
    document.querySelector(".nav").style.display = "none";
    document.querySelector(".label").style.display = "flex";
});

//efecto de aparecer las secciones/////

const sections = document.querySelectorAll('.-section');
const options = {
    root:null,
    rootMargin: '0px',
    threshold: 0.1
};

document.querySelector(".btn__contact").addEventListener('click',()=>{
    window.location.href = "contact.html"   
    e.preventDefault()
    console.log(e.target)
}); 

document.getElementById("web__sencilla").addEventListener('click',()=>{
    window.location.href = "contact.html"
});
document.getElementById("pagina").addEventListener('click',()=>{
    window.location.href = "contact.html"
});
document.getElementById("tienda").addEventListener('click',(e)=>{

    window.location.href = "contact.html"
});