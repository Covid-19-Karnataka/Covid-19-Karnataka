var totalconfirmed;
var recovery;
var faltity;
var active;


var requestOptions1 = {
  "async": true,
  "crossDomain": true,
  "url": "https://corona-karnataka-2020.firebaseio.com/stats.json",
  "method": "GET"
}
$.ajax(requestOptions1).done(function (response) {

  resLength = Object.keys(response).length;
  var keys = Object.keys(response);
  var latest = keys[resLength-1];
  var res = response[latest];

  var faltity = res.total_deaths;
  var recovery = res.total_discharge;
  var totalconfirmed = res.total_positive;
  var active = totalconfirmed-recovery-faltity;

  google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Total recovery', recovery ],
          ['Confirmed cases', active+faltity]
        ]);

        var data2 = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Total Confirmed', totalconfirmed],
          ['Death cases', faltity]
        ]);

        var options = { 
          pieHole: 0,
        };

        var chart = new google.visualization.PieChart(document.getElementById('f_rate'));
        chart.draw(data, options);

        var chart = new google.visualization.PieChart(document.getElementById('r_rate'));
        chart.draw(data2, options);
    }


});

    grab();

    function grab() {
      /* Promise to make sure data loads */
      return new Promise((resolve, reject) => {
          $.ajax({
              url: "https://corona-karnataka-2020.firebaseio.com/stats.json",
              method: "GET",
              dataType: 'JSON',
              success: function(data) {
                  resolve(data)
              },
              error: function(error) {
                  reject(error);
              }
          })
      })
  }
  

  $(document).ready(function() {
      grab().then((data) => {
        //   console.log('Recieved our data', data);
          // var path = data.states_daily
          // var leng= Object.keys(path).length;
        //   console.log(leng);
          var leng = Object.keys(data).length;
          var allDAtes = Object.keys(data);
          let regions = [];
          let value = [];


          
          try {
            for(i=0; i<leng; i+=3)
            {

                date = allDAtes[i];
                active = data[date].today_positive;
                regions.push(date);
                value.push(active)
            }

         

              let chartdata = {

                
                  labels: [...regions],
                  
                  datasets: [{
                      label: 'Daily Confirmed Cases',
                      backgroundColor: 'rgb(0,0,0,0)',
                      borderColor: ' blue',
                      hoverBackgroundColor: 'blue',
                      hoverBorderColor: 'blue',
                      data: [...value],
                  }],
                  fill: false
              };

              let ctx = $("#myChart");
        

              let lineChart = new Chart(ctx, 
                {
                  type: 'line',
                  data: chartdata,
                  xAxis: {
                    visible: false
                },
            
                yAxis: {
                    title: {
                        text: 'Fruit'
                    },
                    visible: false
                }
                });

          } catch (error) {
              console.log('Error parsing JSON data', error)
          }

      }).catch((error) => {
          console.log(error);
      })
  });

  $(document).ready(function() {
    grab().then((data) => {
      //   console.log('Recieved our data', data);
        var leng = Object.keys(data).length;
        var allDAtes = Object.keys(data);
        let regions = [];
        let value = [];


        
        try {
          for(i=2; i<leng; i+=3)
          {

            date = allDAtes[i];
            active = data[date].today_deaths;
            regions.push(date);
            value.push(active)
          }

         

            let chartdata = {

              
                labels: [...regions],
                
                datasets: [{
                    label: 'Daily Death Cases',
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    borderColor: ' rgb(190, 9, 9)',
                    hoverBackgroundColor: 'blue',
                    hoverBorderColor: 'blue',
                    data: [...value],
                }],
                fill: false
            };

            let ctx = $("#myChart2");
      

            let lineChart = new Chart(ctx, 
              {
                type: 'line',
                data: chartdata,
                xAxis: {
                  visible: false
              },
          
              yAxis: {
                  title: {
                      text: 'Fruit'
                  },
                  visible: false
              }
              });

        } catch (error) {
            console.log('Error parsing JSON data', error)
        }

    }).catch((error) => {
        console.log(error);
    })
});
    