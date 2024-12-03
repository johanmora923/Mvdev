//cerrar formulario------------------------------------//
document.getElementById("cancel").addEventListener('click',(e)=>{
    e.preventDefault()
    window.location.href = "index.html"
})
document.querySelector(".Whatsapp").addEventListener('click',(e)=>{
    e.preventDefault()
    const num = "+58 424-2079712"
    const Whatsapp = `https://wa.me/${num};`
    window.open(Whatsapp,"__blank")
})