var requestOptions1 = {
    "async": true,
    "crossDomain": true,
    "url": "https://www.google.com/covid19_info?gl=in&hl=en",
    "method": "GET"
}
$.ajax(requestOptions1).done(function (response) 
{
    var path = response.alert;
    document.getElementById("od").innerText = response.healthInfo[0].aspect[0].description;

    document.getElementById("os1").innerText = response.healthInfo[0].aspect[0].chunk[0].headlineText.headline;
    document.getElementById("os").innerText = response.healthInfo[0].aspect[0].chunk[0].headlineText.text;
    document.getElementById("os-h").href = response.healthInfo[0].aspect[0].aspectUrl;

    document.getElementById("ot3").innerText = "Symptoms";
    document.getElementById("os3").innerText = response.healthInfo[1].aspect[0].chunk[0].headlineText.text;
    document.getElementById("oh3").href = response.healthInfo[1].aspect[0].aspectUrl;


    document.getElementById("ot4").innerText = "Prevention";
    document.getElementById("os4").innerText = response.healthInfo[2].aspect[0].chunk[0].headlineText.text;
    document.getElementById("oh4").href = response.healthInfo[2].aspect[0].aspectUrl;


    document.getElementById("ot5").innerText = "Treatment";
    document.getElementById("os5").innerText = response.healthInfo[3].aspect[0].chunk[0].headlineText.text;
    document.getElementById("oh5").href = response.healthInfo[3].aspect[0].aspectUrl;

    console.log(response.healthInfo[1].aspect[0].aspectUrl);
});