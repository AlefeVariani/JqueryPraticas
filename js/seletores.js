/*
$(document).ready(function() {

});

*/
$(function() { 

// .text() pega o texto do elemento - Ex: <em>Span</em> :pega o "Span" 	
// .val() pega o value(valor) do elemento - Ex: <option value="1">Opcao 1</option> :pega o "1" 	

console.log($('p.comment-meta *')); // Pega todos os elementos dentro de p.comment-meta

console.log($('div')); // Pega todas tags div

console.log($('li:nth-child(2)').text()); // Pega o 2º elemento do li

console.log($('li:first-child').text()); // Pega o 1º elemento(filho) do li que existir

console.log($('div:empty')); // Pega a 1º div que estiver vazia

console.log($('input:enabled')); // Pega elemento input que estiver ativo

console.log($('input:disabled')); // Pega elemento input que estiver inativo

console.log($('input:checked')); // Pega elemento input que estiver selecionado 

console.log($('option:selected').val()); // Pega opção que estiver selecionado no select

console.log($('p strong').text()); // Pega elemento p que tenha filho strong

console.log($('p > em').text()); // Pega elemento em dentro de p

console.log($('h2 + p').text()); // Pega p imediatamente precedido de h2 

console.log($('h1 ~ ul').text()); // Pega ul que seja precedido de h1 

console.log($('h1,p,a')); //Pega todos os elementos informados, separados apenas por virgula

console.log($(':checkbox[checked]')); //Pega elemento checkbox com atributo checked

console.log($('[id^=div-vazia]')); //Pega atributo id que inicie com o value div-vazia

console.log($('[id$=div]')); //Pega atributo id que termine com o value div-vazia

console.log($('dd[class*=o]').text()); // Pega atributo dd que possua a class com o value "o" 

console.log($('dd[class=cores]').text()); // Pega atributo dd que possua a class cores

console.log($('option:even').text()); // Pega os elementos "impares" que existem no option

console.log($('option:odd')); // Pega os elementos "pares" que existem no option

//Duas formas de pegar o elemento
console.log($('option:eq(1)').text()); // Pega o elemento de indice 1
console.log($('option:nth(2)').text()); // Pega o elemento de indice 2 

console.log($('li:gt(1)').text()); // Pega o elemento que seja maior que o indice 2 

console.log($('li:lt(2)').text()); // Pega o elemento que seja menor que o indice 2 

console.log($('li:first').text()); // Pega o primeiro elemento do li - Equivalente a :eq(0). 

console.log($('li:last').text()); // Pega o ultimo elemento do li 

console.log($('h1:parent')); //Pega h1 que tenha filhos

console.log($('li:contains("Item 1")').text()); //Pega li que tenha texto Item 1

console.log($('h2:visible').text()); //Pega todos h2 que sejam visíveis

console.log($('h2:hidden').text()); //Pega todos h2 que sejam não-visíveis

});



