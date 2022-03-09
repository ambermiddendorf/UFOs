// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    //clear out table data
    tbody.html("");
    //Loop through each object in the data
    //append a row and cells for each value in the row
    data.forEach((dataRow)=> {
        let row = tbody.append("tr");
        //loop through each field in the dataRow
        //add each value as a table cell (td)
        Object.values(dataRow).forEach((val)=>{
            let cell = row.append("td");
            cell.text(val);
    }
    );
    });
};
