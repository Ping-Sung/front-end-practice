let inputEl = document.getElementById('input-element')
let lengthEl = document.getElementById('length')
let valumnEl = document.getElementById('valumn')
let massEl = document.getElementById('mass')

addEventListener("input", function() {
    console.log(inputEl.value)
    convertLength(inputEl.value)
    convertValumn(inputEl.value)
    convertMass(inputEl.value)
})

function convertLength(num) {
    lengthEl.innerHTML = 
    `
    ${num} meters = ${Math.round((num*3.28084) * 1000) / 1000} feet | ${num} feet = ${Math.round((num / 3.28084) * 1000) / 1000} meters
    `
}

function convertValumn(num) {
    valumnEl.innerHTML = 
    `
    ${num} liters = ${Math.round((num*0.2641) * 1000) / 1000} gallons | ${num} gallons = ${Math.round((num / 0.2641) * 1000) / 1000} liters
    `
}

function convertMass(num) {
    massEl.innerHTML = 
    `
    ${num} kilos = ${Math.round((num*2.20462262) * 1000) / 1000} pounds | ${num} pounds = ${Math.round((num / 2.20462262) * 1000) / 1000} kilos
    `
}