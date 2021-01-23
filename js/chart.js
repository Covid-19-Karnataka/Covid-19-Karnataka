var totalconfirmed;
var recovery;
var faltity;
var active;


var requestOptions1 = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.covid19india.org/v4/data.json",
  "method": "GET"
}
$.ajax(requestOptions1).done(function (response) {
  var res = response.KA;
  var faltity = res.total.deceased;
  var recovery = res.total.recovered;
  var totalconfirmed = res.total.confirmed;
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
              url: "https://api.covid19india.org/states_daily.json",
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
          var path = data.states_daily
          var leng= Object.keys(path).length;
        //   console.log(leng);
          let regions = [];
          let value = [];


          
          try {
            for(i=0; i<leng; i+=3)
            {

                date = data.states_daily[i].date;
                active = data.states_daily[i].ka;
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
        var path = data.states_daily
        var leng= Object.keys(path).length;
       
        let regions = [];
        let value = [];


        
        try {
          for(i=2; i<leng; i+=3)
          {

              date = data.states_daily[i].date;
              death = data.states_daily[i].ka;
              regions.push(date);
              value.push(death)
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
    