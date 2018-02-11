var google, document;
google.charts.load('current', {'packages': ['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {
    // Create the data table.
    "use strict";
    
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([ ['Yes', 1], ['No', 20] ]);

    // Set chart options
    var options = {
        'backgroundColor': 'transparent',
        'width': 500,
        'height': 300,
        'colors': ['#d68a46', '#d79c6a'],
        'legend': {position: 'top', alignment: 'center', textStyle: {color: 'white', fontName: 'Arial', fontSize: 14}},
        'pieSliceBorderColor': 'transparent',
        'pieSliceText': 'none'
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
    
    $('.chart_div').prepend(
        '<h6>' + 'Hello World?' + '</h6>'
    );
    
    $('.chart_div').append(
        '<div class="chart-buttons">' + 
        '<button class="btn btn-chart btn-chart-yes" type="button"> Yes </button>' +
        '<button class="btn btn-chart btn-chart-no" type="button"> No </button>'+ '</div>'
    );
}