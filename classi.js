let studente = {
    nome: 'nome#1',
    cognome: 'cognome#1',
    età: 'età#1',
}

for (let chiave in studente) {
    console.log(chiave);
}

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

for (let i = 0; i < studenti.length; i++) {
    console.log(studenti[i].nome + " " + studenti[i].cognome);
}

let nomeStudente = prompt('Inserire il nome dello studente');
let cognomeStudente = prompt('Inserire il cognome dello studente');
let etàStudente = prompt('Inserire età dello studente');