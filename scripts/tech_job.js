var tech = firebase.database().ref('tech')
$('#head_text').html('EO_REPORT')
window.onload = function(e) {
    liff.init(function(data) {
                                localStorage.setItem('userId', data.context.userId)
                                //alert(data.context.userId)
    liff
        .getProfile()
        .then(function(profile){
                                $('#uNameInput').html(profile.displayName)
                                $('#profileImage').attr('src',profile.pictureUrl)
                                }
            )
                                tech.orderByChild('uid').equalTo(data.context.userId).once('value',function (snapshot){
                                                                                                                        if(snapshot.val() == null)
                                                                                                                        {
                                                                                                                            window.location.href = 'index.php?action=tech_regis'
                                                                                                                        }
                                                                                                                        })
                            }
            )
}