google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Instagram', 'Facebook', 'Youtube'],
          ['2019', 474200, 580000, 260000],
          ['2020', 546000, 717070, 375550],
          ['2021', 308060, 984820, 528700],
          ['2022', 501230, 928540, 695940]
        ]);

        var options = {
          chart: {
            title: '',
            subtitle: '',
          }
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }