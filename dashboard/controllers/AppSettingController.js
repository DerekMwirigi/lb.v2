AppSettingController = {
    loadOptions : function (optionFile) {
        xit.files.readJsonFile(optionFile).then(function (optionModels){
            var htmlContent = ''
            optionModels.forEach(optionModel => {
                htmlContent += '<div class="dropdown">'
                    htmlContent += '<button class="btn btn-outline-primary dropdown-toggle" type="button" id="dropdownMenuOutlineButton'+optionModel.id+'" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> '+optionModel.label+' </button>'
                    htmlContent += '<div class="dropdown-menu" aria-labelledby="dropdownMenuOutlineButton'+optionModel.id+'">'
                        optionModel.subs.forEach(subOptionModel => {
                            htmlContent += '<a class="dropdown-item" style="font-size: small;" href="#'+subOptionModel.selector+'" view="'+subOptionModel.view+'" onclick="optionClick(this, null)">'+subOptionModel.label+'</a>'
                        })
                    htmlContent += '</div>'
                htmlContent += '</div>'
            })
            $('#dvOptions').html(htmlContent)
        }).catch(function (error){
            alert(error)
        })
    }
}
