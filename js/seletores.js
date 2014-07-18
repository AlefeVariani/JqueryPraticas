/*
$(document).ready(function() {

});

*/
$(function() { 

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


});



