// var news = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://api.covid19india.org/updatelog/log.json",
//     "method": "GET"
// }


// $.ajax(news).done(function (response) 
// {
//     var my_json = JSON.stringify(response)
//     var filtered_json = find_in_object(JSON.parse(my_json), {website: 'yahoo'});
// });



var requestOptions1 = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.covid19india.org/v4/data.json",
    "method": "GET"
}
$.ajax(requestOptions1).done(function (response) {
    var res = response.KA;
    var death = res.total.deceased;
    var disch = res.total.recovered;
    var confirmed = res.total.confirmed;
    var other = res.total.other;
    var active = confirmed-disch-death-other;
    var rec= (disch/confirmed)*100;
    var act = (active/confirmed)*100;

    document.getElementById("k-confirmed").innerText = confirmed;
    document.getElementById("k-active").innerText = disch;
    document.getElementById("k-deaths").innerText = death;
    document.getElementById("rec-rate").innerText = "KARNATAKA RECOVERY RATE: "+rec.toFixed(2)+"%";
    document.getElementById("fat-rate").innerText = "KARNATAKA DEATH RATE: "+act.toFixed(2)+"%";
});


var requestOptions = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.covid19india.org/states_daily.json",
    "method": "GET"
}
$.ajax(requestOptions).done(function (data) {
    
    var path = data.states_daily
    var leng= Object.keys(path).length;
    date = data.states_daily[leng-1].date;

    
    dea = data.states_daily[leng-1].ka;
    rec = data.states_daily[leng-2].ka;
    conf = data.states_daily[leng-3].ka;
   
    document.getElementById("new-c").innerText = "+"+conf+" in last\n24 hours";
    document.getElementById("new-r").innerText = "+"+rec+" in last\n24 hours";
    document.getElementById("new-d").innerText = "+"+dea+" in last\n24 hours";
});



var requestOptions = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.covid19india.org/data.json",
    "method": "GET"
}
$.ajax(requestOptions).done(function (response) {

    var path = response.cases_time_series;
    var leng= Object.keys(path).length;


    var c = response.cases_time_series[leng-1].totalconfirmed;
    var r = response.cases_time_series[leng-1].totalrecovered;
    var d = response.cases_time_series[leng-1].totaldeceased;

    

    document.getElementById("tic").innerText = m(c,1);
    document.getElementById("tir").innerText = m(r,1);


    if (d>999999)
    {
        document.getElementById("tid").innerText = m(d,1);
    }
    else{
        document.getElementById("tid").innerText = d;
    }
    
});



var requestOptio = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.covid19india.org/v4/data.json",
    "method": "GET"
}
$.ajax(requestOptio).done(function (response) {

    
    var path = response.KA.meta.last_updated;
    console.log(path);
    var localDate = new Date(path);
   
    
    document.getElementById("last-updated").innerText = "LAST UPDATED AT: "+localDate;
});

function m(n,d)
    {
    x=(''+n).length,p=Math.pow,d=p(10,d);
    x-=x%3;
    num = Math.round(n*d/p(10,x))/d+" kMGTPE"[x/3];
    
    return num;} 

 


