

let btn_solicitar = document.getElementById("btn_pres")
let btn_prestamo_borrar = document.getElementById('btn_prestamo_borrar')
let simular = document.getElementById('simular')
let sueldoPres = document.getElementById('sueldo')
let cantidadDinero = document.getElementById("cantidadDinero")
let opcion = document.getElementById("option")
let respuestaPrestamo = document.getElementById("respuestaPrestamo")
let select =document.getElementById('select')
let loader = document.getElementById('centrado')


//function prestamo(){
    
simular.addEventListener('click' , ()=>{                   
        document.getElementById('form').classList.remove('ocultar')               
    })  
    
 btn_pres.addEventListener("click" , () => {
   
     
     if(select.value == '6'){
       
    
         setTimeout(()=>{
             
             Swal.fire('GRACIAS POR CONFIAR EN SU BANCO')
             
            }, 2000)
            
            let saldo6 = parseInt((Number(cantidadDinero.value) * 3)/6 ).toLocaleString('en')
            console.log(sueldo.value)
           
            
            setTimeout(()=>{
                document.getElementById('tabla').classList.remove('tabla1')   
                
                for ( i = 1 ; i <= 6 ; i++){
                    respuestaPrestamo.innerHTML +=`
                    <td> ${i} Cuotas </td>
                    <td> $ ${saldo6}</td>`
                    
                }
                
            }, 3000)
         

                }
                else if(select.value == '12'){
                   
                    setTimeout(()=>{
             
                        Swal.fire('GRACIAS POR CONFIAR EN SU BANCO')
                        
                    }, 2000)
                 
                     let saldo12 =  parseInt((Number(cantidadDinero.value) * 4)/12).toLocaleString('en')
                   
                     setTimeout(()=>{  
                       
                        document.getElementById('tabla').classList.remove('tabla1')    
                     
                        for ( i = 1 ; i <= 12 ; i++){
                            respuestaPrestamo.innerHTML +=`
                                                        <td> ${i} Cuotas </td>
                                                        <td> $ ${saldo12}</td>`
                                                
                        }
                    }, 3000)
                                }
                else if (select.value == '24'){
                   
                    setTimeout(()=>{
                        Swal.fire('GRACIAS POR CONFIAR EN SU BANCO')
                    }, 2000)
                   
                    let saldo24 = parseInt((Number(cantidadDinero.value) * 6)/24).toLocaleString('en')
                   
                    setTimeout(()=>{   
                   
                        document.getElementById('tabla').classList.remove('tabla1')      
                   
                        for ( i = 1 ; i <= 24 ; i++){
                                    respuestaPrestamo.innerHTML +=`
                                                                <td> ${i} Cuotas </td>
                                                                <td> $ ${saldo24}</td>`
                                                        
                                }
                    }, 3000)
                        }
                            
                else if (select.value == '18'){
                    
                    setTimeout(()=>{
                        Swal.fire('GRACIAS POR CONFIAR EN SU BANCO')
                    }, 2000)
                  
                    let saldo18 =  parseInt((Number(cantidadDinero.value) * 5)/18).toLocaleString('en')
                   
                    setTimeout(()=>{    
                   
                        document.getElementById('tabla').classList.remove('tabla1')     
                   
                        for ( i = 1 ; i <= 18 ; i++){
                            respuestaPrestamo.innerHTML +=`
                                                        <td> ${i} Cuotas </td>
                                                        <td> $ ${saldo18}</td>`
                                                
                        }
                    }, 3000)}
               
                else{
               
                    setTimeout(()=>{
               
                        Swal.fire('Ingrese una Opcion Valida')
                       
                    }, 1000)
                    
                }

            
})


function classTabla(){
btn_prestamo_borrar.addEventListener("click", ()=>{
    document.getElementById('div_tabla').classList.add('tabla1')
})          
}
classTabla();

// Finalizar la adquisicion del prestamo

function finalPrestamo(array){
    Swal.fire({
        title: 'Esta seguro ?',
        text: "Esta seguro de solicitar el credito?",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
}


