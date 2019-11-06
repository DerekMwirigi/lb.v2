AuthController = {
    sessionState : function (){
        $('#dvContainer').html()
        if(JSON.parse(xit.storage.getValue('loggedInUser')) == null){
            xit.ui.openview('POST', null, null, 'views/app/index.html', '#dvContainer', true)
            //xit.ui.openview('POST', null, null, 'views/auth/sign_in.html', '#dvContainer', true)
        }else{
            xit.ui.openview('POST', null, null, 'views/app/index.html', '#dvContainer', true)
        }
    },
    signIn : function (view, authModel){
        $(view).text('Loading...')
        xit.request.post(null, authModel, endpoints.auth.verifyusecret).then(function (response){
            response = JSON.parse(response)
            if(response.status_code == 1){
                xit.storage.saveItem('loggedInUser', JSON.stringify(response.data))
                location.reload()
            }else { 
                xit.message.show(response)
            }
            $(view).text('Sign In')
        }).catch(function (error){
            $(view).text('Sign In')
            alert(error)
        })
    },
    signUp : function (view, authModel){
        $(view).text('Loading...')
        xit.request.post(null, authModel, endpoints.auth.signUp).then(function (response){
            response = JSON.parse(response)
            if(response.status_code == 1){
                xit.storage.saveItem('loggedInUser', JSON.stringify(response.data))
                location.reload()
            }else { 
                Xit.message.show(response)
            }
            $(view).text('Sign In')
        }).catch(function (error){
            $(view).text('Sign In')
            alert(error)
        })
    },
    signOut : function (){
        if(confirm('About to sign out. Continue?')){
            xit.storage.destroy('loggedInUser')
            location.reload()
        }
        return
    }
}