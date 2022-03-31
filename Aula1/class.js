class Animal {
    constructor (name) {
        this.name = name;
    }

    getName () {
        return this.name;
    }

    setName (newName) {
        this.name = newName;
        return this;
    }
}

class Human extends Animal {

}

const meuAnimal = new Animal("nome");
meuAnimal.getName();

console.log(meuAnimal);