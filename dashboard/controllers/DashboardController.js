$(document).ready(function () {
    var userModel = JSON.parse(xit.storage.getValue('loggedInUser'))
    /** Set up ui elements and events */
    DashboardController.analysis(userModel)
})
DashboardController = {
    analysis : function (userModel){
        var headers = ['Authorization:Bearer ' + userModel.token]    
        xit.request.post(headers, null, endpoints.datablocks.analysis).then(function (response) {
            response = JSON.parse(response)
            if (response.status_code == 1) {
                response.data.entityAnalysis.forEach(row => {
                    $('#dvElems1').find('h3').each(function () {
                        if($(this).attr('id') == row.entity){
                            $(this).html(row.count)
                        }
                    })
                    $('#dvElems1').find('p').each(function () {
                        if($(this).attr('id') == 'p_'+row.entity){
                            $(this).html('')
                            row.status.forEach(row_ => {
                                $(this).append(row_.statusName + ':' + row_.noItems + '~')
                            })
                        }
                    })
                })
            }else{
                xit.message.show(response)
            }
        }).catch(function (ex){
            alert(ex)
        })
    }
}