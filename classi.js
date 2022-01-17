// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
let studente = {
    nome: 'nome#1',
    cognome: 'cognome#1',
    età: 'età#1',
}


// Stampare in console attraverso un ciclo for-in tutte le proprietà dell’oggetto.
for (let chiave in studente) {
 //   console.log(chiave);
}


// Creare un array di oggetti di studenti.
let studenti = [
    {
        nome: 'nome#2',
        cognome: 'cognome#2',
        età: 'etè#2',
    },
    {
        nome: 'nome#3',
        cognome: 'cognome#3',
        età: 'etè#3',
    },
    {
        nome: 'nome#4',
        cognome: 'cognome#4',
        età: 'etè#4',
    }
]


// Ciclare su tutti gli studenti e stampare, per ognuno di essi, nome e cognome.
for (let i = 0; i < studenti.length; i++) {
 //   console.log(studenti[i].nome + " " + studenti[i].cognome);
}


// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
let nomeStudente = prompt('Inserire il nome dello studente');
let cognomeStudente = prompt('Inserire il cognome dello studente');
let etàStudente = prompt('Inserire età dello studente');


// Aggiungere il nuovo studente all’array di studenti
studenti.push({
    nome: nomeStudente,
    cognome: cognomeStudente,
    età: etàStudente,
})


// Ciclare su tutti gli studenti e stampare per ognuno di essi tutte le proprietà
for (let i = 0; i<studenti.length; i++) {
    console.log(studenti[i].nome + " " + studenti[i].cognome + " " + studenti[i].età);
}