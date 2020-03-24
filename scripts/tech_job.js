var tech = firebase.database().ref('tech')
var fb = firebase.database().ref('event')
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

tech.orderByChild('uid').equalTo(localStorage.getItem('userId')).on('value',function (snapshot){
    var key_tech = Object.keys(snapshot.val())[0]
    var job = firebase.database().ref('tech/' + key_tech + '/job')
    job.once('value',function (job){
        var job_get = job.val()
        var job_card = ''
        var i = 0
        $('#job_card').empty()
        while(Object.keys(job_get)[i])
        {
            render_job_card(Object.values(job_get)[i].job_place,Object.values(job_get)[i].job_key)
            
            i++
        }
    })

})

async function render_job_card(job_name,job_key)
{
    var snapshot = await fb.child(job_key).once('value')
    var value = snapshot.val()
    var job_status =  value.status
    var bg_card = ''
    if(job_status == 'P'){bg_card = 'bg-danger'}
    else if(job_status == 'I'){bg_card = 'bg-warning'}
    else if(job_status == 'F'){bg_card = 'bg-success'}
    else if(job_status == 'S'){bg_card = 'bg-info'}
    var job_card = [
            '<div class="col-sm-12">',
                '<div class="card shadow mt-1 '+bg_card+'" id="job_tech_card'+job_key+'">',
                    '<div class="card-body">',
                        '<div class="row">',
                            '<div class="col-sm-6">',
                                '<h5 class="card-title text-white mt-2">'+job_name+'</h5>',
                            '</div>',
                            '<div class="col-sm-6">',
                                '<div class="float-right">',
                                    '<button class="btn btn-primary"  id="save_btn" onclick="get_job()">',
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
    $('#job_card').append(job_card)
}

function get_job(job_key)
{
    // fb.child(job_key).update({'status':'I','tech':techname})
    alert(job_key)
}

fb.on('child_changed', function(snapshot){
                                            var job_data = snapshot.val()
                                            var key = snapshot.key
                                            
                                            if(job_data.status == 'P')
                                            {
                                                $('#job_tech_card' + key)
                                                .addClass("bg-danger")
                                                .removeClass('bg-warning')
                                                .removeClass("bg-success")
                                                .removeClass("bg-info")
                                            }else if(job_data.status == 'I')
                                            {
                                                $('#job_tech_card' + key)
                                                .addClass("bg-warning")
                                                .removeClass('bg-success')
                                                .removeClass("bg-danger")
                                                .removeClass("bg-info")
                                            }else if(job_data.status == 'F')
                                            {
                                                $('#job_tech_card' + key)
                                                .addClass("bg-success")
                                                .removeClass('bg-warning')
                                                .removeClass("bg-danger")
                                                .removeClass("bg-info")
                                            }
                                            else if(job_data.status == 'S')
                                            {
                                                $('#job_tech_card' + key)
                                                .addClass("bg-info")
                                                .removeClass('bg-warning')
                                                .removeClass("bg-danger")
                                                .removeClass("bg-success")
                                            }
                                        })