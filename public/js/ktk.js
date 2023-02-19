$('#districts').find('tbody').html('');

var requestOptions1 = {
    "async": true,
    "crossDomain": true,
    "url": "https://corona-karnataka-2020.firebaseio.com/stats.json",
    "method": "GET"
}

$.ajax(requestOptions1).done(function (response) 
{

    
    var resLength = Object.keys(response).length;
    var keys = Object.keys(response);
    var latest = keys[resLength-1];
    var res = response[latest];
    var dist = res.KA;
    var leng = Object.keys(dist).length-1;
    var path = Object.keys(dist);


    for (i=0; i<leng; i++)
    {
        var distname = path[i];
        var confirmed = dist[distname].today_positive;
        // console.log(confirmed)
        var recovered = dist[distname].today_discharge;
        var death = dist[distname].today_deaths;
    
        

        document.getElementById("districts").innerHTML += 
        '<tr class="slayer_'+i+'"><td class="bg-gray-200 text-xs border px-2 py-2 hover:bg-primary hover:text-white"><a class="s-n" style="display: block; font-weight:600;">'+distname+'</a></td><td class="text-center border px-1 py-2" >'+confirmed+'</td><td class="text-center border px-1 py-2">'+recovered+'</td><td class="text-center border px-1 py-2">'+death+'</td></tr>';
    }
    
});



