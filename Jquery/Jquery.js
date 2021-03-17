/*$(document).ready(function() {
    alert('Jquery esta funcionando')
})*/

$('.titulo').click(function() {
    $(this).css('color','red') 
})
$('.opcion1').dblclick(function(){
    $(this).css('background','green')
})

$('.opcion2').mouseover(function(){
    $(this).css('font-size','60px')
})

    $('.opcion2').mouseout(function(){
        $(this).css('font-size','18px')
    })

$('.opcion3').click(function(){
    $(this).css('color','pink') 
}) 

$('.opcion4').mousemove(function(){
    $(this).css('cursor','none')
})   

$('.opcion5').hover(function changein() {
    $(this).css('background','white')  
})

$('.opcion5').hover(function changeout() {
    $(this).css('color','red')
})

$('.opcion6').mousemove(function() {
    $(this).css('background','yellow')  
})

$('.opcion6').mouseout(function() {
    $(this).css('background','blue')
})

$('.opcion7').mouseenter(function() {
    $(this).css('color','purple')
})

$('.opcion8').mouseover(function(){
    $(this).css('font-size','10px')
})

$('.opcion8').mouseout(function(){
    $(this).css('font-size','18px')
})

$('.opcion9').dblclick(function() {
    $(this).css('color','green')
})

$('.opcion10').mouseover(function(){
    $(this).css('font-size','50px')
})

$('.opcion10').mouseout(function(){
        $(this).css('font-size','18px')
})
$('.opcion10').mouseenter(function() {
    $(this).css('color','orange')
})

$('.opcion11').toggle(function() {
    $(this).css('color','green')
})

$('.evento1').mouseover(function() {
    $(this).css('background','purple')
    $(this).css('color','green')
})
$('.evento1').mouseout(function() {
    $(this).css('background','gray')
})

$('.evento2').click(function() {
    $(this).css('background','violet')
})

$('.evento3').mouseout(function() {
    $(this).css('background','green')
})
$('.boton').click(function() {
    $('.evento3').hide('slow')
})
$('.boton').dblclick(function() {
    $('.evento3').show('slow')
})

