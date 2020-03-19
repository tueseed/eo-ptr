var tech = firebase.database().ref('tech')
$('#head_text').html('EO_REPORT')
window.onload = function(e) {
                                liff.init(function(data) {
                                                            localStorage.setItem('userId', data.context.userId)
                                                            tech.orderByChild('uid').equalTo(data.context.userId).once('value',function (snapshot){
                                                                if(snapshot.val() == null)
                                                                {
                                                                    window.location.href = 'index.php?action=tech_regis'
                                                                }
                                                                })
                                                            liff
                                                            .getProfile()
                                                            .then(function(profile){
                                                                                    $('#uNameInput').html(profile.displayName)
                                                                                    $('#profileImage').attr('src',profile.pictureUrl)
                                                                                    }
                                                                )
                                                        }
                                        )
}

function change_tech_status()
{
    var chek = document.getElementById("check1")

    if(chek.checked == true )
    {
        alert(localStorage.getItem('userId')+ 'on')
        tech.orderByChild('uid').equalTo(localStorage.getItem('userId')).once('value',function (snapshot){
            var data = snapshot.val()
            tech.child(Object.keys(data)[0]+'/status').set('on')
        })
    }
    else if(chek.checked == false)
    {
        alert(localStorage.getItem('userId')+ 'off')
        tech.orderByChild('uid').equalTo(localStorage.getItem('userId')).once('value',function (snapshot){
            var data = snapshot.val()
            tech.child(Object.keys(data)[0]+'/status').set('off')
        })
    }
}

// tech.orderByChild('uid').equalTo(localStorage.getItem('userId')).once('value',function (snapshot){
//     if(snapshot.val() !== null)
//     {
//         var data = snapshot.val()
//         if(Object.values(data[0].status) == 'on')
//         {

//         }
//         else if(Object.values(data[0].status) == 'off')
//         {

//         }
//     }

// })