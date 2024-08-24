function Carro(marca, modelo, ano, preco, nomeDono){
    this.marca = marca
    this.modelo = modelo
    this.ano = ano
    this.preco = preco
    this.acelerar = function(){
        console.log(this.modelo + ' está acelerando')
    }
    Pessoa.call(this, nomeDono)
}

//instâncias de Carro
const Civic = new Carro('honda', 'civic', '2020', '80.000')
const Fusca = new Carro('volkswagen', 'fusca', '1959', '10.000')
const Opala = new Carro('chevrolet', 'Opala', '1968', '20.000')

function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
    let _contaBanco = this.setConta = function (i){
        return console.log(`A conta de ${this.nome} é ${i}`)
    } 
}

//instâncias de pessoa
const Nicolas = new Pessoa('Nicolas', 18)
const Wellington = new Pessoa('Wellington', 21)
const Lucas = new Pessoa('Lucas', 28)

//settings das contas
console.log(Nicolas)
console.log(Nicolas.setConta("60.000"))
console.log(Wellington)
console.log(Wellington.setConta("40.000"))
console.log(Lucas)
console.log(Lucas.setConta("30.000"))


//ações do civic
Civic.nome = Wellington.nome;
Civic.idade = Wellington.idade
console.log(Civic)
Civic.acelerar()

//ações do Fusca
Fusca.nome = Nicolas.nome
Fusca.idade = Nicolas.idade
console.log(Fusca)
Fusca.acelerar()

//ações do Opala
Opala.nome = Lucas.nome
Opala.idade = Lucas.idade
console.log(Opala)
Opala.acelerar()