"use strict"
let i = 0

// while (i < 10) {
//     console.log("Bonjour" + i)
//     i = i + 1
// }

//Parcours les notes
const notes = [1, 3, 6, 5, 4, 2.5]
for (i = 0; i < notes.length; i++) {
    console.log(notes[i])
}
for (let i in notes) {
    console.log(notes[i])
}
for (let note of notes) {
    console.log(note)
}

//Itérer sur des objets
const notesObj = {
    test1: 1,
    test2: 3,
    test3: 6
}
// For in pour itérer sur un objet
for (let i in notesObj) {
    console.log(i) //Nous donne la clef
    console.log(notesObj[i]) //nous donne la valeur
}



