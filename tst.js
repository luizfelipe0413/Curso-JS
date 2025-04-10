var pessoa = {
    nome: "Matt",
    idade: 29,
    fala: function(){
        console.log('Olá! ')
    },
    dizerNome: function(){
        console.log("Meu nome é " + this.nome)
    }
}
console.log(pessoa.dizerNome())