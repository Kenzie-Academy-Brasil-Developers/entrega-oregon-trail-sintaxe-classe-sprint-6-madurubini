class Traveler {
    constructor(name){
        this.name = name
        this._food = 1
        this.isHealthy = true
    }

    get food() {
        return this._food
    }

    set food(value) {
        if (this._food - value <= 0) {
            this._food = 0
            this.isHealthy = false
        } else {
            this._food -= value       
        }
    }

    hunt = () => {
        return this._food += 2
    }

    eat = () => {
        if (this._food > 0){
            return this._food--
        }
        else {
            this.isHealthy = false
            return `${this.name}, não consegue comer, está doente`
        }
    }

}

class Wagon {
    constructor(capacity){
        this.capacity = capacity
        this.travelers = []
    }

    getAvailableSeatCount = () => {
        return this.capacity
    }

    join = (traveler) => {
        if(this.travelers.length >= this.capacity){
            this.capacity = 0
            return `Carroça lotada`
        }

        if(this.travelers.length < this.capacity){
            this.capacity--
            this.travelers.push(traveler)
            
            return this.travelers
        }
    }

    shouldQuarantine = () => {
        if(!this.isHealthy){
            return true
        }
        else {
            return false
        }
    }

    totalFood = () => {
       for(let i = 0; i < this.travelers.length; i++){
           return(this.travelers[i]._food)
       }
    }
}


// TESTES
// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');
 
console.log(`${wagon.getAvailableSeatCount()} should be 2`);
 
wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);
 
wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);
 
henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)
 
console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);