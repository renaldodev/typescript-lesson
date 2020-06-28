let numeros:Array<Number>;
numeros=[1,2,3,4];

console.log(numeros);

let nome:string;

let simOuNao:[string,number];

simOuNao=["renald",1]

type pessao="Botato";

function renaldeo():never{
    throw new Error("Renaldo")
}

function alo(msg:string):void{
    console.log("jurante");
}


enum option{
    sim="Sim",
    nao="Rui"
}

interface IProps{

}

abstract class Nova{
     private id:number;
     private nome:string;
     protected cto:string;
     readonly NEW_CTO:string="JURANTE_MATEUS";
    constructor(id:number,name:string,cto:string){
       this.id=id;
       this.nome=name;
       this.cto=cto;
    }

    get getId(){
        return this.id;
    }

    set setId(id:number){
        this.id=id
    }
}

class NovoCarro extends Nova{
    private modelo:string;
    constructor(id:number,name:string,cto:string,modelo:string){
        super(id,name,cto)
        this.modelo=modelo;
        this.cto="Jurante"
    }
}

const carro=new NovoCarro(12,"Renaldo","Renaldo","Nissan");

console.log(carro)


interface Game{
    Title:string;
    Date?:Date;
    IsGame?:(numeros:number)=>boolean;
}

const fifa:Game={
    Title:"Fifa 2020",
    Date:new Date(),
    IsGame:(numeros:number)=>true
}
if(fifa.IsGame){
    console.log(fifa?.Date,fifa.IsGame(3))
}

interface IFactory extends Game{
    MyHome:string;
}


function Print<T>(value:T){
   console.log(typeof(value),value)
}


class Reanaldo<T extends String| Number,K,V>{
  
}

Print<string>("Reenaldo")