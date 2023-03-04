
// DOM Y EVENTOS

let btnCargar = document.getElementById("btn_cargar")
let div_cliente = document.getElementById("Carga_Cliente")
let cargarCliente = document.getElementById('verCliente')
let nombre = document.getElementById('nombre')
let edad = document.getElementById('edad')
let trabajo = document.getElementById('lugar_trabajo')
let domicilio = document.getElementById('domicilio')
let sueldo = document.getElementById('sueldo')
let cerrarModal = document.getElementById('btn-cerrar-modal')
let  botonCargar= document.getElementById('btn-cargar-modal')
let modal = document.getElementById('modal')


class Cliente{
    constructor(id,nombre, edad, empresa , domicilio , sueldo){
        this._id = id,
        this._nombre = nombre,
        this._edad = edad,
        this._empresa = empresa,
        this._domicilio = domicilio,
        this.sueldo = sueldo
    }
}

let cliente1 = new Cliente( 1 , 'jose', 23 , 'banco Cordoba', 'juan de la vega 2443', 120000)
let cliente2 = new Cliente( 2 , 'pablo', 23 , 'EPEC', 'colon 1234', 123050)
let cliente3 = new Cliente( 3 , 'maria', 23 , 'Aguas Cordobesas', 'del campillo 4343', 200000)
let cliente4 = new Cliente( 4 , 'josefina', 23 , 'Tren de las Sierras', 'lopez y planes 3434', 220000)




let clientes =[];


localStorage.getItem("cliente") ?  clientes = JSON.parse(localStorage.getItem('cliente')) : console.log('seteamos por primera vez') , clientes.push(cliente1 , cliente2 , cliente3, cliente4),localStorage.setItem('cliente' , JSON.stringify(clientes))





function ver_clientes(array){
    Carga_Cliente.innerHTML = ""
    for (cl of array){
        
        
        let nuevo_cliente = document.createElement("tr")
        
        nuevo_cliente.innerHTML = 
                                    `<td>${cl._id}</td>
                                    <td>${cl._nombre}</td>
                                    <td>${cl._edad}</td>
                                    <td>${cl._empresa}</td>
                                    <td>${cl._domicilio}</td>
                                    <td>$${cl.sueldo}</td>` 
                                    
        div_cliente.append(nuevo_cliente);
        
    }
    }
    

    
function cargar(array){
     let nombre = document.getElementById('nombre')
     let edad = document.getElementById('edad')
     let trabajo = document.getElementById('lugar_trabajo')
     let domicilio = document.getElementById('domicilio')
     let sueldo = document.getElementById('sueldo')  
       const cliente5 = new Cliente( array.length+1, nombre.value, edad.value , trabajo.value, domicilio.value , sueldo.value)
          array.push(cliente5)        
          localStorage.setItem("cliente", JSON.stringify(array))
          console.log(array)
    } 
    
    btnCargar.addEventListener("click" , () =>{
        cargar(clientes)
        let formulario1 = document.getElementById("formulario1")
        formulario1.reset() ;
        //modal.showModal();
        Swal.fire({
          title:'Se ha Registrado con Exito',
          confirmButtonText: ' Gracias' 
        
        })
    } )
    
    
    cargarCliente.addEventListener("click" , () => {
        document.getElementById('mostrar_clientes').classList.remove('mostrar_clientes') 
         ver_clientes(clientes)
        
         
        })
        
        
        

//  let clientes22 = JSON.parse(localStorage.getItem("cliente"))
//  console.log(clientes22)
//MODAL


// function cerrar_modal(){
//     cerrarModal.addEventListener("click" , ()=>{
//         modal.close()
//     })
// }

// cerrar_modal();

// buscar
let busCliente = document.getElementById('busCliente')
let btnBusCliente = document.getElementById('btn_busCliente')

busCliente.addEventListener('click' , ()=>{
    buscarCliente(buscarCliente.value, clientes)
})


function buscarCliente(busc , array){
    let busquedaArray = array.filter(
        (clien) =>  clien._nombre.toLowerCase() == busc.toLowerCase() || clien.trabajo.toLowerCase() == busc.toLowerCase()
    )
    ver_clientes(busquedaArray)
}




//dolar hoy

//Agregar un sueldo
//libreria sweet alert

let contador1 = 0
for(let letra of "hola mundo"){
    contador1 += 1000
    setTimeout(()=>{
      
        console.log(letra)
    }, contador1)
}