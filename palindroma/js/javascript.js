//parola palindroma
var parola=prompt("Inserisci la prima parola").toUpperCase();
var parolareverse=reverseString(parola);
var esito=palindroma(parola,parolareverse);


//***FUNZIONI */
//parola al contrario
   function reverseString(parola){
      var parolareverse="";
       for(var i=parola.length -1;i>=0;i--){
         parolareverse+=parola.charAt(i);
      }
       return parolareverse;
   }
   //FUNZIONE CONFRONTO
   function palindroma(parola,parolareverse){
       if(parola==parolareverse){
         console.log("la parola è palindroma");
       }
       else{
         console.log("la parola non è palindroma");
       }
   }
   


//  for(var i=parola.length -1;i>=0;i--){
//    parolareverse+=parola.charAt(i);
//  }
//  console.log(parolareverse);

// if(parola==parolareverse){
//    console.log("la parola è palindroma");
// }
// else{
//    console.log("la parola non è palindroma");
// }
