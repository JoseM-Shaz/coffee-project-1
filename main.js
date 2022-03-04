"use strict"

// function creates tables rows in html format
// function renderCoffee(coffee) {
//     var html = '<tr class="coffee">';
//     html += '<td>' + coffee.id + '</td>';
//     html += '<td>' + coffee.name + '</td>';
//     html += '<td>' + coffee.roast + '</td>';
//     html += '</tr>';
//
//     return html;
// }
// function renderCoffee() {
// }
// renderCoffee()



//function loops through the individual objects in the 'coffees' array and send them to the function renderCoffee
// function renderCoffees(coffees) {
//     var html = '';
//     for(var i = coffees.length - 1; i >= 0; i--) {
//         html += renderCoffee(coffees[i]);
//     }
//     return html;
// }

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
    allCoffees.innerHTML = "";
    for (var i = 0; i < filteredCoffees.length; i++) {
        allCoffees.innerHTML += "<div class='individual-coffees'>" + "<h3>" + coffees[i].name + "</h3>" + "<span>" + coffees[i].roast + "</span>" + "</div>";
    }
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
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var allCoffees = document.querySelector(".coffee-div");
var searchValue = document.querySelector(".search-value");
var searchButton = document.querySelector("#search-button");
var addCoffeeName = document.querySelector("#coffee-name");
var addCoffeeRoast = document.querySelector("#coffee-roast");
var addCoffeeButton = document.querySelector("#add-coffee-button")

//for loop shows list of coffees in ascending order in single div
function displayCoffees() {
    for (var i = 0; i < coffees.length; i++) {
        allCoffees.innerHTML += "<div class='individual-coffees'>" + "<h3>" + coffees[i].name + "</h3><hr>" + "<span>" + coffees[i].roast + "</span>" + "</div>";
    }
}
displayCoffees();

//function below sorts through the coffees array and searches for matches provided by the user in the search box
function searchCoffee(e) {
    e.preventDefault();
    allCoffees.innerHTML = "";
    for (var i = 0; i < coffees.length; i++) {
        if (coffees[i].name.toLowerCase().includes(searchValue.value.toLowerCase())) {
            allCoffees.innerHTML += "<div class='individual-coffees'>" + "<h3>" + coffees[i].name + "</h3><hr>" + "<span>" + coffees[i].roast + "</span>" + "</div>";
        }
    }
}


//function below adds coffee object to the coffees array based on the user input
function addCoffee(e) {
    e.preventDefault();
    // coffees.push({id: (coffees.length + 1), name: addCoffeeName.value, roast: addCoffeeRoast.value});
    if (addCoffeeRoast.value !== "" && addCoffeeName.value !== "") {
        coffees.push({id: (coffees.length + 1), name: addCoffeeName.value, roast: addCoffeeRoast.value});
        console.log(coffees);
        allCoffees.innerHTML = "";
        displayCoffees();
    } else {
        alert("Please add a name and roast to the coffee to be added.")
    }
}

//code below reacts to the submit button being clicked in order to display different coffee information

submitButton.addEventListener('click', updateCoffees);

//code below reacts to the input provided by the user in the search box
searchValue.addEventListener('keyup', searchCoffee);

//code below runs the searchCoffee function once the search button is clicked
searchButton.addEventListener('click', searchCoffee);

//code below runs addCoffee function once the add coffee button is clicked
addCoffeeButton.addEventListener("click", addCoffee)


