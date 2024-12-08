window.onload = function(){
    const url = new URLSearchParams(window.location.search);
    const servic = url.get('servic');
    console.log(servic)
    if(servic){
        const servicCont = document.getElementById('servic__container')
        servicCont.classList.remove("escondido")
        document.getElementById('servic').value = servic;
    }else{
        const url = new URLSearchParams(window.location.search);
        const plantilla = url.get('plantilla');
        console.log(plantilla)
        if(plantilla){
            const contPlantilla = document.getElementById('plantilla__container');
            contPlantilla.classList.remove("escondido")
            document.getElementById('namePlantilla').value = plantilla;
        }}
}




document.getElementById("cancel").addEventListener('click',(e)=>{
    e.preventDefault()
    window.location.href = "index.html"
    });

document.querySelector(".Whatsapp").addEventListener('click',(e)=>{
    e.preventDefault()
    const num = "+58 424-2079712"
    const Whatsapp = `https://wa.me/${num};`
    window.open(Whatsapp,"__blank")
});


