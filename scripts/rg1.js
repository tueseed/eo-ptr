var fb = firebase.database().ref('event')
fb.on('value',function(snapshot){                         
                                  var data = snapshot.val()
                                  var i =0
                                  var status_p = 0
                                  var status_i = 0
                                  var status_f = 0
                                  while(Object.keys(data)[i])
                                  {
                                    console.log(Object.keys(data)[i])
                                    if(Object.values(data)[i].status == 'P'){status_p++}
                                    else if(Object.values(data)[i].status == 'I'){status_i++}
                                    else if(Object.values(data)[i].status == 'F'){status_f++}
                                    i++
                                  }
                                  console.log('P=' + status_p + ',I=' + status_i + ',F=' + status_f)
                                  $('#finnish_event').html(status_f)
                                  $('#inprocess_event').html(status_i)
                                  $('#pending_event').html(status_p)
                                  $('#all_event').html(status_p+status_i+status_f)
                                }
)