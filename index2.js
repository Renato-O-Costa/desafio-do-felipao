//Esse algoritmo mostra a evolução do herói de acordo com o número de vitória/derrota do personagem.

function evaluateRank (victories, defeats){ //Função criada com os devidos parâmetros entre parênteses
    let result = victories - defeats
    let level = ""

    //Estrutura de decisão com (if, else if, else) para mostrar o novo nível do herói.
    if (result < 0){
        level = "Regressão de nível"
    }else if (result >= 0 && result <= 10){
        level = "Ferro"
    }else if (result > 10 && result <= 20){
        level = "Bronze"
    }else if (result > 20 && result <= 50){
        level = "Prata"
    }else if (result > 50 && result <= 80){
        level = "Ouro"
    }else if (result > 80 && result <= 90){
        level = "Diamante"
    }else if (result > 90 && result <= 100){
        level = "Lendário"
    }else {
        level = "Imortal"
    }
    
    return `O herói tem saldo de ${result} vitórias e está no nível de ${level}\n`
}
 
console.log(evaluateRank(107, 4))  //Chamada da função com os argumentos entre parênteses.






