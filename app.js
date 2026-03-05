document.addEventListener('DOMContentLoaded',function(){

const homeScreen=document.getElementById('home-screen')
const aereaScreen=document.getElementById('aerea-screen')
const poleScreen=document.getElementById('pole-screen')

const disciplineButtons=document.querySelectorAll('.discipline-btn')
const backButtons=document.querySelectorAll('.back-btn')


function showScreen(screenId){

homeScreen.classList.remove('active')
aereaScreen.classList.remove('active')
poleScreen.classList.remove('active')

document.getElementById(screenId).classList.add('active')

window.scrollTo({
top:0,
behavior:'smooth'
})

}



disciplineButtons.forEach(button=>{

button.addEventListener('click',function(){

const discipline=this.getAttribute('data-discipline')

if(discipline==='aerea'){
showScreen('aerea-screen')
}

if(discipline==='pole'){
showScreen('pole-screen')
}

})

})


backButtons.forEach(button=>{

button.addEventListener('click',function(){

showScreen('home-screen')

})

})


document.addEventListener('keydown',function(e){

if(e.key==="Escape"){

if(aereaScreen.classList.contains('active') || poleScreen.classList.contains('active')){

showScreen('home-screen')

}

}

})

})



/* ABRIR IMAGEN */

function abrirImagen(img){

const visor=document.getElementById("visor")
const imagen=document.getElementById("imagen-grande")

imagen.src=img.src

visor.style.display="flex"

}



/* CERRAR IMAGEN */

function cerrarImagen(){

document.getElementById("visor").style.display="none"

}



/* PAUSAR OTROS VIDEOS */

const videos=document.querySelectorAll("video")

videos.forEach(video=>{

video.addEventListener("play",()=>{

videos.forEach(otherVideo=>{

if(otherVideo!==video){

otherVideo.pause()

}

})

})

})