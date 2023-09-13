// Declarar variables globales
const d = document
let imagenes = [
    {
        "nombre": "Naruto",
        "url": "imagenes/naruto.png"
    },
    {
        "nombre": "Sasuke",
        "url": "imagenes/sasuke.png"
    },
    {
        "nombre": "Boruto",
        "url": "imagenes/boruto3.png"
    },
    {
        "nombre": "Goku",
        "url": "imagenes/goku.png"
    },
    {
        "nombre": "Vegeta",
        "url": "imagenes/vegeta.png"
    },
    {
        "nombre": "Bills",
        "url": "imagenes/bills.png"
    },



    {
        "nombre": "Naruto",
        "url": "imagenes/naruto.png"
    },
    {
        "nombre": "Sasuke",
        "url": "imagenes/sasuke.png"
    },
    {
        "nombre": "Boruto",
        "url": "imagenes/boruto3.png"
    },
    {
        "nombre": "Goku",
        "url": "imagenes/goku.png"
    },
    {
        "nombre": "Vegeta",
        "url": "imagenes/vegeta.png"
    },
    {
        "nombre": "Bills",
        "url": "imagenes/bills.png"
    }
];

let tablero = d.querySelector(".tablero");
let nombreImg = [];
let posImg = [];
let aciertos = 0;
let intentos = 0;
let tiempo = 60;
let mostrarAciertos = d.querySelector(".aciertos");
let mostrarIntentos = d.querySelector(".intentos");
let mostrarTiempo = d.querySelector(".tiempos");
mostrarTiempo.textContent = tiempo;
let btnIniciar = d.querySelector(".boton-iniciar");

//Iniciar Juego
btnIniciar.addEventListener("click", function(){

    let tiempoTrancurrido = setInterval(function(){
        tiempo--;
        mostrarTiempo.textContent = tiempo;
        if (tiempo==10){
            //Limpiar Intervalo (tiempotrancurrido);
            mostrarTiempo.setAttribute("style", "color:red; font-size:40px");
        }else if(tiempo == 0){
            clearInterval(tiempoTrancurrido);
            alert("Perdiste : (No adivinantes todas las imagenes");
            location.reload();
        }
    },1000 )

})


//Agregar imagenes al tablero
function agregarImagenes(){
    for (let x = 0; x < imagenes.length; x++){
        let div = d.createElement("div");
        let img = d.createElement("img");
        div.setAttribute("class", "col-3");
        img.setAttribute("src","imagenes/ocultar.png");
        img.setAttribute("class", "img-fluid mb-3 altoImg");
        img.setAttribute("id", x);
        img.addEventListener("click", mostrarImagenes);
        div.appendChild(img);
        tablero.appendChild(div);
    }
}
agregarImagenes();

//Evento Mostrar imagenes
function mostrarImagenes(){
    //Guardar Id de la imagen
    let imgID = this.getAttribute("id");
    // alert("pos Imagen: "+imgID)
    this.setAttribute("src", imagenes[imgID].url);
    nombreImg.push ( imagenes[imgID].nombre );
    posImg.push(imgID);
    // alert(nombreImg[0]+ "" +posImg[0]);
    //Ejecutar la funcion comparar imagenes
    if (nombreImg.length == 2 ) {
       setTimeout(compararImg, 300);
    }

}

//Funcion para comparar las imagenes
function compararImg(){
    let todasImg = d.querySelectorAll(".tablero .col-3 img")
    //Comparamos
    if (nombreImg[0] == nombreImg[1]) {
        if (posImg [0] != posImg[1]){


            todasImg[posImg[0]].setAttribute("src", './imagenes/acertar.jpg')
            todasImg[posImg[1]].setAttribute("src", './imagenes/acertar.jpg')

            todasImg[posImg[0]].removeEventListener('click',mostrarImagenes)
            todasImg[posImg[1]].removeEventListener('click',mostrarImagenes)
        }else{
            alert("mano elija otra carta");
            todasImg [posImg[0]].setAttribute("src", './imagenes/ocultar.png');
            intentos++;
            mostrarIntentos.texcontent = intentos;
        }

    } else {
        todasImg[posImg[0]].setAttribute("src", './imagenes/ocultar.png');
        todasImg[posImg[1]].setAttribute("src", './imagenes/ocultar.png');
        intentos++;
        mostrarIntentos.textContent = intentos;
    }

    nombreImg = [];
    posImg = [];
}

