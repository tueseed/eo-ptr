var fb = firebase.database().ref('event')

fb.on('value',function(snapshot){                         
                                    if(snapshot.val() !== null)
                                    {
                                      var data = snapshot.val()
                                      var i = 0
                                      var data_for_tbl = []
                                      while(Object.keys(data)[i])
                                      {
                                          var data_i = Object.values(data)[i]
                                          data_i.key = Object.keys(data)[i]
                                          data_for_tbl.push(data_i)
                                          i++;
                                      }
                                      console.log(data_for_tbl)
                                      var $table = $('#creat_event_tbl')
                                      $table.bootstrapTable('refreshOptions', {data: data_for_tbl})
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
        'addr':'ม.' + $('#moo').val() + ' ต.' + $('#tumbol').val() + ' อ.' + $('#aumper').val() + ' จ.' +$('#province').val(),
        'cause':$('#cause').val(),
        'cus_name':$('#cus_name').val(),
        'tel':$('#tel').val(),
        'status':'P'
      })
      $('#place').val('')
      $('#moo').val('')
      $('#tumbol').val('')
      $('#aumper').val('')
      $('#province').val('')
      $('#cause').val('')
      $('#cus_name').val('')
      $('#tel').val('')
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


//////function for table
function tbl_btn(value, row, index) 
{
  // return [
  //     '<a class="btn btn-sm btn-outline-primary" href="#" title="Like" data-toggle="modal" onclick="query_job('+"'" + value + "'" +')"  data-target="#job_detail">',
  //     '<i class="fa fa-eye"></i> เปลี่ยนสถานะ',
  //     "</a>  "
  //   ].join("")
  return[
          '<div class="btn-group-vertical">',
            '<div class="btn-group dropleft">',
              '<button id="change_status" type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">',
                'เปลี่ยนสถานะ',
              '</button>',
              '<div class="dropdown-menu" aria-labelledby="change_status">',
                '<a class="dropdown-item" href="#" onclick="change_status(' + "'" + value+ "'" + ','+ "'P'" + ')">รอดำเนินการ</a>',
                '<a class="dropdown-item" href="#" onclick="change_status(' + "'" + value+ "'" + ','+ "'I'" + ')">กำลังดำเนินการ</a>',
                '<a class="dropdown-item" href="#" onclick="change_status(' + "'" + value+ "'" + ','+ "'F'" + ')">เสร็จงาน</a>',
              '</div>',
            '</div>',
            '<div class="btn-group dropleft">',
              '<button id="tech" type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">',
                'ส่งงานให้ช่าง',
              '</button>',
              '<div class="dropdown-menu" aria-labelledby="tech">',
                '<a class="dropdown-item" href="#">นายนัทธพงศ์ เจริญกิจพิเชียร</a>',
                '<a class="dropdown-item" href="#">นายปรัชญาจีนขาวขำ</a>',
              '</div>',
            '</div>',
          '</div>'
  ].join("")
  }