// Clasa pentru reprezentarea unei mașini
class Masina {
    constructor(marca, model, culoare, kilometraj) {
        this.marca = marca;
        this.model = model;
        this.culoare = culoare;
        this.kilometraj = kilometraj;
    }

    // Getter pentru proprietăți
    get proprietati() {
        return `Masina[marca=${this.marca}, model=${this.model}, culoare=${this.culoare}, kilometraj=${this.kilometraj}]`;
    }
}

// Funcția principală pentru crearea și afișarea mașinilor
function main() {
    const masina1 = new Masina("VOLVO", "XC-60", "Negru", "234 000");
    const masina2 = new Masina("Mazda", "CX-5", "Verde", "111 000");
    const masina3 = new Masina("Dacia", "BIGGSTER", "Albastru", "20 000");

    console.log(masina1.proprietati);
    console.log(masina2.proprietati);
    console.log(masina3.proprietati);
}

// Clasa pentru mașinile de curse
class MasinaDeCurse extends Masina {
    constructor(marca, model, culoare, kilometraj) {
        super(marca, model, culoare, kilometraj); // Apelare superconstructor
    }

    // Metoda pentru participarea la campionat
    participaLaCampionat(pozitiaInCampionat) {
        if (pozitiaInCampionat > 0) {
            console.log(`Am castigat locul ${pozitiaInCampionat}`);
        } else {
            console.log("Nu am castigat niciun premiu");
        }
    }
}

// Funcție pentru instanțierea mașinilor de curse și afișarea rezultatului
function mainMasiniDeCurse() {
    const masinaDeCurse1 = new MasinaDeCurse("Toyota", "Turbo", "Rosu", "100 000");
    const masinaDeCurse2 = new MasinaDeCurse("Ferrari", "F1", "Galben", "50 000");

    // Participarea la campionat
    masinaDeCurse1.participaLaCampionat(2); 
    masinaDeCurse2.participaLaCampionat(-1); 

    // Afișarea proprietăților
    console.log(masinaDeCurse1.proprietati);
    console.log(masinaDeCurse2.proprietati);
}

// Apelarea funcțiilor
main();
mainMasiniDeCurse();
