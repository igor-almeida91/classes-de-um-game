class hero {
    constructor(nome, idade, classe){
        this.nome = nome
        this.idade = idade
        this.classe = classe
    }
    atacar(){
        let ataque = ""
        if (this.classe == "ninja"){
            ataque = "usou shuriken"
        }
        else if (this.classe == "monge"){
            ataque = "usou artes marciais"
        }
        else if (this.classe == "mago"){
            ataque = "usou magia"
        }
        else if (this.classe == "guerreiro"){
            ataque = "usou espada"
        }
        else{
            ataque = "nao realizou nenhum ataque"
        }

        console.log(`O ${this.classe} atacou usando ${ataque}`);
    }
}

//criando os metodos
heroninja = new hero("Owner" , 28, "ninja")
heromonge = new hero("Azatrostan", 30, "monge")
heromago = new hero("Wyclif", 33, "mago")
heroguerreiro = new hero("Wyflic", 32, "guerreiro")

// chamando os metodos
heroguerreiro.atacar();
heromago.atacar();
heromonge.atacar();
heroninja.atacar();