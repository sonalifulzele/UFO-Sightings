// from data.js
var tableData = data;
var tbody = d3.select("tbody");
var filterButton = d3.select("#filter-btn");
var resetButton = d3.select("#reset-btn");


tableData.forEach((UFOSightingsData) => {
    var row = tbody.append("tr");
    Object.entries(UFOSightingsData).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
});

function filterData() {

    var displayTable = document.getElementById('ufo-table');
    var tableRows = displayTable.getElementsByTagName('tr');
    var rowCount = tableRows.length;

    for (var x=1 ; x <= rowCount; x++) {
        displayTable.deleteRow(tableRows[x]);
    }

    // Select the input elements and get the raw HTML node
    var InputDate = d3.select("#fDate");
    var InputCountry = d3.select("#fCountry");
    var InputState = d3.select("#fState");    
    var InputCity = d3.select("#fCity");
    var InputShape = d3.select("#fShape");


    // Get the value property of the input elements
    var inputDateValue = InputDate.property("value");
    var inputCountryValue = InputCountry.property("value").toLowerCase();
    var inputStateValue = InputState.property("value").toLowerCase();
    var inputCityValue = InputCity.property("value").toLowerCase();
    var inputShapeValue = InputShape.property("value").toLowerCase();
    
    var filteredData = tableData;

    if(inputDateValue!=''){
        filteredData = filteredData.filter(sightings => sightings.datetime === inputDateValue);
    }
    if(inputCountryValue!=''){
        filteredData = filteredData.filter(sightings => sightings.country === inputCountryValue);
    }
    if(inputStateValue!=''){
        filteredData = filteredData.filter(sightings => sightings.state === inputStateValue);
    }
    if(inputCityValue!=''){
        filteredData = filteredData.filter(sightings => sightings.city === inputCityValue);
    }
    if(inputShapeValue!=''){
        filteredData = filteredData.filter(sightings => sightings.shape === inputShapeValue);
    }
    
    //Format the values
    filteredData.forEach((UFOSightingsData) => {
        var row = tbody.append("tr");
        Object.entries(UFOSightingsData).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
    });

}

filterButton.on("click", filterData());
resetButton.on("click", function(){
    document.getElementById('fDate').value = '';
    document.getElementById('fCountry').value = '';
    document.getElementById('fState').value = '';
    document.getElementById('fCity').value = '';
    document.getElementById('fShape').value = '';
    filterData();
});
