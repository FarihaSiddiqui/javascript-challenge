// // Bonus Exercise 
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
   // Appending a cell to the row for each value
    var cell = row.append("td");
    cell.text(value);
    });
});
};
build(tableData);
// Create event handlers for clicking the button or pressing the enter key
d3.selectAll(".filter").on("change" , modifyFilter)

var filterDict = {};

function modifyFilter(){

    var changeElement = d3.select(this).select("input")
    var elementid = changeElement.attr("id");
    var elementValue = changeElement.property("value"); 
    if (elementValue) {
        filterDict[elementid] = elementValue;
    }
    else {
        delete filterDict[elementid];
    }
    runEnter();
}

function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    var filterData = tableData;

    Object.entries(filterDict).forEach(function([key, value]) {
        filterData = filterData.filter(row => row[key] === value);
    });

    build(filterData);
};

var button = d3.select("#button");


button.on ("click", refreshTable);

function refreshTable () {
    build(tableData)
};