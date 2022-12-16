

const urlGet = 'https://6398b453fe03352a94dbe15d.mockapi.io/api/empleados';


//--------------------funciones---------------------
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
//--------elementos html
let tabla = getElementoBiId('datos');
let divTabla = getElementoBiId('divTabla');
let divDetalle = getElementoBiId('divDetalle');
let divPadre = getElementoBiId('divPadre');

//------------------------------
async function obtenerdatos(){
    let resp = await fetch(urlGet);
    let data = await resp.json();
   
    //por cada persona
    data.forEach(element => {
        //se crean y se capturan lo elementos html en variables
        let fila = crearfila();
        let nombre = crearCelda();
        let area =crearCelda();
        let domicilio = crearCelda();
        let id = crearCelda();
        let celdabtn = crearCelda();
        let btn = crearElemento(`button`);
        
        // se agregan el contenido   a cada elemento
        inner(nombre,`${element.nombre} ${element.apellido}`);
        inner(area,element.area);
        inner(domicilio,element.domicilio);
        inner(id,element.id);
        inner(btn,'Ver Empleado');
        // se le agregan las clases e id a todos los botones
        btn.classList.add('btn');
        btn.id=element.id;
        // se agregan las celdas a la fila
        append(celdabtn,btn)
        append(fila,nombre);
        append(fila,area);
        append(fila,domicilio);
        append(fila,id);    
        append(fila,celdabtn);
        //se agrega la fila  a la tabla
        append(tabla,fila);

    });
    // se agrega los eventos click a todos lo botones
    let btns = document.querySelectorAll(".btn");
    
    btns.forEach(elemento=>{
        elemento.addEventListener('click',(e)=>{            
            mostrarDetalle(e.target.id);
            //se modifican los css al presionar el boton           
            divDetalle.classList.remove('oculto');
            divPadre.classList.add('btn');
        });
    });

    

};
//--------------------------------------------
async function mostrarDetalle(id){
    let resp = await fetch("https://6398b453fe03352a94dbe15d.mockapi.io/api/empleados/"+id)
    let data = await resp.json();
    //se crea el parrafo y la imagen
    let img = crearElemento('img');
    let p = crearElemento('p');  
    //se agrega la src de la img y el contenido del parrrafo  
    img.src = data.foto;
    inner(p,
        `Nombre: ${data.nombre} ${data.apellido} 
         - Area: ${data.area}   
         - Domicilio : ${data.domicilio} 
         - Id: ${data.id}`);
    //se limpia el div y se coloca la imagen y el parrafo     
    inner(divDetalle,"");
    append(divDetalle,img);
    append(divDetalle,p);
    
    
   
};

// datos para actualizar api
let datos ={
    "nombre":"Federico Matias",
    "apellido":"Batalla",
    "area":"Response",
    "domicilio":"Ushuaia 123",
    "foto":"https://turismoushuaia.com/wp-content/uploads/2018/12/ABW4036-1-1024x684.jpg",
    "id":"15"
};
//-----------------------------------------------
async function modificarDatos(datos){
    let resp = await fetch("https://6398b453fe03352a94dbe15d.mockapi.io/api/empleados/"+datos.id, {
        method: "PUT",
        body:JSON.stringify(datos),
        headers:{"Content-type":"application/json"}
    });
    //se muestarn por consola los datos a actualizar
    const data = await resp.json();
    console.log(data);
        
};

//main
obtenerdatos();
modificarDatos(datos);




    


    

    















    

      
       


















