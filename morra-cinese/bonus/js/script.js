var element = document.getElementById('gioca');
  element.addEventListener('click',
  function() {
   
    var controllo=document.getElementById("esito").innerHTML;
    controllo = controllo.replace(/\s/g, '') //s per gli spazi bianchi , g indica flag globale
    console.log(controllo);
    var scelta=document.getElementById("scelta").value;
    if(controllo==""){
        elaborazione(scelta);
    }
    else{
        console.log("pieno");
    }

}
 
);   
function elaborazione(sceltavalue){
    var lista=["sasso","carta","forbice"];
    var puntiU=0;
    var puntiC=0;
    var sceltaU=sceltavalue;
    console.log(sceltaU);
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
         sent=true;
         esito="Hai perso,vince il computer";
     }
     else if(puntiU==4){
         esito="Ha vinto";
         sent=true; 
     }
 }
          
        
       

        

        
        console.log("Punteggio Computer"+puntiC);
        console.log("Punteggio utente"+puntiU);
    }
  }
  
function generaRandom(min,max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  

   

