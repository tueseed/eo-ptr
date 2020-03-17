var fb = firebase.database().ref('event')

fb.on('value',function(snapshot){                         
                                    document.getElementById("card_event_area").innerHTML = "";
                                    if(snapshot.val() !== null)
                                    {
                                      var data = snapshot.val()
                                      var i = 0;
                                      while(Object.keys(data)[i])
                                      {
                                          console.log(Object.values(data)[i].moo)
                                          render_event_card(Object.values(data)[i],Object.keys(data)[i],i);
                                          i++;
                                      }
                                    }
                                  }
                                
        )

function creat_event()
{
  var req = true
  $("input[name='event_input']").each( function() {
                                                     
                                                      var check = $(this).val()
                                                      if(check == '') 
                                                      {
                                                        req = false
                                                      }
                                                  })  
  if(req==true)
    {
      fb.push({
        'place':$('#place').val(),
        'moo':$('#moo').val(),
        'tumbol':$('#tumbol').val(),
        'aumper':$('#aumper').val(),
        'province':$('#province').val(),
        'cause':$('#cause').val(),
        'cus_name':$('#cus_name').val(),
        'status':'P'
      })
      $('#place').val('')
      $('#moo').val('')
      $('#tumbol').val('')
      $('#aumper').val('')
      $('#province').val('')
      $('#cause').val('')
      $('#cus_name').val('')
    }else
    {
      console.log('กรอกข้อมูลให้ครบซิ')
    }

}

function render_event_card(data,key,no)
{
    var bg_color = ''
    if(data.status == 'P'){bg_color = 'bg-danger'}else if(data.status == 'I'){bg_color = 'bg-warning'}else if(data.status == 'F'){bg_color = 'bg-success'}
    var card = document.getElementById("card_event_area")
    card.innerHTML += '<div class="card shadow mt-1 ' + bg_color + '"><div class="card-body"><div class="row"><div class="col-lg-8"><h5><span class="text-white">' + parseInt(no+1) + '.' + data.place + '</span></h5></div><div class="col-lg-4"><div class="btn-group float-right" role="group"><div class="btn-group dropleft"><button id="change_status" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">เปลี่ยนสถานะ</button><div class="dropdown-menu" aria-labelledby="change_status"><a class="dropdown-item" href="#" onclick="change_status(' + "'" + key+ "'" + ','+ "'P'" + ')">รอดำเนินการ</a><a class="dropdown-item" href="#" onclick="change_status(' + "'" + key+ "'" + ','+ "'I'" + ')">กำลังดำเนินการ</a><a class="dropdown-item" href="#" onclick="change_status(' + "'" + key+ "'" + ','+ "'F'" + ')">เสร็จงาน</a></div></div><div class="btn-group dropleft"><button id="tech" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">ส่งงานให้ช่าง</button><div class="dropdown-menu" aria-labelledby="tech"><a class="dropdown-item" href="#">นายนัทธพงศ์ เจริญกิจพิเชียร</a><a class="dropdown-item" href="#">นายปรัชญาจีนขาวขำ</a></div></div></div></div></div></div></div>'
}

function change_status(key,status)
{
  fb.child(key + '/status').set(status)
}