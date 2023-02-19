var id = Date.now();
var database = firebase.database();
console.log(id);
document.getElementById("fsubmitbtn").disabled=true;

// var ip="";

// var ipad = {
//     "crossDomain": true,
//     "url": "https://api.ipify.org/?format=json",
//     "type": "GET"
// }

// $.ajax(ipad).done(function (response){ip = response.ip;});


function sendotp()
{
    console.log("working");
    var pno= document.getElementById("phonenumber").value;
    var feed_name = document.getElementById("feed_name").value;
   
    
    if (feed_name.length!==0 && !(isNaN(pno)) && pno.length==10)
    {

        document.getElementById("sendOTP").innerHTML = "OTP SENT";
        document.getElementById("feed_name").disabled=true;
        document.getElementById("phonenumber").disabled=true;
        document.getElementById("sendOTP").style.color="#000000";
        updatedb();


        let userRef = this.database.ref('users/');
        userRef.child(id).update({'otp':"not verified"});

        var requestOptions1 = {
            "crossDomain": true,
            "url": "https://api.covid19karnataka.in/"+pno",
            "type": "GET"
        }
        $.ajax(requestOptions1)
        .done(function (response) 
        {
            if(response === "pending")
            {
                document.getElementById("sendOTP").innerHTML = "OTP SENT";
                pno.disabled=true;
            }
        });
    }
    else{
        alert("error");
    }
}


function updatedb()
{
    var pno= document.getElementById("phonenumber").value;
    var feed_name = document.getElementById("feed_name").value;
    firebase.database().ref('users/' + id).set({
        username: feed_name,
        phone: "+"+91+""+pno,
        otp:"otp pending"
      });
}


function verifyotp()
{
    document.getElementById("votp").innerHTML = "Please wait...";
    var pno= document.getElementById("phonenumber").value;
    var feed_name = document.getElementById("feed_name").value;
    var otp = document.getElementById("otp").value; 
    if (otp.length==6 && !isNaN(otp))
    {
        var requestOptions1 = {
            "async": true,
            "crossDomain": true,
            "url": "https://https://api.covid19karnataka.in/"+pno+"/"+otp",
            "method": "GET"
        }
        $.ajax(requestOptions1).done(function (response) 
        {
            console.log(response);
                if (response=="approved")
                {
                    document.getElementById("votp").innerHTML = "Verified";
                    document.getElementById("otp").disabled=true;
                    let userRef = database.ref('users/');
                    userRef.child(id).update({'otp':"verified"});
                    document.getElementById("fsubmitbtn").disabled=false;
                }

        });
    }
    else{
        alert("error");
    }
}


function fsubmit()
{
    document.getElementById("fsubmitbtn").innerHTML = "Please wait...";
    var pno= document.getElementById("phonenumber").value;
    var feed_name = document.getElementById("feed_name").value;
    var comment = document.getElementById("comment").value;
    var e = document.getElementById("inputGroupSelect01");
    var text = e.options[e.selectedIndex].text;

    if (comment.length<100)
    {
        if(pno.length==10 && feed_name.length!=0 && comment.length>0)
        {
            firebase.database().ref('comments/' + id).set({
                timestamp: id,
                username: feed_name,
                phone: "+"+91+""+pno,
                category: text,
                comment: comment 
              });


              firebase.database().ref('showfeedback/' + id).set({
                username: feed_name,
                comment: comment 
              });

              document.getElementById("fsubmitbtn").innerHTML = "Thank you";
              document.getElementById("fsubmitbtn").disabled=true;
              location.reload();
        }
        else
        {
            alert("Some feilds are missing!")
        }
        
    }
    else
    {
        alert("Comments should not exceed 100 characters!")
    }


    
    console.log(pno+" "+text);
}
