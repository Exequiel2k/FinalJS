

let btn_solicitar = document.getElementById("btn_pres")
let btn_prestamo_borrar = document.getElementById('btn_prestamo_borrar')
let simular = document.getElementById('simular')
let sueldoPres = document.getElementById('sueldo')
let cantidadDinero = document.getElementById("cantidadDinero")
let opcion = document.getElementById("option")
let respuestaPrestamo = document.getElementById("respuestaPrestamo")
let select =document.getElementById('select')

//function prestamo(){
    
simular.addEventListener('click' , ()=>{                   
        document.getElementById('form').classList.remove('ocultar')               
    })  
    
 btn_pres.addEventListener("click" , () => {
        
        document.getElementById('tabla').classList.remove('tabla1')   
    
                if(select.value == '6'){
                    prestamos_modal.showModal();
                    cerrar_modal(cerrarModalPres , modal_pres);
                    let saldo6 = parseInt((Number(cantidadDinero.value) * 3)/6 ).toLocaleString('en')
                    console.log(sueldo.value)
                        for ( i = 1 ; i <= 6 ; i++){
                            respuestaPrestamo.innerHTML +=`
                                                        <td> ${i} Cuotas </td>
                                                        <td> $ ${saldo6}</td>`
                                                
                        }
                                            
                                }
                else if(select.value == '12'){
                    prestamos_modal.showModal();
                    cerrar_modal(cerrarModalPres , modal_pres);
                     let saldo12 =  parseInt((Number(cantidadDinero.value) * 4)/12).toLocaleString('en')
                        for ( i = 1 ; i <= 12 ; i++){
                            respuestaPrestamo.innerHTML +=`
                                                        <td> ${i} Cuotas </td>
                                                        <td> $ ${saldo12}</td>`
                                                
                        }
                                }
                else if (select.value == '24'){
                    prestamos_modal.showModal();
                    cerrar_modal(cerrarModalPres , modal_pres);
                     let saldo24 = parseInt((Number(cantidadDinero.value) * 6)/24).toLocaleString('en')
                            for ( i = 1 ; i <= 24 ; i++){
                                respuestaPrestamo.innerHTML +=`
                                                            <td> ${i} Cuotas </td>
                                                            <td> $ ${saldo24}</td>`
                                                    
                            }}
                            
                else if (select.value == '18'){
                    prestamos_modal.showModal();
                    cerrar_modal(cerrarModalPres , modal_pres);
                    let saldo18 =  parseInt((Number(cantidadDinero.value) * 5)/18).toLocaleString('en')
                        for ( i = 1 ; i <= 18 ; i++){
                            respuestaPrestamo.innerHTML +=`
                                                        <td> ${i} Cuotas </td>
                                                        <td> $ ${saldo18}</td>`
                                                
                        }}
                else{
                    modal.showModal();
                    cerrar_modal(cerrarModal , modal);
                    
                }
})


function classTabla(){
btn_prestamo_borrar.addEventListener("click", ()=>{
    document.getElementById('div_tabla').classList.add('tabla1')
})          
}
classTabla();

let sueldoLocal = localStorage.getItem(sueldo)
console.log(sueldoLocal)


//modal

let cerrarModal = document.getElementById('btn-cerrar-modal')
let  botonCargar= document.getElementById('btn-cargar-modal')
let modal = document.getElementById('modal')
let prestamos_modal = document.getElementById('modal_pres')
let cerrarModalPres= document.getElementById('btn-cerrar-modal_pres')

function cerrar_modal(par1,par2){
    par1.addEventListener("click" , ()=>{
        par2.close()
    })
}
cerrar_modal(cerrarModal , modal);
cerrar_modal(cerrarModalPres , modal_pres);
