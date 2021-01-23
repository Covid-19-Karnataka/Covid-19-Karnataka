$('#sta').find('tbody').html('');

var requestOptions1 = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.rootnet.in/covid19-in/stats/latest",
    "method": "GET"
}

$.ajax(requestOptions1).done(function (response) 
{

    var path = response.data.regional;
    // console.log(path);
    // var path = response.Karnataka.districtData;
    var leng= Object.keys(path).length;
    console.log(leng);
    console.log(path);

   

    for (i=0; i<leng; i++)
    {
    

    
        var statename = path[i].loc;
        var scon = path[i].totalConfirmed;
        var c = path[i].discharged;
        var dea = path[i].deaths; 
    
        

        document.getElementById("sta").innerHTML += 
        '<tr><td class="bg-gray-200 text-xs border px-2 py-2 hover:bg-primary hover:text-white"><a class="s-n" style="display: block;">'+statename+'</a></td><td class="text-center border px-1 py-2" >'+scon+'</td><td class="text-center border px-1 py-2">'+c+'</td><td class="text-center border px-1 py-2">'+dea+'</td></tr>';
    }
    
});




