// from data.js
var tableData = data;

// YOUR CODE HERE!
// Reference to the table body
var tbody = d3.select("tbody");

function build(tableData) {
    tbody.html("");
    tableData.forEach((sightingsData) => {
    var row = tbody.append("tr");
    // Adding data to each table row
    Object.entries(sightingsData).forEach(function([key, value]) {
    // console.log(key, value);
    // Appending a cell to the row for each value
    var cell = row.append("td");
    cell.text(value);
    });
});
};
build(tableData);

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit",runEnter);

// Create the function to run for both events
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    var filteredData = tableData.filter(sightings => sightings.datetime === inputValue);
    console.log(filteredData);

    var cell = d3.select("tbody");
    cell.html("");

    filteredData.forEach(function(fData) {
        var row = tbody.append("tr");
        // Adding data to each table row
        Object.entries(fData).forEach(function([key, value]) {
        console.log(key, value);
        // Appending a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
        });
    });

};

