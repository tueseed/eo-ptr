var tech = firebase.database().ref('tech')

$('#head_text').html('EO_REPORT')

window.onload = function(e) {
                                liff.init(function(data) {
                                                            localStorage.setItem('userId', data.context.userId)
                                                            alert(data.context.userId)
                                liff
                                    .getProfile()
                                    .then(function(profile){
                                                            alert(profile)
                                                            }
                                        )
                                                            //tech.orderByChild('uid').equalTo(data.context.userId).once('value',function (snapshot){
                                                                                                                                                    // console.log(snapshot.val())
                                                                                                                                                    // })
                                                        }
                                        )
                            }


