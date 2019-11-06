sdk = {
    version: '1.0',
    baseurl: 'http://localhost:81/CalistaWebSDK/1.0/'//http://206.81.26.7:443/websdk/1.0/ http://localhost:81/CalistaWebSDK/1.0/
}

$(document).ready(function () {
    $("head").append('<link href="'+sdk.baseurl+'$styles/xit.css" rel="stylesheet"><link href="'+sdk.baseurl+'$styles/jquery.gritter.min.css" rel="stylesheet"><link href="'+sdk.baseurl+'$styles/xit-auto-complete.css" rel="stylesheet"><script src="'+sdk.baseurl+'$scripts/xit.js"></script><script src="'+sdk.baseurl+'$scripts/jquery.gritter.min.js"></script>') 
    $("head").append('<script src="http://code.jquery.com/ui/1.8.24/jquery-ui.min.js"></script>')
    $(document).prop('title', app.name + ' (' + app.version + ')');
    if($('#spFooter').length){
        $('#spFooter').html('<strong> <a href="' + app.website + '" target="_blank">' + app.name + ' <small>{ Version ' + app.version + ' }</small> </a></strong> | Registration <strong><a href="' + client.website +'" target="_blank"> ' + client.name + ' </a> </strong> | Developed by <strong> <a href="' + developer.website + '" target="_blank"> ' + developer.name + '</a> </strong>')
        $('#spFooterSignIn').html('<strong> <a href="' + app.website + '" target="_blank">' + app.name + ' <small>{ Version ' + app.version + ' }</small> </a></strong> | Registration <strong><a href="' + client.website +'" target="_blank"> ' + client.name + ' </a> </strong> | Developed by <strong> <a href="' + developer.website + '" target="_blank"> ' + developer.name + '</a> </strong>')
        $('#spClient').html(client.nameshort)
        $('#spApp').html(app.nameshort + ' ~ v' + app.version)
    }else{
        window.location = "https://apps.calista.co.ke/fake/?source="+btoa(btoa(JSON.stringify(app)))
    }
})
