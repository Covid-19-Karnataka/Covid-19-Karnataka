var requestOptions1 = {
    "async": true,
    "crossDomain": true,
    "url": "https://corona-karnataka-2020.firebaseio.com/stats.json",
    "method": "GET"
}
$.ajax(requestOptions1).done(function (response) {
    var resLength = Object.keys(response).length;
    var keys = Object.keys(response);
    var latest = keys[resLength-1];
    var res = response[latest];
    console.log(res)

    var death = res.total_deaths;
    var disch = res.total_discharge;
    var confirmed = res.total_positive;
    var other = res.total_other;
    var active = confirmed-disch-death-other;
    var rec= (disch/confirmed)*100;
    var act = (active/confirmed)*100;

    document.getElementById("k-confirmed").innerText = m(confirmed,4)
    document.getElementById("k-active").innerText = m(disch,3);
    document.getElementById("k-deaths").innerText = m(death, 3);
    document.getElementById("rec-rate").innerText = "KARNATAKA RECOVERY RATE: "+rec.toFixed(2)+"%";
    document.getElementById("fat-rate").innerText = "KARNATAKA DEATH RATE: "+act.toFixed(2)+"%";
});


var requestOptions = {
    "async": true,
    "crossDomain": true,
    "url": "https://corona-karnataka-2020.firebaseio.com/stats.json",
    "method": "GET"
}
$.ajax(requestOptions).done(function (response) {

    resLength = Object.keys(response).length;
    var keys = Object.keys(response);
    var latest = keys[resLength-1];
    var res = response[latest];
    
    dea = res.today_deaths;
    rec = res.today_discharge;
    conf = res.today_positive;
   
    document.getElementById("new-c").innerText = "+"+conf+" in last\n24 hours";
    document.getElementById("new-r").innerText = "+"+rec+" in last\n24 hours";
    document.getElementById("new-d").innerText = "+"+dea+" in last\n24 hours";
});



// var requestOptions = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://api.covid19india.org/data.json",
//     "method": "GET"
// }
// $.ajax(requestOptions).done(function (response) {

//     var path = response.cases_time_series;
//     var leng= Object.keys(path).length;


//     var c = response.cases_time_series[leng-1].totalconfirmed;
//     var r = response.cases_time_series[leng-1].totalrecovered;
//     var d = response.cases_time_series[leng-1].totaldeceased;

    

//     document.getElementById("tic").innerText = m(c,1);
//     document.getElementById("tir").innerText = m(r,1);


//     if (d>999999)
//     {
//         document.getElementById("tid").innerText = m(d,1);
//     }
//     else{
//         document.getElementById("tid").innerText = d;
//     }
    
// });



var requestOptio = {
    "async": true,
    "crossDomain": true,
    "url": "https://corona-karnataka-2020.firebaseio.com/stats.json",
    "method": "GET"
}
$.ajax(requestOptio).done(function (response) {

    resLength = Object.keys(response).length;
    var keys = Object.keys(response);
    var latest = keys[resLength-1];
    var localDate = new Date(latest);
   
    
    document.getElementById("last-updated").innerText = "LAST UPDATED AT: "+localDate;
});

function m(n,d)
    {
    x=(''+n).length,p=Math.pow,d=p(10,d);
    x-=x%3;
    num = Math.round(n*d/p(10,x))/d+" kMGTPE"[x/3];
    
    return num;} 

 


