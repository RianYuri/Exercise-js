// 1 - escreva uma função que receba dois números e retorne
//o máximo dos dois. Chame essa função, forneça um argumento diferente
//e verifique se está funcionando corretamente.
let number = max (10,15);
console.log(number);
function max(num1, num2){
    if(num1 > num2)
    { 
        return num1;
    }else{
        return num2;
    }
}// Outra forma de fazer esse exercicio seria Invez de usar 'IF' e 'ELSE'
//fazer o seguinte 
function max(num1, num2){
return (num1 > num2) ? num1 : num2;    
}


//2 - você implemente esta função.
//A função isLandscape, leva dois parâmetros, largura e altura de
//uma imagem, e retorna true se a imagem for paisagem,
//o que significa que a largura é maior que a
//altura, caso contrário, retorna false.

let number = isLandscape (101,15);
console.log(number);
function isLandscape(width, height){
    if(width > height)
    { 
        return true;
    }else{
        return false;
    }
    }
    //Outra maneira de fazer esse codigo seria 
    function max(num1, num2){
return (width > height) ? true : false;    
}

// 3 - FizzBuzz temos essa função
//chamada fizz buzz, damos a ela uma entrada e
//ela retorna uma string. 
//se for divisivel por 3 -> Fizz
//se for divisivel por 5 -> Buzz  
//se for divisivel por 3 e 5 -> FizzBuzz
//se não for divisivel por 3 e 5 -> input
//se não for um numero -> 'não é um numero'  


const output = fizzBuzz();
console.log(output);
function fizzBuzz(input){
    if(typeof input !== 'number'){
        return NaN;
    }
    else if((input % 3 === 0) && (input % 5 === 0)){
        return 'FizzBuzz';
    } 
    else if (input % 3 === 0){
        return 'Fizz';
    }
    else if (input % 5 === 0){
        return 'Buzz'
    }
    return input;

}

//4 -  
//Velociadde limite 70
//se passo mais de 5 -> 1 ponto na carteira
//math.floor()
//12 pontos carteira suspensa
checkVelocidade(76); //1 ponto
function checkVelocidade(velocidade){
  const velocidadeLimite = 70;
  const kmPorPonto = 5;
  if(velocidade < velocidadeLimite + kmPorPonto){
    console.log('Ok');
  }else{
    const pontos = Math.floor((velocidade - velocidadeLimite) / 5);
   if(pontos >= 12){
    console.log('Sua licença foi suspensa');
   } else{
    console.log(ponto,' Pontos');
   }
  }
}
//5 - 
//showNumbers(15)

 function showNumbers(limit){
    for(let i=0;i<=limit;i++){
        if(i%2==0) {
            console.log(i + ' EVEN');
        } else{
            console.log(i + ' ODD'); 
        }
    }
} 

 function showNumbers(limit){
    for(let i=0; i<=limit; i++){
        const message = (i%2==0) ? 'EVEN' : 'ODD'
        console.log(i, message); 
    }
}

//6 - crie uma função chamada countTruthy, que recebe um array
//e retorna vários elementos verdadeiros nesse array.
const array = [0,null,undefined,'',2,3];
console.log(countTruthy(array))/
function countTruthy(array){
let count = 0;
for( let value of array ){
if (value){
    count++;
    return count;
}
}
}

//7 - Nesse exercicio vou mostrar apenas valores que são string
const movie = {
    titulo: 'Avatar 2',
    ano: 2022,
    avaliacao: 4.5,
    diretor:'seila'
};
mostrarPropriedades(movie);

function mostrarPropriedades(obj){
    for(let key in obj){
        if(typeof obj[key] === 'string'){
            console.log(key, obj[key]);
        }
    }
}
// 8 - Nesse exercicio vamos pegar os multiplo de 3 e 5 e somar tudo

console.log(sum(10));
function sum(limit){
    let sum = 0;
    for(let i = 0; i <= limit; i++){
    if(i % 3 === 0 || i % 5 === 0 ){
    sum += i;

    return sum;
    }
    }
    }
    // 9 - mostrar estrelas
    showStars(5);

 function showStars(rows){
    for(i=1;i<=rows;i++){
        console.log("*".repeat(i))
    }
}