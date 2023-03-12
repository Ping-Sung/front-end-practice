const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const inputBtn = document.getElementById('input-btn')
const deleteBtn = document.getElementById('delete-btn')
const tabBtn = document.getElementById('tab-btn')
const inputEl = document.getElementById('input-el')
const ulEl = document.getElementById('ul-el')

let myLeads = []

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
    // console.log(myLeads)
}

tabBtn.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        saveleads(tabs[0].url)
    })
    
})

deleteBtn.addEventListener('dblclick', function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener('click', function(){
    saveleads(inputEl.value)
    inputEl.value = ""
})

function saveleads(site) {
    myLeads.push(site)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
}

function render(leads) {
    listItem = ""
    for (let i = 0; i < leads.length; i++){
        // li = '<li><a href="' + myLeads[i] + '" target="_blank">' + myLeads[i] + '<a></li>'

        li = `
            <li>
                <a href="${leads[i]}" target="_blank">
                    ${leads[i]}
                <a>
            </li>
        `
        listItem += li
    }
    ulEl.innerHTML = listItem
}