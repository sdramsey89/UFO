// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Function to build table from data
function buildTable(data) {
    // Clear out table by passing nothing
    tbody.html("");

    // For loop to go through each row of data
    data.forEach((dataRow) => {
        // Adding a table row
        let row = tbody.append("tr");
        // Adding data to table
        Object.values(dataRow).forEach((val) => {
            // Appending data
            let cell = row.append("td");
            // Adding values
            cell.text(val);
        });
    });
}