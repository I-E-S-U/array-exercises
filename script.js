let beatles = ['John', 'Paul', 'George', 'Ringo']
document.getElementById('original').innerHTML = beatles

// Exercise 1
beatles = ['Paul', 'Ringo']
document.getElementById('array-ex1').innerHTML = beatles

// Exercise 2
beatles = ['Ian', 'Paul', 'Ringo']
document.getElementById('array-ex2').innerHTML = beatles

// Exercise 3 
beatles[4] = 'Willyman'
document.getElementById('array-ex3').innerHTML = beatles
// As the indexing of the array begins at 0 I add a 4th and a 5th value by using 4 as an index number for the new value. Thus tehre is an empty value on index 3

// Exercise 4 
beatles[10] = 'Coochieman'
document.getElementById('array-ex4').innerHTML = beatles

// Exercise 5
document.getElementById('array-ex5').innerHTML = `The array has length ${beatles.length}`

// Exercise 6
let beatles1 = beatles.sort()
document.getElementById('array-ex6').innerHTML = beatles1

// Array-list
let text = `<ul>`
beatles.forEach(listFunction)
text += `</ul>`
document.getElementById('array-list').innerHTML = text

function listFunction(string) {
    text += `<li>${string}</li>`
}