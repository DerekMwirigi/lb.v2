DataBlockController = {
    save : function (dataModel, options) {
        return new Promise(function (success, error) {
            var userModel = JSON.parse(xit.storage.getValue('loggedInUser'))
            var headers = ['Authorization:Bearer ' + userModel.token]    
            var payLoad = {
                entityId: options.entityId,
                dataModel: dataModel
            }
            xit.request.post(headers, JSON.stringify(payLoad), endpoints.datablocks.save).then(function (response) {
                success(response)
            }).catch(function (ex){
                error(ex)
            })
        })
    },
    update : function (dataModel, keyModel, options) {
        return new Promise(function (success, error) {
            var userModel = JSON.parse(xit.storage.getValue('loggedInUser'))
            var headers = ['Authorization:Bearer ' + userModel.token]    
            var payLoad = {
                entityId: options.entityId,
                dataModel: dataModel,
                keyModel:keyModel
            }
            xit.request.post(headers, JSON.stringify(payLoad), endpoints.datablocks.update).then(function (response) {
                success(response)
            }).catch(function (ex){
                error(ex)
            })
        })
    },
    delete : function (keyModel, options) {
        return new Promise(function (success, error) {
            var userModel = JSON.parse(xit.storage.getValue('loggedInUser'))
            var headers = ['Authorization:Bearer ' + userModel.token]    
            var payLoad = {
                entityId: options.entityId,
                keyModel:keyModel
            }
            xit.request.post(headers, JSON.stringify(payLoad), endpoints.datablocks.delete).then(function (response) {
                success(response)
            }).catch(function (ex){
                error(ex)
            })
        })
    },
    view : function (payLoad) {
        return new Promise(function (success, error) {
            var userModel = JSON.parse(xit.storage.getValue('loggedInUser'))
            var headers = ['Authorization:Bearer ' + userModel.token]    
            xit.request.post(headers, JSON.stringify(payLoad), endpoints.datablocks.view).then(function (response) {
                success(response)
            }).catch(function (ex){
                error(ex)
            })
        })
    },
    fetch : function (payLoad) {
        return new Promise(function (success, error) {
            var userModel = JSON.parse(xit.storage.getValue('loggedInUser'))
            var headers = ['Authorization:Bearer ' + userModel.token]    
            xit.request.post(headers, JSON.stringify(payLoad), endpoints.datablocks.fetch).then(function (response) {
                success(response)
            }).catch(function (ex){
                error(ex)
            })
        })
    }
}