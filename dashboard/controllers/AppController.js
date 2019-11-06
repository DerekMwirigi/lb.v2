$(document).ready(function () {
    var userModel = JSON.parse(xit.storage.getValue('loggedInUser'))
    AppController.setupUi(userModel)
})

AppController = {
    setupUi : function (userModel) {
        AppController.displayWithType(userModel)
        AppController.setupConfigs(userModel)
        $('#pUserAvatar').attr('src', userModel.avatar)
        $('#pUserAvatar2').attr('src', userModel.avatar)
        $('#pUserAvatar3').attr('src', userModel.avatar)
        $('#pUserName').html(userModel.firstName)
        $('#pUserEmail').html(userModel.email)
        $('#pUserName2').html(userModel.firstName)
        $('#panelMainContent').html('<img src="assets/images/loader.svg" alt="Paris" class="center">');

        $('#lSignOut').click(function () {
            AuthController.signOut()
        })

        if ($('#spFooter').length) {
            $(document).prop('title', app.name + ' (' + app.version + ')');
            $('#spFooter').html('<strong> <a href="' + app.website + '" target="_blank">' + app.name + ' <small>{ Version ' + app.version + ' }</small> </a></strong> | Registration <strong><a href="' + client.website + '" target="_blank"> ' + client.name + ' </a> </strong> | Developed by <strong> <a href="' + developer.website + '" target="_blank"> ' + developer.name + '</a> </strong>')
            $('#spFooterSignIn').html('<strong> <a href="' + app.website + '" target="_blank">' + app.name + ' <small>{ Version ' + app.version + ' }</small> </a></strong> | Registration <strong><a href="' + client.website + '" target="_blank"> ' + client.name + ' </a> </strong> | Developed by <strong> <a href="' + developer.website + '" target="_blank"> ' + developer.name + '</a> </strong>')
            $('#spClient').html(client.nameshort)
            $('#spApp').html(app.nameshort + ' ~ v' + app.version)
        } else {
            window.location = "error"
        }

        $('#lnProfile').click(function (){
            xit.ui.openview('POST', null, null, 'views/account/profile.html', '#panelMainContent', true)
        })
    },

    displayWithType : function (userModel) {
        $('#imgLogo').attr('src', 'assets/images/logo.svg')
        NavBarController.getNavBar('Config/nav.config.json')
        xit.ui.openview('POST', null, null, 'views/dashboard/index.html', '#panelMainContent', true)
    },

    setupConfigs : function (userModel) {
        xit.storage.saveItem('pageGroups', JSON.stringify([
            { label: 15, value: 15, default: false },
            { label: 25, value: 25, default: true },
            { label: 35, value: 35, default: false },
            { label: 55, value: 55, default: false },
            { label: 85, value: 85, default: false },
            { label: 100, value: 100, default: false },
            { label: 'All', value: 100000, default: false }
        ]))
        var pageGroups = JSON.parse(xit.storage.getValue('pageGroups'))
        pageGroups.forEach(pageGroup => {
            if (pageGroup.default) {
                xit.storage.saveItem('defaultPerPage', JSON.stringify(pageGroup))
            }
        })
    }
}