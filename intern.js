google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['pdt 1',     21],
          ['pdt 2',      2],
          ['pdt 3',  2],
          ['pdt 4', 2],
          ['pdt 5',    7]
        ]);

        var options = {
          title: 'Products',
          is3D: true,
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
        chart.draw(data, options);
      }
   
      var clockElement = document.getElementById('clock');

      function clock() {
          var date = new Date().toLocaleTimeString();
  
          // Replace '400px' below with where you want the format to change.
          if (window.matchMedia('(max-width: 400px)').matches) {
              // Use this format for windows with a width up to the value above.
              clockElement.textContent = date.toLocaleString();
          } else {
              // While this format will be used for larger windows.
              clockElement.textContent = date.toString();
          }
      }
  
      setInterval(clock, 1000);