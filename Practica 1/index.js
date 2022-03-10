var arreglo = [
    "imagenes/perrito-meme.jpeg", 
    "imagenes/perrito-meme.jpeg", 
    "imagenes/perrito-meme.jpeg", 
    "imagenes/perrito-meme.jpeg", 
    "imagenes/perrito-meme.jpeg",
    "imagenes/perrito-meme.jpeg",
    "imagenes/perrito-meme.jpeg",
    "imagenes/perrito-meme.jpeg",
    "imagenes/perrito-meme.jpeg",
    "imagenes/perrito-meme.jpeg",
    "imagenes/img_cuanto_mide_un_perro_chihuahua_29878_600_square.jpeg",
 "imagenes/perrito-amsiedad.jpeg", 
 "imagenes/perrito-meme.jpeg",
 "imagenes/img_cuanto_mide_un_perro_chihuahua_29878_600_square.jpeg",
 "imagenes/perrito-amsiedad.jpeg", 
 "imagenes/perrito-meme.jpeg",
 "imagenes/img_cuanto_mide_un_perro_chihuahua_29878_600_square.jpeg",
 "imagenes/perrito-amsiedad.jpeg", 
 "imagenes/perrito-meme.jpeg", 
 "imagenes/perrito-meme.jpeg", 
 "imagenes/perrito-meme.jpeg", 
 "imagenes/perrito-meme.jpeg", 
 "imagenes/perrito-meme.jpeg", 
 "imagenes/perrito-meme.jpeg"];


 //Imagenes Perfil
var imagenesContenedor = document.getElementById("imagenes"); //contenedor de las imagenes
//Imagenes Inicio
var imagenesInicioContenedor = document.getElementById("imagenesInicio");

//Funcion
function asignarImagenes(contenedor, size) {
//Ciclo
    for(var x=0; x < arreglo.length; x++) {
        var columna = document.createElement("ion-col");
        columna.size = size;
    
        var imagen = document.createElement("img");
        imagen.src = arreglo[x];
    
        columna.appendChild(imagen);
    
        //asignar al contenedor
        contenedor.appendChild(columna);
    }
}

asignarImagenes(imagenesContenedor, "4");
asignarImagenes(imagenesInicioContenedor, "12");

var usuario = {
    "nombre": "Unos pelillos", 
    "correo": "max@gmail.com",
    "id": "unospelillos",
    "password": "123",
    "fotodeperfil": "imagenes/perrito-meme.jpeg",
    "fechadenacimiento": 12/12/2021,
    "seguidores": 431932432943,
    "seguidos": 10, 
    "descripcion": "-Porqué no funciona tu codigo? -Unos pelillos....",
    "publicaciones": arreglo.length
}



var nombre = document.getElementById("nombre");
var id = document.getElementById("id");
var fotodeperfil = document.getElementById("fotoperfil");
var seguidores = document.getElementById("seguidores");
var seguidos = document.getElementById("seguidos");
var publicaciones = document.getElementById("publicaciones");
var descripcion = document.getElementById("descripcion");

nombre.innerText = usuario.nombre;
fotodeperfil.src = usuario.fotodeperfil;
seguidores.innerText = usuario.seguidores;
seguidos.innerText = usuario.seguidos;
publicaciones.innerText = usuario.publicaciones;
descripcion.innerText = usuario.descripcion;

var feed = [
    {
        "idpublicacion": "59437asd3479ds",
        "usuario": "@perritoamsiedad",
        "imagen": "imagenes/perrito-amsiedad.jpeg",
        "caption": "Me da amsiedad..."
    },
    {
        "idpublicacion": "59437asd3479ds",
        "usuario": "@perritoamsiedad",
        "imagen": "imagenes/perrito-amsiedad.jpeg",
        "caption": "Me da amsiedad..."
    },
    {
        "idpublicacion": "59437asd3479ds",
        "usuario": "@perritoamsiedad",
        "imagen": "imagenes/perrito-amsiedad.jpeg",
        "caption": "Me da amsiedad..."
    },
    {
        "idpublicacion": "59437asd3479ds",
        "usuario": "@perritoamsiedad",
        "imagen": "imagenes/perrito-amsiedad.jpeg",
        "caption": "Me da amsiedad..."
    },
    {
        "idpublicacion": "59437asd3479ds",
        "usuario": "@perritoamsiedad",
        "imagen": "imagenes/perrito-amsiedad.jpeg",
        "caption": "Me da amsiedad..."
    }
]

for(var y = 0; y<feed.length; y++) {
    var card = document.createElement("ion-card");
    var cardHeader = document.createElement("ion-card-header");
    var nombreUsuarioParrafo = document.createElement("p"); //aqui va el nombre usuario



    var cardContent = document.createElement("ion-card-content");
    var imgFeed = document.createElement("img"); //imagen de la tarjeta

    var descripcionParrafo = document.createElement("p"); //parrafo con el caption de la foto


//asignar los valores
"usuario": quien la posteo
"imagen": imagen
"caption" -- > descripcion

    //append
    
    cardHeader -> card
    nombreUsuarioParrafo -> cardHeader

    cardContent -> card
    img -> cardContent
    descripcionParrafo -> cardContent


    card -> feedContainer
}