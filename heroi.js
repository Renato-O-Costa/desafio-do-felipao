//Desenvolvendo uma classe para criação do objeto do tipo herói.

//Definição da classe hero.
class hero{
    constructor(nome, idade, tipo){ //Tipos:guerreiro, mago, monge, ninja.
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){ //Função para tipo de ataque usando o Switch Case, de acordo com o tipo de herói.
        let ataque =  ""
        switch(this.tipo){
            case "mago":
                ataque = "magia"
                break
            case "guerreiro":
                ataque = "espada"
                break
            case "monge":
                ataque = "artes marciais"
                break
            case "ninja":
                ataque = "shurikens"
                break
            default:
                ataque = "usou método de ataque desconhecido"
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}.`)
    }
}

//Objetos heróis criados a partir da classe hero.

const heroi1 = new hero("Aragorn", 30, "guerreiro")
heroi1.atacar()

const heroi2 = new hero("Gaiden", 50, "ninja")
heroi2.atacar()
 
const heroi3 = new hero("Budha", 46, "monge")
heroi3.atacar()

const heroiX = new hero("Astro Boy", 22, "Ciborgue")
heroiX.atacar()

