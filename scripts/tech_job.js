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
        tech.orderByChild('uid').equalTo(localStorage.getItem('userId')).once('value',function (snapshot){
            var data = snapshot.val()
            tech.child(Object.keys(data)[0]+'/status').set('on')
        })
    }
    else if(chek.checked == false)
    {
        tech.orderByChild('uid').equalTo(localStorage.getItem('userId')).once('value',function (snapshot){
            var data = snapshot.val()
            tech.child(Object.keys(data)[0]+'/status').set('off')
        })
    }
}

tech.orderByChild('uid').equalTo(localStorage.getItem('userId')).once('value',function (snapshot){
    var key_tech = Object.keys(snapshot.val())[0]
    
    var job = firebase.database().ref('tech/' + key_tech + '/job')
    job.once('value',function (job){
        
        var job_get = job.val()
        var job_card = ''
        var i = 0
        $('#job_card').empty()
        while(Object.keys(job_get)[i])
        {
            job_card = render_job_card(Object.values(job_get)[i].job_place,Object.values(job_get)[i].job_key)
            $('#job_card').append(job_card)
            i++
        }
    })

})

function render_job_card(job_name,job_key)
{
    return[
            '<div class="col-sm-12">',
                '<div class="card shadow mt-1 bg-danger" >',
                    '<div class="card-body">',
                        '<div class="row">',
                            '<div class="col-sm-6">',
                                '<h5 class="card-title text-white mt-2">'+job_name+'</h5>',
                            '</div>',
                            '<div class="col-sm-6">',
                                '<div class="float-right">',
                                    '<button class="btn btn-success"  id="save_btn" onclick="creat_event()">',
                                        '<i class="fas fa-check-circle" aria-hidden="true"></i>',
                                        'รับงาน',
                                    '</button>',
                                '</div>',
                            '</div>',
                        '</div>',
                    '</div>',
                '</div>',
            '</div>'
    ].join("")
}