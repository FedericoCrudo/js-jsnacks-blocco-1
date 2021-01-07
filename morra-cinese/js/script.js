// Realizziamo il gioco della morra cinese in JavaScript. Vince chi totalizza per primo 4 punti.
    
    var lista=["sasso","carta","forbice"];
    var puntiU=0;
    var puntiC=0;
    
    var message;
    var esito;
    var sent=false;
    
    while(sent==false){
     var sceltaU=prompt("Scegli:Sasso,Carta,Forbice").toLowerCase();
     sceltaC=lista[generaRandom(0,2)];   
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
        console.log("Scelta utente: "+sceltaU);
        console.log("Scelta computer:  "+sceltaC);
        console.log(message);
        console.log(puntiU);
        console.log(puntiC);
    }    

      
    console.log(esito);

        
 
  
function generaRandom(min,max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  

   

