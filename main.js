// Class, palabra reservada para crear una clase
//`` back tips, permite acceder a las propiedad con ${}

class Persona{
    //Definir propiedades del objeto con una clase
    nombre ="";
    apellido= "";
    edad = 0;
    comida = "";

    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    //set Propiedad 
    set setComidaFavorita(comida){
        this.comida = comida;
    }
    //get Propiedad, devuelve una propiedad
    get getComidaFavorita(){
        return `La comida favorita de ${this.nombre} es ${this.comida}`
    }

    //Crear método: Acción que el objeto pueda ejecutar
    saludar(){
        console.log(`Hola mi nombre es ${this.nombre} y mi edad es ${this.edad}`)
    }
    
}

class Estudiantes extends Persona{ // El extend extiende una clase ya creada. Es una herencia
    clases = `Front-end`;

    constructor(clases, nombre, apellido, edad){
        super(nombre, apellido, edad); //Llamar funciones del padre de un objeto
        this.clases = clases;
    }
    
    saludar(){
        super.saludar(); //Hace que se impriman los dos métodos
        console.log(`Hi, my name is ${this.nombre} and my age are ${this.edad}`)
    }
}


const jennifer = new Estudiantes (`Jennifer`, `Fonseca`, 20, `Programación`);
console.log(jennifer);
jennifer.saludar();
//Crear un objeto
//const jennifer = new Persona(`Jennifer`, `Fonseca`, 24);
//Llamar a la propiedad
// jennifer.setComidaFavorita = "Hamburguesa";

// //Llamar al método
// jennifer.saludar(); //Los métodos tienen parentesis las propiedades no
// console.log(jennifer);
// //Llamar a un get
// console.log(jennifer.getComidaFavorita); 
 