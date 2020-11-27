/*var nome = "Diego Cezarino";
var idade = 29;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";
alert(nome + " tem " + idade + " anos");
alert(idade + idade2);
console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Japão","Brasil"));
alert(frase.replace("Japão","Brasil"));
console.log(frase.toUpperCase);
console.log(frase.toLowerCase);*/

/*var lista = ["maça", "pera", "laranja"];
lista.push("uva");
//lista.pop();
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
/*cosole.log(lista.toString());*/

/*console.log(lista[0]);
console.log(lista.toString()[0]);
console.log(lista.join(" - "));

var fruta = {nome: "maça", cor: "vermelha"};
console.log(fruta.nome);
alert(fruta.cor);

var frutas = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor: "roxa"}];
console.log(frutas);
alert(frutas[1].nome);*/

// prompt -> coleta a informação que o usuário digitou
/*var idade = prompt("Qual sua idade");
if (idade >= 18){
    alert("Maior de Idade");
} else {
    alert("Menor de Idade");
}*/

/*var count = 0;
while (count < 5){
    //console.log(count);
    alert(count);
    //count = count + 1;
    count++;
};*/

/*var count;
for (count = 0; count <= 5; count++){
    alert(count);
};*/

/*
var d = new Date();
alert(d.getMonth());
alert(d.getMinutes());
alert(d.getDay());
*/


function clicar(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
    
}

function redirecionar(){
    window.open("https://www.uol.com.br");
    window.location.href = "https://www.uol.com.br";
}


function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";  
    elemento.innerHTML = "Obrigado por passar o mouse aqui";  
    //alert("trocar texto");

}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada!")
}

function funcaoChange(elemento){
    console.log(elemento.value);

}


/*function soma(n1, n2){
    return n1 + n2;
}*/

/*function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(soma(5,10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/

/*
function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true;

    } else {
        validar = false;
    }
return validar;

}

var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));

*/