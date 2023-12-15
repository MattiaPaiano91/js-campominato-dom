
// Consegna
// Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell'array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti
//(ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha cliccato su una cella che non era una bomba.


let button = document.getElementById('button');
let container = document.getElementById("grid-box");

function generateRandomNumber(min, max) {
  const randNum = Math.floor(Math.random() * (max - min + 1)) + min;

  return randNum;
}

const randomNumbers = [];
// console.log('numero array' ,randomNumbers)
for (let i = 0; i < 16; i++) {
  // Genero un numero casuale
  let bomb = generateRandomNumber(1, 100);
  console.log(bomb);

  // Controllo se questo numero appena generato è già presente nell'array
  let foundInArray = randomNumbers.includes(bomb);

  while (foundInArray == true) {
    bomb = generateRandomNumber(1, 100);
    // console.log(bomb);
    foundInArray = randomNumbers.includes(bomb);
  }

  randomNumbers.push(bomb);

  // console.log(randomNumbers);
}

let counter = 0;

button.addEventListener('click', function() {
  container.innerHTML = '';
  for (let i = 1; i <= 100; i++) {

    let box = document.createElement("div");
    box.innerHTML = i;
    box.classList.add("box");
    container.append(box);

    box.addEventListener("click", function () {
      if (randomNumbers.includes(i)) {

        box.classList.add("bomb");
        alert("hai perso!, il tuo punteggio è: " + counter); 
        container.innerHTML += "";
      }
      else{ 
        
        if(!box.classList.contains('clicked')){
          box.classList.add("clicked");
          counter++;
          console.log("counter", counter); 
        }
      }
      if (counter == (100 - randomNumbers.length)) {
        alert("Hai vinto! il tuo punteggio è:");
      }
    });
  }
});
          


      














