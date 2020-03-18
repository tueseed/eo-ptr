var fb = firebase.database().ref('event')
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
                                                                  console.log(snapshot.val())
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
                                          
                                          