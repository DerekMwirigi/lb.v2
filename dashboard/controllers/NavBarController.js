NavBarController = {
    getNavBar : function (navFile){
        xit.files.readJsonFile(navFile).then(function (content){
            var htmlContent = ''
            content.forEach(navItemModel => {
                htmlContent += '<li class="nav-item ">'
                    htmlContent += '<a class="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-' + navItemModel.id + '" aria-controls="submenu-' + navItemModel.id + '"><i class="' + navItemModel.icon + '"></i>' + navItemModel.label + '</a>'
                    htmlContent += '<div id="submenu-' + navItemModel.id + '" class="collapse submenu">'
                        htmlContent += '<ul class="nav flex-column">'
                        navItemModel.subs.forEach(navSubItemModel => {
                            htmlContent += '<li class="nav-item">'
                            htmlContent += '<a class="nav-link" href="#' + navSubItemModel.selector + '" view="' + navSubItemModel.view + '" onclick="navClick(this, null, true)">' + navSubItemModel.label + '</a>'
                            htmlContent += '</li>'
                        })
                        htmlContent += '</ul>'
                    htmlContent += '</div>'
                htmlContent += '</li>'
            })
            $('#ulNavBar').append(htmlContent)
        }).catch(function (error){
            alert(error)
        })
    },
    itemClick : function (view){
        // $('#ulItems li a').each(function () {
        //     $(this).removeClass('nav-link active')
        //     $(this).addClass('nav-link')
        //     $(this).collapse("hide")
        // });
        // $(view).addClass('nav-link active')
    }
}