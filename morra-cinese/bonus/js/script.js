var puntiU=0;
var puntiC=0;

var element = document.getElementById('gioca');
  element.addEventListener('click',
  function() {
    
    var lista=["sasso","carta","forbice"];
    var sent=false;
    var esito="";
    var sceltaU=document.getElementById("scelta").value;
    console.log(sceltaU);
   if(puntiU==4 ||puntiC==4){
     puntiU=0;
     puntiC=0;
   }
   else{

        if(sceltaU==""){
                document.getElementById("message").innerHTML="";
                void element.offsetWidth
                document.getElementById("message").innerHTML="<span class='text'>Si prega di compilare tutti i campi</span>";
                document.getElementById("scelta").className="";  
                void element.offsetWidth; //per refreshare e rendere la pagina più dinamica
                document.getElementById("scelta").className="empity"; 
                document.getElementById("resultU").src = "";
                document.getElementById("resultC").src="";
            }
            else{
                document.getElementById("message").innerHTML="";
                document.getElementById("scelta").className="";
                void element.offsetWidth; //per refreshare e rendere la pagina più dinamica
                document.getElementById("scelta").className="check";  
                var sceltaU=document.getElementById("scelta").value;
                var sceltaC=lista[generaRandom(0,2)] 
                document.getElementById("resultU").src = "img/"+sceltaU+".svg";
                document.getElementById("resultC").src="img/"+sceltaC+".svg";

                    if(sceltaU=="sasso"&& sceltaC=="carta"||
                    sceltaU=="carta"&& sceltaC=="forbice"||
                    sceltaU=="forbice"&&sceltaC=="sasso" ){
                        message="vince computer";
                        puntiC++;
                    }
                    else if(sceltaU=="sasso"&& sceltaC=="forbice" ||
                    sceltaU=="carta"&& sceltaC=="sasso"||
                    sceltaU=="forbice" && sceltaC=="carta"){
                        message="vince utente";
                        puntiU++;
                    }
                else{
                message="parita";
                }
                if(puntiC==4){
                    esito="Hai perso,vince il computer";
                }
                else{
                    esito="Ha vinto";
                    
                }
                        
                document.getElementById("message").innerHTML=message;
                document.getElementById("esito").innerHTML=puntiU+"-"+puntiC;

                }
                


   }
       
        
   
   
   
}
);  


function generaRandom(min,max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  

   

