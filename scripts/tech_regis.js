var tech = firebase.database().ref('tech')

$('#head_text').html('EO_REPORT')

window.onload = function(e) {
                                liff.init(function(data) {
                                                            localStorage.setItem('userId', data.context.userId)
                                                        
                                liff
                                    .getProfile()
                                    .then(function(profile){
                                                           
                                                            $('#uNameInput').html(profile.displayName)
                                                            $('#profileImage').attr('src',profile.pictureUrl)
                                                            localStorage.setItem('display_url',profile.pictureUrl)
                                                            }
                                        )
                                                            //tech.orderByChild('uid').equalTo(data.context.userId).once('value',function (snapshot){
                                                                                                                                                    // console.log(snapshot.val())
                                                                                                                                                    // })
                                                        }
                                        )
                            }
                
function regis_tech()
{
    tech.orderByChild('staffId').equalTo($('#staffId').val()).once('value',function (snapshot){
                                                                                                if(snapshot.val() == null)
                                                                                                {
                                                                                                    tech.push({
                                                                                                        'uid':localStorage.getItem('userId'),
                                                                                                        'techName':$('#nameInput').val(),
                                                                                                        'position':$('#position').val(),
                                                                                                        'staffId':$('#staffId').val(),
                                                                                                        'status':'on',
                                                                                                        'tel':$('#telInput').val(),
                                                                                                        'display_url':localStorage.getItem('display_url')
                                                                                                        })
                                                                                                    window.location.href = 'index.php?action=tech_job'
                                                                                                }
                                                                                                else
                                                                                                {
                                                                                                    alert('มีแล้ว')
                                                                                                }
                                                                                            })
}


