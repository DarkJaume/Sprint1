let Contar = [];

for (let i = 0; i < 10; i++) {
    Contar.push(() => {
        for (let i = 0; i < 10; i++) {
            console.log(i);
        }
        console.log("****************");
    });
}

Contar.forEach((f) => f());