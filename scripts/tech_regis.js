$('#head_text').html('EO_REPORT')

window.onload = function(e) {
                                liff.init(function(data) {
                                                            localStorage.setItem('userId', data.context.userId);
                                                            alert(data.context.userId)
                                                            // liff
                                                            //     .getProfile()
                                                            //     .then(function(profile){
                                                            //                             $("#dear_title").text("เรียน คุณ "+profile.displayName);
                                                            //                             }
                                                            //         )
                                                        }
                                        )
                            }