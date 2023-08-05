

class Mascota{
    nombre = "";
    tipo = "";
    energia = 100;

    constructor(nombre, tipo, energia){
        this.nombre = nombre;
        this.tipo = tipo;
        this.energia = energia;
    }

    alimentar(){
        if(this.energia <= 79){
            this.energia+= 20;
            //console.log(`Mi energía ahora es de ${this.energia}`);
        }else if(this.energia >= 80){
            this.energia= 100;
        }
    }
    jugar(){
        if(this.energia >= 11){
            this.energia -= 10;
            //console.log(`Mi energía ahora es de ${this.energia}`);
        }else if(this.energia <= 10){
            console.log(`Mi energia no es suficiente para jugar`);
        }
    }

    get getMostrarEnergia(){
        return `La energia de ${this.nombre} es de ${this.energia}`
    }
}

class Perro extends Mascota{
    ladra = "";

    constructor(nombre, tipo, energia, ladra){
        super(nombre, tipo, energia); //Llamar funciones del padre de un objeto
        this.ladra = ladra;
    }
    ladrar(){
        if(this.ladra == "Si"){
            console.log(`${this.nombre} esta ladrando`)
        }else{
            console.log(`${this.nombre} no esta ladrando`)
        }
        
    }
}
class Gato extends Mascota{
    ronronea = "";

    constructor(nombre, tipo, energia, ronronea){
        super(nombre, tipo, energia);
        this.ronronea = ronronea;
    }

    ronronear(){
        if(this.ronronea == "Si"){
            console.log(`${this.nombre} esta ronroneando`)
        }else{
            console.log(`${this.nombre} no esta ronroneando`)
        }
        
    }
}

const lulu = new Perro(`Lulu`, `golden`, 50, `No`);
console.log(lulu);
lulu.ladrar();
lulu.alimentar();
lulu.jugar();
console.log(lulu.getMostrarEnergia);


const kloe = new Gato(`Kloe`, `Persa`, 5, `Si`);
console.log(kloe);
kloe.ronronear();
kloe.jugar();
kloe.alimentar();
console.log(kloe.getMostrarEnergia);