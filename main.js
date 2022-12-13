

const url = 'https://638a80f081df38ab345742af.mockapi.io/api/users';


function crearElemento(elemento) {
    return document.createElement(elemento);
}

function append(padre, hijo) {
    return padre.appendChild(hijo);
}
function getElementoBiId(id) {
    return document.getElementById(id);
}
 function innerHTML(element,dentro){
    return element.innerHTML = dentro
 }

let tabla = getElementoBiId('datos');

async function obtenerdatos(){
    let resp = await fetch(url);
    let data = await resp.json();
   

    data.forEach(element => {
        let fila = crearElemento('tr');
        let celdaImagen = crearElemento('td');
        let imagen = crearElemento('img');
        let nombre = crearElemento('td');
        let puesto = crearElemento('td');
        innerHTML(puesto,element.trabajo)
        innerHTML(nombre,`${element.nombre} ${element.apellido}`);
        imagen.src = element.persona;
        append(celdaImagen,imagen);
        append(fila,celdaImagen);
        append(fila,nombre);
        append(fila,puesto);
        append(tabla,fila);

        
        
    });


};

obtenerdatos();

    

      
       


















