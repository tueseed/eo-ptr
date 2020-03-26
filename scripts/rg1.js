var fb = firebase.database().ref('event')
var tech = firebase.database().ref('tech')
var msg = firebase.database().ref('message')
fb.on('value',function(snapshot){                         
                                  var data = snapshot.val()
                                  var i =0
                                  var status_p = 0
                                  var status_i = 0
                                  var status_f = 0
                                  var data_for_tbl = []
                                  while(Object.keys(data)[i])
                                  {
                                    if(Object.values(data)[i].status == 'P'){status_p++}
                                    else if(Object.values(data)[i].status == 'I'){status_i++}
                                    else if(Object.values(data)[i].status == 'F'){status_f++}
                                    data_for_tbl.push(Object.values(data)[i])
                                    i++
                                  }
                                  $('#finnish_event').html(status_f)
                                  $('#inprocess_event').html(status_i)
                                  $('#pending_event').html(status_p)
                                  $('#all_event').html(status_p+status_i+status_f)  
                                  var $table = $('#event_tbl')
                                  $table.bootstrapTable('refreshOptions', {
                                    data: data_for_tbl
                                  })

                                }
)

fb.endAt().limitToLast(1).on('child_added', function(snapshot) {
                                                                  // console.log(snapshot.val())
                                                                })

fb.on('child_changed', function(snapshot){
                                            var newrequest = snapshot.val()
                                            
                                            var status_text = ''
                                            var status_color = ''
                                            if(newrequest.status == 'P')
                                            {
                                              status_text = 'รอดำเนินการ'
                                              status_color = 'danger'
                                            }
                                            else if(newrequest.status == 'I')
                                            {
                                              status_text = 'กำลังดำเนินการ'
                                              status_color = 'warning'
                                            }else if(newrequest.status == 'F')
                                            {
                                              status_text = 'จ่ายไฟแล้ว'
                                              status_color = 'success'
                                            }
                                            $.notify({
                                                      message: '<h4>' + newrequest.place + ' ' + status_text +'</h4>'
                                                    },
                                                    {
                                                      type: status_color
                                                    }
                                                    )
                                          })
                                        
tech.orderByChild('status').equalTo('on').on('value',function(snapshot){
                                            var data = snapshot.val()
                                            $('#tech_card').empty()
                                            var card = ''
                                            var i = 0
                                            while(Object.keys(data)[i])
                                            {
                                              card = render_tech_card(Object.values(data)[i].techName,Object.values(data)[i].job)
                                              $('#tech_card').append(card)
                                              i++
                                            } 
                                            
                                          })

function render_tech_card(techname,job)
{
  console.log(job)
  return[
          '<div class="col-lg-3">',
            '<div class="card shadow mt-1 bg-success" >',
            '<div class="card-body">',
              '<div class="row">',
                '<div class="col-lg-12">',
                  '<h6 class="card-title text-white mt-2">'+techname+'</h6>',
                '</div>',
              '</div>',
              '<div class="row">',
                '<div class="col-lg-12">',
                  '<h6 class="card-title text-white mt-2">กำลังปฏิบัติงาน '+job+'</h6>',
                '</div>',
              '</div>',
            '</div>',
          '</div>',
        '</div>'
].join("")
  
}

msg.limitToLast(5).once('value',function(snapshot){
  var comment = snapshot.val()
  $('#msg_area').html('') 
  if(comment !== null)
  {
      var i = 0
      while(Object.keys(comment)[i])
      {
        if(i<4)
        {
        var msg_card = render_msg(Object.values(comment)[i])
        // $('#msg_area').prepend(msg_card) 
        $(msg_card).prependTo($('#msg_area')).slideDown('slow')
        }
        i++
      }

  }
})

msg.endAt().limitToLast(1).on('child_added',function(snapshot){
  var new_msg = snapshot.val()
  console.log('new_msg')
  var msg_card = render_msg(new_msg)  
  $(msg_card).prependTo($('#msg_area')).slideDown('slow')
  var element = $("div[name='row_card']")
  console.log("elelel   "+element.length)
  if(element.length > 5)
  {
    $("div[name='row_card']").last().remove()
  }
})



function render_msg(obj)
{
  console.log(obj)
  return[
          
          '<div class="col-lg-12 mt-2" style="display:none;" name="row_card">',
            '<div class="card shadow bg-light">',
              '<div class="card-body">',
                '<div class="row">',
                  '<div class="col-lg-2">',
                    '<img id="profileImage" class="shadow-sm" src="' + obj.display_url + '" style="width:50px;height:50px;border-radius:50px 50px;"/>',
                  '</div>',
                  '<div class="col-lg-10">',
                    '<span class="text-info" style="font-size:16px;">'+obj.name+'</span>',
                    '<br>',
                    '<span class="text-success" style="font-size:14px;"><i class="fas fa-calendar-alt"></i> '+obj.datestamp+' <i class="fas fa-clock"></i>'+obj.timeStamp+'</span>',
                  '</div>',
                '</div>',
                '<div class="row mt-2">',
                  '<span class="text-dark" style="font-size:12px;"><i class="fas fa-comment" aria-hidden="true"></i> '+obj.msg+'</span>',
                '</div>',
                '<div class="row text-center mt-2">',
                  '<div class="col-lg-12">',
                    '<img class="card-img-top" src="./pic/logo-auc.png" alt="Card image cap" style="width:100px;height:100px;">',
                '</div>',
                '</div>',
              '</div>',
            '</div>',
          '</div>'
  ].join("")
}
                                          
                                          