

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
                    Swal.fire('GRACIAS POR CONFIAR EN SU BANCO')
                    // prestamos_modal.showModal();
                    // cerrar_modal(cerrarModalPres , modal_pres);
                    let saldo6 = parseInt((Number(cantidadDinero.value) * 3)/6 ).toLocaleString('en')
                    console.log(sueldo.value)
                        for ( i = 1 ; i <= 6 ; i++){
                            respuestaPrestamo.innerHTML +=`
                                                        <td> ${i} Cuotas </td>
                                                        <td> $ ${saldo6}</td>`
                                                
                        }
                                            
                                }
                else if(select.value == '12'){
                    Swal.fire('GRACIAS POR CONFIAR EN SU BANCO')
                    // prestamos_modal.showModal();
                    // cerrar_modal(cerrarModalPres , modal_pres);
                     let saldo12 =  parseInt((Number(cantidadDinero.value) * 4)/12).toLocaleString('en')
                        for ( i = 1 ; i <= 12 ; i++){
                            respuestaPrestamo.innerHTML +=`
                                                        <td> ${i} Cuotas </td>
                                                        <td> $ ${saldo12}</td>`
                                                
                        }
                                }
                else if (select.value == '24'){
                    Swal.fire('GRACIAS POR CONFIAR EN SU BANCO')
                    // prestamos_modal.showModal();
                    // cerrar_modal(cerrarModalPres , modal_pres);
                     let saldo24 = parseInt((Number(cantidadDinero.value) * 6)/24).toLocaleString('en')
                            for ( i = 1 ; i <= 24 ; i++){
                                respuestaPrestamo.innerHTML +=`
                                                            <td> ${i} Cuotas </td>
                                                            <td> $ ${saldo24}</td>`
                                                    
                            }}
                            
                else if (select.value == '18'){
                    Swal.fire('GRACIAS POR CONFIAR EN SU BANCO')
                    // prestamos_modal.showModal();
                    // cerrar_modal(cerrarModalPres , modal_pres);
                    let saldo18 =  parseInt((Number(cantidadDinero.value) * 5)/18).toLocaleString('en')
                        for ( i = 1 ; i <= 18 ; i++){
                            respuestaPrestamo.innerHTML +=`
                                                        <td> ${i} Cuotas </td>
                                                        <td> $ ${saldo18}</td>`
                                                
                        }}
                else{
                    // modal.showModal();
                    // cerrar_modal(cerrarModal , modal);
                    Swal.fire('Ingrese una Opcion Valida')
                    
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




