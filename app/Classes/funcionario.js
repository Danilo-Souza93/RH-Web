// class Funcionario {
    
//     nome = new String();
//     idade = new String();
//     cargo = new String();
//     endereco = new Endereco();
//     departamentoNome = "";
// }

const Funcionario = class Funcionario {

    constructor(nome, idade, cargo, endereco, departamentoNome) {      
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
        this.endereco = endereco;
        this.departamentoNome = departamentoNome;
    }

}