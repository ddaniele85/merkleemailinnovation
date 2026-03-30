$(document).ready(function(){
    
   google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Study',     11],
          ['Playing',      2],
          ['Watch TV',  2],
          ['Tution', 2],
          ['Sleep',  7]
        ]);

        var options = {
          title: 'My Day Schedule'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      } 
    
    
});