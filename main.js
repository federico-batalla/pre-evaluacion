

const url = 'https://6398b453fe03352a94dbe15d.mockapi.io/api/empleados';


function crearElemento(elemento) {
    return document.createElement(elemento);
}

function append(padre, hijo) {
    return padre.appendChild(hijo);
}
function getElementoBiId(id) {
    return document.getElementById(id);
}
 function inner(element,dentro){
    return element.innerHTML = dentro
 }

function crearfila(){
    return crearElemento('tr');
}

 function crearCelda(){
    return crearElemento('td');
 }

let tabla = getElementoBiId('datos');

async function obtenerdatos(){
    let resp = await fetch(url);
    let data = await resp.json();
   

    data.forEach(element => {
        let fila = crearfila();
        let nombre = crearCelda();
        let area =crearCelda();
        let domicilio = crearCelda();
        let id = crearCelda();
        let celdabtn = crearCelda();
        let btn = crearElemento(`button`);
        inner(nombre,`${element.nombre} ${element.apellido}`);
        inner(area,element.area);
        inner(domicilio,element.domicilio);
        inner(id,element.id);
        inner(btn,'Ver Empleado');
        append(celdabtn,btn)
        append(fila,nombre);
        append(fila,area);
        append(fila,domicilio);
        append(fila,id);    
        append(fila,celdabtn);
        append(tabla,fila);
    });

    console.log(data);

};

obtenerdatos();

    

      
       


















