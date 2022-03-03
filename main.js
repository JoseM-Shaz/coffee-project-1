"use strict"

// function creates tables rows in html format
function renderCoffee(coffee) {
    var html = '<tr class="coffee">';
    html += '<td>' + coffee.id + '</td>';
    html += '<td>' + coffee.name + '</td>';
    html += '<td>' + coffee.roast + '</td>';
    html += '</tr>';

    return html;
}
// function renderCoffee() {
// }
// renderCoffee()



//function loops through the individual objects in the 'coffees' array and send them to the renderCoffee function
function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

//takes input from the html form and uses it to display coffee information
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

//the variables below are being assigned to specific html elements
var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var coffeeName = document.querySelector(".name")
var coffeeRoast= document.querySelector(".roast")
var allCoffees = document.querySelector(".coffee-div")


for (var i = 0; i < coffees.length; i++) {
    allCoffees.innerHTML += "<h3>" + coffees[i].name + "</h3>";
    allCoffees.innerHTML += "<p>" + coffees[i].roast + "</p>";
    allCoffees.innerHTML += "<br>"
}


//code below runs the function that populates data to the table element
tbody.innerHTML = renderCoffees(coffees);

//code below reacts to the submit button being clicked in order to display different coffee information
submitButton.addEventListener('click', updateCoffees);
