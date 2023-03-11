// Create two variables:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field
let myLeads = []

const inputBtn = document.getElementById('input-btn')
const inputEl = document.getElementById('input-el')
const ulEl = document.getElementById('ul-el')

inputBtn.addEventListener('click', function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    console.log(ulEl)
    renderLeads()
})

function renderLeads() {
    listItem = ""
    for (let i = 0; i < myLeads.length; i++){
        // li = '<li><a href="' + myLeads[i] + '" target="_blank">' + myLeads[i] + '<a></li>'

        li = `
            <li>
                <a href="${myLeads[i]}" target="_blank">
                    ${myLeads[i]}
                <a>
            </li>
        `
        listItem += li
    }
    ulEl.innerHTML = listItem
}