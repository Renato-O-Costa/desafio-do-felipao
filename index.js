//Algoritmo para cadastrar Pokemons

//Array de cadastro de Pokemons
let cadastroPokemons = [
    ["Poochyena", "M", "Level: 2", "HP: 13/13"],
    ["Zigzagoon", "F", "Level: 2", "HP : 13/13"],
    ["Dragonite", "M", "Level: 5", "HP: 25/25"],
    ["Dragonite", "F", "Level: 5", "HP: 24/24"],
    ["Dragonite", "F", "Level: 5", "HP: 24/24"],
    ["Poocheyna", "F", "Level: 3", "HP: 15/15"],
    ["Wurmple", "M", "Level: 2", "HP: 7/14"]
]
for (let i = 0; i < cadastroPokemons.length; i++) { //Estrutura de repetição para percorrer e mostrar os elementos da array
    let cadastro = cadastroPokemons[i];
    
let nomePokemon = cadastro[0]; // Acessando o elemento da coluna zero
    console.log(nomePokemon + " cadastrado com sucesso.\n")
   
}