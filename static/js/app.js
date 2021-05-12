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

// Function to filter data
function handleClick() {
    // Variable to hold date
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    // Adding filter: if there is a date look through rows and find date
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    // Rebuild table with filtered data
    // If no filter is present then it will use the original data
    buildTable(filteredData);

}

// Telling the script to "listen" for a click of the Filter button 
// #filter-btm is from the HTML
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table on page load
buildTable(tableData);