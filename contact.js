//cerrar formulario------------------------------------//
document.getElementById("cancel").addEventListener('click',(e)=>{
    e.preventDefault()
    window.location.href = "index.html"
})
document.querySelector(".Whatsapp").addEventListener('click',(e)=>{
    const num = "04242079712"
    const Whatsapp = `https://wa.me/${num};`
    window.open(Whatsapp,"__blank")
})