class Figura {
    constructor() {
        if (new.target === Figura) {
            throw new Error("No es pot instanciar clase abstracte");
        }
    }
}

const creaObjecte = () => {
    nouObj = Object.create(Figura.prototype, {
        constructor: { value: Figura },
    });
    return nouObj;
};

const triangle = creaObjecte();
const cuadrat = creaObjecte();
const cercle = creaObjecte();

console.log(cercle);
console.log(cuadrat);
console.log(triangle);