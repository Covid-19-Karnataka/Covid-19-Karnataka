$('#news').find('tbody').html('');


$(window).load(function() 
{

    var requestOptions1 = {
        "async": true,
        "crossDomain": true,
        "url": "https://gnews.io/api/v3/search?q=covid&token=5a8ce6e6b54abe627daa221c184ebf05&country=in",
        "method": "GET"
    }
    
    $.ajax(requestOptions1).done(function (response) 
    {
	    console.log(response);
        var no = response.articleCount;
        for (i=0; i<no; i++)
        {
            var title = response.articles[i].title;
            var image =  "src="+response.articles[i].image+"";
            var description = response.articles[i].description;
            var source = response.articles[i].source.name;
            var url = response.articles[i].url;

    
            var strDateTime = response.articles[i].publishedAt;
            var myDate = new Date(strDateTime);
            var options = {
                year: "numeric",
                month: "2-digit",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            };
    
    
            var meta = myDate.toLocaleString("en", options);
            var time = source +" &#8226; " +meta 
    
            if (response.articles[i].image== null)
            {
                document.getElementById("news").innerHTML +='<div class="n1"><div class="nf"><div class="nc2"><h5 class="htitle">'+title+'</h5><span class="hmeta">'+time+'</span><h5 class="hdesc">'+description+'</h5><a class="nlink" style="cursor: pointer;" href="'+url+'" target="_blank">View Full Coverage</a></div><div class="ni2"></div></div></div>';
            }
            else
            {
                console.log(image);
                document.getElementById("news").innerHTML +='<div class="n1"><div class="nf"><div class="nc"><h5 class="htitle">'+title+'</h5><span class="hmeta">'+time+'</span><h5 class="hdesc">'+description+'</h5><a class="nlink" style="cursor: pointer;" href="'+url+'"target="_blank">View Full Coverage</a></div><div class="ni"><img class="nimg"'+image+'></div></div></div>';
            }
        }

       
    });
    
   
});


