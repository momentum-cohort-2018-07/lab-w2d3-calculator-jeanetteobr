document.querySelector('.clear').addEventListener('click', function () {
    document.querySelector('.display').innerHTML = ''
})

document.querySelector('.num-7').addEventListener('click', function () {
    document.querySelector('.display').innerHTML += '7'
})

document.querySelector('.num-8').addEventListener('click', function () {
    document.querySelector('.display').innerHTML += '8'
})

document.querySelector('.num-9').addEventListener('click', function () {
    document.querySelector('.display').innerHTML += '9'
})

document.querySelector('.num-4').addEventListener('click', function () {
    document.querySelector('.display').innerHTML += '4'
})

document.querySelector('.num-5').addEventListener('click', function () {
    document.querySelector('.display').innerHTML += '5'
})

document.querySelector('.num-6').addEventListener('click', function () {
    document.querySelector('.display').innerHTML += '6'
})

document.querySelector('.num-1').addEventListener('click', function () {
    document.querySelector('.display').innerHTML += '1'
})

document.querySelector('.num-2').addEventListener('click', function () {
    document.querySelector('.display').innerHTML += '2'
})

document.querySelector('.num-3').addEventListener('click', function () {
    document.querySelector('.display').innerHTML += '3'
})

document.querySelector('.num-0').addEventListener('click', function () {
    document.querySelector('.display').innerHTML += '0'
})

document.getElementById('decimal').addEventListener('click', function () {
    document.querySelector('.display').innerHTML += '.'
})

document.getElementById('multiply').addEventListener('click', function () {
    document.querySelector(".display").innerHTML += '*'
})

document.getElementById('divide').addEventListener('click', function () {
    document.querySelector('.display').innerHTML += '/'
})

document.getElementById('minus').addEventListener('click', function () {
    document.querySelector('.display').innerHTML += '-'
})

document.getElementById('equals').addEventListener('click', function () {
    document.querySelector('.display').innerHTML = eval(document.querySelector('.display').innerHTML)
})

document.getElementById('plus').addEventListener('click', function () {
    document.querySelector('.display').innerHTML += '+'
})

