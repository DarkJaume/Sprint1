class Persona {
    constructor(nom) {
        this.nom = nom;
    }
    dirNom() {
        console.log(`Nom: ${this.nom}`);
    }
}
const Nom = new Persona("James");
Nom.dirNom();