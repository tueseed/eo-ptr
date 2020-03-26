var msg = firebase.database().ref('message')
var tech = firebase.database().ref('tech')
var images = firebase.storage().ref()
$('#head_text').html('EO_REPORT')
window.onload = async function(e) {
    var init = await liff.init({liffId:'1653963133-E5eYJn42'})
    var getconText = await liff.getContext()
    var profile = await liff.getDecodedIDToken()

    localStorage.setItem('userId', getconText.userId)
    var check_userId = await this.tech.orderByChild('uid').equalTo(getconText.userId).once('value')
    if(check_userId.val() == null)
    {
        window.location.href = 'index.php?action=tech_regis'
    }
    $('#profileImage').attr('src',profile.picture)
    localStorage.setItem('display_url',profile.picture)
    localStorage.setItem('displayname',profile.name)
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
    var i =0
    while(selectedFile[i])
    {
        var mountainImagesRef = images.child('images/' + msg_push.key + '/' + i + '.jpg')
        var up = await mountainImagesRef.put(selectedFile[i])
        i++
    }
    window.location.href='index.php?action=tech_job'

    
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