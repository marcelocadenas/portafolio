


function validar(){
    var jose=document.getElementById('email').value;
    var marcelo=document.getElementById('nombre').value;

    if (marcelo.length==0) {
        alert("ingrese nombre");
        formu.correo.value="";
		formu.correo.focus();
        return false;
    }


   

      if (jose=="") {
        alert("Ingrese correo");
        formu.correo.value="";
		formu.correo.focus();
        return false;
        
      }


      function validarEmail(correo) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/){
            
         return true;
     }else{
         return false;
     }
    }

}