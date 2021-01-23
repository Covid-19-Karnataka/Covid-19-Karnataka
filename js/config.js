$('#fbody').find('fbody').html('');

firebase.database().ref('showfeedback').limitToLast(12).on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();

      document.getElementById("fbody").innerHTML += '<div class="slide"><div class="f-class"><div class="feimg"><div class="userimg"></div><div class="usercom"><div class="usercomments"><h4 class="comment-desc">'+childData.username+': '+childData.comment+'</h4></div></div></div></div></div>';


      console.log(childData);
    
    });
});
