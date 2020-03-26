var msg = firebase.database().ref('message')
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
                                                                                  
                                                                $('#profileImage').attr('src',profile.pictureUrl)
                                                                                    localStorage.setItem('display_url',profile.pictureUrl)
                                                                                    localStorage.setItem('displayname',profile.displayName)
                                                                                    }
                                                                )
                                                        }
                                        )
}

function post_msg()
{
    var d = new Date()
    var datepost = d.getDate() + '-' + d.getMonth() + '-' + d.getFullYear()
    var timepost = d.getHours()+':' + d.getMinutes()
    var msg_comment = $('#comment_msg').val()
    msg.push({
                'msg':msg_comment,
                'name':localStorage.getItem('displayname'),
                'display_url':localStorage.getItem('display_url'),
                'timeStamp': timepost,
                'datestamp':datepost
            }).then(window.location.href='index.php?action=tech_job')
}

$('#camera_btn').on('click', function(){$('#picture_post').trigger('click')})