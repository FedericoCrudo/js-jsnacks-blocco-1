//L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.
var primaParola=prompt("Inserisci la prima parola") ;
var secondaParola=prompt("Inserisci la seconda parola") ;

//controllo parola più lunga
if(primaParola.length>secondaParola.length){
   document.getElementById("message").innerHTML='La prima  immessa è piu lunga  '+primaParola+'  '+secondaParola;
   }
else if(primaParola.length<secondaParola.length){
   document.getElementById("message").innerHTML='La seconda immessa è piu lunga  '+secondaParola+'  '+primaParola;
}
else{
   document.getElementById("message").innerHTML='Stampate secondo l ordine di immissione:  '+primaParola+'  '+secondaParola;
}
