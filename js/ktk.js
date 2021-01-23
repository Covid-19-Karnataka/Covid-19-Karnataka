$('#districts').find('tbody').html('');

var requestOptions1 = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.covid19india.org/state_district_wise.json",
    "method": "GET"
}

$.ajax(requestOptions1).done(function (response) 
{

    var path = response.Karnataka.districtData;
    var leng= Object.keys(path).length;
    console.log(leng);


    for (i=0; i<leng; i++)
    {

        var keys = Object.keys(path);
        var distname = keys[i];
        var confirmed = path[distname].confirmed;
        var recovered = path[distname].recovered;
        var death = path[distname].deceased;
    
        

        document.getElementById("districts").innerHTML += 
        '<tr class="slayer_'+i+'"><td class="bg-gray-200 text-xs border px-2 py-2 hover:bg-primary hover:text-white"><a class="s-n" style="display: block; font-weight:600;">'+distname+'</a></td><td class="text-center border px-1 py-2" >'+confirmed+'</td><td class="text-center border px-1 py-2">'+recovered+'</td><td class="text-center border px-1 py-2">'+death+'</td></tr>';
    }
    
});



