// Realizziamo il gioco della morra cinese in JavaScript. Vince chi totalizza per primo 4 punti.
    
    var lista=["sasso","carta","forbice"];
    var puntiU=0;
    var puntiC=0;
    vari=0;
    var message;
    var esito;
    var sent=false;
    
    while(sent==false){
     var sceltaU=prompt("Scegli:Sasso,Carta,Forbice").toLowerCase();
     sceltaC=lista[generaRandom(0,2)];   
        if(sceltaU==""){  
         alert("Si prega di inserire solo i valori indicati(forbice,sasso,carta)");
    }
    else{
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
  

   

