
var requestOptions1 = {
    "async": true,
    "crossDomain": true,
    "url": "https://corona-karnataka-2020.firebaseio.com/stats.json",
    "method": "GET"
}



document.getElementById("Layer_2").onmouseover = function()
{
$.ajax(requestOptions1).done(function (response) 
{
    var resLength = Object.keys(response).length;
    var keys = Object.keys(response);
    var latest = keys[resLength-1];
    var path = response[latest].KA.Chikkaballapura;
    console.log(path)
    var value = path.total_positive-path.total_discharge-path.total_deaths;
    document.getElementById("state_name").innerText = "BIDAR";
    document.getElementById("active-name").innerText = "Active";
    const obj = document.getElementById("q");
    animateValue(obj, 0, value, 500);
});
};

document.getElementById("Layer_3").onmouseover = function()
{
$.ajax(requestOptions1).done(function (response) 
{
    // var path = response.Karnataka.districtData.Kalaburagi.active;
    var value = 500;
    document.getElementById("state_name").innerText = "Kalaburagi";
    document.getElementById("active-name").innerText = "Active";
    const obj = document.getElementById("q");
    animateValue(obj, 0, value, 500);
});
};

document.getElementById("Layer_4").onmouseover = function()
{
$.ajax(requestOptions1).done(function (response) 
{
    var path = response.Karnataka.districtData.Yadgir.active;
    var value = path;
    document.getElementById("state_name").innerText = "YADGIRI";
    document.getElementById("active-name").innerText = "Active";
    const obj = document.getElementById("q");
    animateValue(obj, 0, value, 500);
});
};



document.getElementById("Layer_5").onmouseover = function()
{
$.ajax(requestOptions1).done(function (response) 
{
    var path = response.Karnataka.districtData.Raichur.active;
    var value = path;
    document.getElementById("state_name").innerText = "RAICHUR";
    document.getElementById("active-name").innerText = "Active";
    const obj = document.getElementById("q");
    animateValue(obj, 0, value, 500);
});
};



document.getElementById("Layer_6").onmouseover = function()
{
$.ajax(requestOptions1).done(function (response) 
{
    var path = response.Karnataka.districtData.Vijayapura.active;
    var value = path;
    document.getElementById("state_name").innerText = "VIJAYAPUR";
    document.getElementById("active-name").innerText = "Active";
    const obj = document.getElementById("q");
    animateValue(obj, 0, value, 500);
});
};



document.getElementById("Layer_7").onmouseover = function()
{
$.ajax(requestOptions1).done(function (response) 
{
    var path = response.Karnataka.districtData.Belagavi.active;
    var value = path;
    document.getElementById("state_name").innerText = "BELAGAVI";
    document.getElementById("active-name").innerText = "Active";
    const obj = document.getElementById("q");
    animateValue(obj, 0, value, 500);
});
};



document.getElementById("Layer_8").onmouseover = function()
{
$.ajax(requestOptions1).done(function (response) 
{
    var path = response.Karnataka.districtData.Bagalkote.active;
    var value = path;
    document.getElementById("state_name").innerText = "BAGALKOTE";
    document.getElementById("active-name").innerText = "Active";
    const obj = document.getElementById("q");
    animateValue(obj, 0, value, 500);
});
};



document.getElementById("Layer_9").onmouseover = function()
{
$.ajax(requestOptions1).done(function (response) 
{
    var path = response.Karnataka.districtData["Uttara Kannada"].active;
    var value = path;
    document.getElementById("state_name").innerText = "UTTARA KANNADA";
    document.getElementById("active-name").innerText = "Active";
    const obj = document.getElementById("q");
    animateValue(obj, 0, value, 500);
});
};



document.getElementById("Layer_10").onmouseover = function()
{
$.ajax(requestOptions1).done(function (response) 
{
    var path = response.Karnataka.districtData.Dharwad.active;
    var value = path;
    document.getElementById("state_name").innerText = "Dharwad";
    document.getElementById("active-name").innerText = "Active";
    const obj = document.getElementById("q");
    animateValue(obj, 0, value, 500);
});
};



document.getElementById("Layer_11").onmouseover = function()
{
$.ajax(requestOptions1).done(function (response) 
{
    var path = response.Karnataka.districtData.Gadag.active;
    var value = path;
    document.getElementById("state_name").innerText = "Gadag";
    document.getElementById("active-name").innerText = "Active";
    const obj = document.getElementById("q");
    animateValue(obj, 0, value, 500);
});
};



document.getElementById("Layer_12").onmouseover = function()
{
$.ajax(requestOptions1).done(function (response) 
{
    var path = response.Karnataka.districtData.Koppal.active;
    var value = path;
    document.getElementById("state_name").innerText = "Koppal";
    document.getElementById("active-name").innerText = "Active";
    const obj = document.getElementById("q");
    animateValue(obj, 0, value, 500);
});
};



document.getElementById("Layer_13").onmouseover = function()
{
$.ajax(requestOptions1).done(function (response) 
{
    var path = response.Karnataka.districtData.Ballari.active;
    var value = path;
    document.getElementById("state_name").innerText = "Ballari";
    document.getElementById("active-name").innerText = "Active";
    const obj = document.getElementById("q");
    animateValue(obj, 0, value, 500);
});
};



document.getElementById("Layer_14").onmouseover = function()
{
$.ajax(requestOptions1).done(function (response) 
{
    var path = response.Karnataka.districtData.Haveri.active;
    var value = path;
    document.getElementById("state_name").innerText = "Haveri";
    document.getElementById("active-name").innerText = "Active";
    const obj = document.getElementById("q");
    animateValue(obj, 0, value, 500);
});
};



document.getElementById("Layer_15").onmouseover = function()
{
$.ajax(requestOptions1).done(function (response) 
{
    var path = response.Karnataka.districtData.Shivamogga.active;
    var value = path;
    document.getElementById("state_name").innerText = "Shivamogga";
    document.getElementById("active-name").innerText = "Active";
    const obj = document.getElementById("q");
    animateValue(obj, 0, value, 500);
});
};



document.getElementById("Layer_16").onmouseover = function()
{
$.ajax(requestOptions1).done(function (response) 
{
    var path = response.Karnataka.districtData.Davanagere.active;
    var value = path;
    document.getElementById("state_name").innerText = "Davanagere";
    document.getElementById("active-name").innerText = "Active";
    const obj = document.getElementById("q");
    animateValue(obj, 0, value, 500);
});
};



document.getElementById("Layer_17").onmouseover = function()
{
$.ajax(requestOptions1).done(function (response) 
{
    var path = response.Karnataka.districtData.Chitradurga.active;
    var value = path;
    document.getElementById("state_name").innerText = "Chitradurga";
    document.getElementById("active-name").innerText = "Active";
    const obj = document.getElementById("q");
    animateValue(obj, 0, value, 500);
});
};



document.getElementById("Layer_18").onmouseover = function()
{
$.ajax(requestOptions1).done(function (response) 
{
    var path = response.Karnataka.districtData.Udupi.active;
    var value = path;
    document.getElementById("state_name").innerText = "Udupi";
    document.getElementById("active-name").innerText = "Active";
    const obj = document.getElementById("q");
    animateValue(obj, 0, value, 500);
});
};



document.getElementById("Layer_19").onmouseover = function()
{
$.ajax(requestOptions1).done(function (response) 
{
    var path = response.Karnataka.districtData.Chikkamagaluru.active;
    var value = path;
    document.getElementById("state_name").innerText = "Chikkamagaluru";
    document.getElementById("active-name").innerText = "Active";
    const obj = document.getElementById("q");
    animateValue(obj, 0, value, 500);
});
};



document.getElementById("Layer_20").onmouseover = function()
{
$.ajax(requestOptions1).done(function (response) 
{
    var path = response.Karnataka.districtData.Tumakuru.active;
    var value = path;
    document.getElementById("state_name").innerText = "Tumakuru";
    document.getElementById("active-name").innerText = "Active";
    const obj = document.getElementById("q");
    animateValue(obj, 0, value, 500);
});
};



document.getElementById("Layer_21").onmouseover = function()
{
$.ajax(requestOptions1).done(function (response) 
{
    var path = response.Karnataka.districtData["Dakshina Kannada"].active;
    var value = path;
    document.getElementById("state_name").innerText = "Dakshina Kannada";
    document.getElementById("active-name").innerText = "Active";
    const obj = document.getElementById("q");
    animateValue(obj, 0, value, 500);
});
};


document.getElementById("Layer_22").onmouseover = function()
{
$.ajax(requestOptions1).done(function (response) 
{
    var path = response.Karnataka.districtData.Hassan.active;
    var value = path;
    document.getElementById("state_name").innerText = "Hassan";
    document.getElementById("active-name").innerText = "Active";
    const obj = document.getElementById("q");
    animateValue(obj, 0, value, 500);
});
};



document.getElementById("Layer_23").onmouseover = function()
{
$.ajax(requestOptions1).done(function (response) 
{
    var path = response.Karnataka.districtData.Chikkaballapura.active;
    var value = path;
    document.getElementById("state_name").innerText = "Chikkaballapura";
    document.getElementById("active-name").innerText = "Active";
    const obj = document.getElementById("q");
    animateValue(obj, 0, value, 500);
});
};



document.getElementById("Layer_24").onmouseover = function()
{
$.ajax(requestOptions1).done(function (response) 
{
    var path = response.Karnataka.districtData.Kolar.active;
    var value = path;
    document.getElementById("state_name").innerText = "Kolar";
    document.getElementById("active-name").innerText = "Active";
    const obj = document.getElementById("q");
    animateValue(obj, 0, value, 500);
});
};



document.getElementById("Layer_25").onmouseover = function()
{
$.ajax(requestOptions1).done(function (response) 
{
    var path = response.Karnataka.districtData.Kodagu.active;
    var value = path;
    document.getElementById("state_name").innerText = "Kodagu";
    document.getElementById("active-name").innerText = "Active";
    const obj = document.getElementById("q");
    animateValue(obj, 0, value, 500);
});
};



document.getElementById("Layer_26").onmouseover = function()
{
$.ajax(requestOptions1).done(function (response) 
{
    var path = response.Karnataka.districtData.Mysuru.active;
    var value = path;
    document.getElementById("state_name").innerText = "Mysuru";
    document.getElementById("active-name").innerText = "Active";
    const obj = document.getElementById("q");
    animateValue(obj, 0, value, 500);
});
};



document.getElementById("Layer_27").onmouseover = function()
{
$.ajax(requestOptions1).done(function (response) 
{
    var path = response.Karnataka.districtData.Madya.active;
    var value = path;
    document.getElementById("state_name").innerText = "Madya";
    document.getElementById("active-name").innerText = "Active";
    const obj = document.getElementById("q");
    animateValue(obj, 0, value, 500);
});
};



document.getElementById("Layer_28").onmouseover = function()
{
$.ajax(requestOptions1).done(function (response) 
{
    var path = response.Karnataka.districtData["Bengaluru Rural"].active;
    var value = path;
    document.getElementById("state_name").innerText = "Bengaluru Rural";
    document.getElementById("active-name").innerText = "Active";
    const obj = document.getElementById("q");
    animateValue(obj, 0, value, 500);
});
};


document.getElementById("Layer_30").onmouseover = function()
{
$.ajax(requestOptions1).done(function (response) 
{
    var path = response.Karnataka.districtData["Bengaluru Urban"].active;
    var value = path;
    document.getElementById("state_name").innerText = "Bengaluru Urban";
    document.getElementById("active-name").innerText = "Active";
    const obj = document.getElementById("q");
    animateValue(obj, 0, value, 500);
});
};



document.getElementById("Layer_31").onmouseover = function()
{
$.ajax(requestOptions1).done(function (response) 
{
    var path = response.Karnataka.districtData.Ramanagara.active;
    var value = path;
    document.getElementById("state_name").innerText = "Ramanagara";
    document.getElementById("active-name").innerText = "Active";
    const obj = document.getElementById("q");
    animateValue(obj, 0, value, 500);
});
};



document.getElementById("Layer_32").onmouseover = function()
{
$.ajax(requestOptions1).done(function (response) 
{
    var path = response.Karnataka.districtData.Chamarajanagara.active;
    var value = path;
    document.getElementById("state_name").innerText = "Chamarajanagara";
    document.getElementById("active-name").innerText = "Active";
    const obj = document.getElementById("q");
    animateValue(obj, 0, value, 500);
});
};


var requestOptions = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.covid19india.org/v4/data.json",
    "method": "GET"
}
document.getElementById("sour").onclick = function()
{
$.ajax(requestOptions).done(function (response) 
{
    var path = response.KA.meta.tested.source;
    var win = window.open(path, '_blank');
    if (win) 
    {
    //Browser has allowed it to be opened
    win.focus();
    } else 
    {
    //Browser has blocked it
    alert('Please allow popups for this website');
    }
});
};




function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }