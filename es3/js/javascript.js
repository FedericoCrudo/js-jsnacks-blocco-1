//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
var nome=prompt("Inserisci il nome");
nome=nome.charAt(0).toUpperCase()+ nome.slice(1).toLowerCase();
var lista=["Luca", "Marco", "Paolo"];
var messaggio=false;
//caricamento dati
     if(lista.indexOf(nome)==-1){

         document.getElementById("message").innerHTML='<span id="red">Il tuo nome non è nella lista </span>';
      }
      else{
         document.getElementById("message").innerHTML='<span id="green">Il tuo nome  è nella lista';
      }
     
    //  for (var i = 0; i < lista.length; i++){
    //     if (lista[i]==nome){  
    //         messaggio=true;
    //     }

    // }
    // if (messaggio == true){
    //     document.getElementById("message").innerHTML='<span id="green">Il tuo nome  è nella lista';
    // }   else {
    //     document.getElementById("message").innerHTML='<span id="red">Il tuo nome non è nella lista </span>';
    // }