$(document).ready(function () {
    $('#imgAvatar').click(function (){
        $('#fiImages').trigger('click')
    })

    $('#fiImages').change(function () {
        var input = this
        var reader = new FileReader()
        reader.onload = function (e) {
            $('#imgAvatar').attr('src', e.target.result)
        }
        reader.readAsDataURL(input.files[0])
        $('#btUpload').html('Upload')
        $('#btUpload').attr('disabled', false)
    })

    $('#confirmPassword').keypress(function () {
        console.log($(this).val() + ' ::: ' + $('#newPassword').val())
        if($('#newPassword').val() == $(this).val()){
            $(this).removeClass('input-error')
        }else{
            $(this).addClass('input-error')
        }
    })

    $('#btUpdatePassword').click(function () {
        var userModel = JSON.parse(xit.storage.getValue('loggedInUser'))
        var oprRes = confirm('You are about to change your password. Continue?')
        if(oprRes){
            var options = {
                entityId:3
            }
            var keyModel = {
                "users.id":userModel.id
            }
            var dataModel = {
                password:$('#newPassword').val()
            }
            DataBlockController.update(dataModel, keyModel, options).then(function (response){
                response = JSON.parse(response)
                if (response.status_code == 1) {
                    xit.message.show(response)
                } else {
                    Observer.displayErrors(response)
                }
            }).catch (function (ex){
                alert(ex)
            })
        }else{
            xit.message.show({status_message:'Cancelled', message:'Approval cancelled.'})
        }
    })

    $('#btUpload').click(function (){
        $(this).attr('disabled', true)
            $(this).html('Uploading...')
            $('#tbSave').attr('disabled', true)
            var validExtensions = ['png', 'jpg', 'jpeg']
            xit.files.upload('fiImages', JSON.stringify(validExtensions), 'taji', endpoints.resource.fileupload).then(function (response){
                response = JSON.parse(response)
                if (response.status_code == 1) {
                    var avatar = ''
                    response.data.urls.forEach(url => {
                        avatar=url.hyperLinkUrl
                    })
                    $('#btUpload').html(response.message)
                    var userModel = JSON.parse(xit.storage.getValue('loggedInUser'))
                    var dataModel = {
                        avatar:avatar
                    }
                    var keyModel = {
                        "users.id":userModel.id
                    }
                    var options = {
                        entityId: 3                    
                    }
                    DataBlockController.update(dataModel, keyModel, options).then(function (response){
                        response = JSON.parse(response)
                        if (response.status_code == 1) {
                            xit.message.show(response)
                            xit.storage.saveItem('loggedInUser', JSON.stringify(response.data))
                            $('#pUserAvatar').attr('src', response.data.avatar)
                            $('#pUserAvatar2').attr('src', response.data.avatar)
                            $('#pUserAvatar3').attr('src', response.data.avatar)
                        } else {
                            Observer.displayErrors(response)
                        }
                    }).catch (function (ex){
                        alert(ex)
                    })
                }
            }).catch (function (ex) {
                alert(ex)
            })
    })

})

AccountController = {

}