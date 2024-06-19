/*
 # 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
*/

function calcular(){
    let vitorias = Number(document.querySelector('#vitorias').value);
    let derrotas = Number(document.querySelector('#derrotas').value);

    let saldoDeVitorias = saldoVitorias(vitorias, derrotas);
    let rank = posicaoNaRankeada(saldoDeVitorias)

    exibeResultado(saldoDeVitorias, rank)
}

function saldoVitorias(vitorias, derrotas){
    let saldoDeVitorias = vitorias - derrotas
    return saldoDeVitorias
}

function posicaoNaRankeada(saldoDeVitorias){
    if(saldoDeVitorias <= 10){
        return 'Ferro'
    }else if(saldoDeVitorias <= 20){
        return 'Bronze'
    }else if(saldoDeVitorias <= 50){
        return 'Prata'
    }else if(saldoDeVitorias <= 80){
        return 'Ouro'
    }else if(saldoDeVitorias <= 90){
        return 'Diamante'
    }else if(saldoDeVitorias <= 100){
        return 'Lendário'
    }else if(saldoDeVitorias > 100){
        return 'Imortal'
    }
}

function exibeResultado(saldoDeVitorias, rank){
    let resultado = document.querySelector('#resultado')
    resultado.innerHTML = `O Herói tem de saldo de ${saldoDeVitorias} está no nível de ${rank}`
}