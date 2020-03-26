var msg = firebase.database().ref('message')
var tech = firebase.database().ref('tech')
var images = firebase.storage().ref()
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

async function post_msg()
{
    var d = new Date()
    var datepost = d.getDate() + '-' + d.getMonth() + '-' + d.getFullYear()
    var timepost = d.getHours()+':' + d.getMinutes()
    var msg_comment = $('#comment_msg').val()
    var selectedFile = document.getElementById('picture_post').files

    var msg_push =  await msg.push({
                'msg':msg_comment,
                'name':localStorage.getItem('displayname'),
                'display_url':localStorage.getItem('display_url'),
                'timeStamp': timepost,
                'datestamp':datepost,
                'picture_num':selectedFile.length
            })
    
    function upload()
    {
        var i =0
        while(selectedFile[i])
        {
            var mountainImagesRef = images.child('images/' + msg_push.key + '/' + i + '.jpg')
            mountainImagesRef.put(selectedFile[i])
            i++
        }
    }
    upload().then(function (){window.location.href='index.php?action=tech_job'})
    
}

$('#camera_btn').on('click', function(){$('#picture_post').trigger('click')})


// $(document).ready(function(){
// $('#picture_post').change(function(e){
                                        
                                       
//                                         var selectedFile = document.getElementById('picture_post').files;
//                                         console.log(selectedFile[0])
//                                         var i =0
//                                         while(selectedFile[i])
//                                         {
//                                             var mountainImagesRef = images.child('images/msg001/' + i + '.jpg')
//                                             mountainImagesRef.put(selectedFile[i])
//                                             i++
//                                         }
//                                         images.child('images/msg001/1.jpg').on.getDownloadURL().then(function(url) {console.log(url)})
                                        
//                                         })
// })