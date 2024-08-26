class Carro {
    constructor(modelo, marca, ano, motor){
        this.modelo = modelo;
        this.marca = marca;
        this.ano = ano;
        this.motor = motor;
    }

    acelerar(){
        console.log(`O ${this.modelo} esta acelerando!`)
    }
}

class Moto extends Carro{
    constructor(modelo, marca, ano, cc, dirtBike){
        super(modelo, marca, ano)
        this.cc = cc
        this.dirtBike = dirtBike
    }

    dirtRoad(){
        if(this.dirtBike == true){
            console.log(`A moto de modelo ${this.modelo} é propria para este terreno.`)
        }
        else{
            console.log(`A moto de modelo ${this.modelo} não é indicada para este terreno!`)
        }
    }
}

class Caminhonete extends Carro{
    constructor(modelo, marca, ano, motor, pesoMaximo){
        super(modelo, marca, ano, motor)
        this.pesoMaximo = pesoMaximo;
    }

    transporteCarga(){
        console.log(`Esta caminhonete de modelo ${this.modelo} transporta até ${this.pesoMaximo}`)
    }
}

//instâncias de Carro
const Fusca = new Carro('Fusca', 'volkswagen', '1960', '1500');
const Opala = new Carro('Opala', 'chevrolet', '1968', '2.0');
const E500 = new Carro('E500', 'mercedes', '2012', '5.5 v8');

//instâncias de Moto 
const Ktm = new Moto('enduro', 'ktm', '2018', '150', true);
const Titan = new Moto('Cg', 'Honda', '2020', '150', false);
const Tornado = new Moto('Roadster', 'Honda', '2000', '250',  true);

//instâncias de Caminhonete
const Pampa = new Caminhonete('Pampa', 'ford', '1992', '2.0', '440kg');
const L200 = new Caminhonete('L200', 'mitsubishi', '2010', '2.4D', '1.050kg');
const Ram = new Caminhonete('Ram', 'dodge', '2023', '6.7D', '1752kg');

//Ações de Carro
console.log(Fusca, Opala, E500);
Fusca.acelerar()
Opala.acelerar()
E500.acelerar()

//Ações de Moto
console.log(Ktm, Titan, Tornado);
Ktm.dirtRoad()
Titan.dirtRoad()
Tornado.dirtRoad()
Ktm.acelerar()
Tornado.acelerar()
Titan.acelerar()

//Ações de Caminhonete
console.log(Pampa, L200, Ram);
Pampa.transporteCarga();
L200.transporteCarga();
Ram.transporteCarga();
Pampa.acelerar();
L200.acelerar();
Ram.acelerar();