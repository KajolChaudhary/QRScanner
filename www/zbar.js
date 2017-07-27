var argscheck = require('cordova/argscheck'),
    exec      = require('cordova/exec');

function ZBar () {};

ZBar.prototype = {

    scan: function (params, success, failure)
    {
        argscheck.checkArgs('*fF', 'CsZBar.scan', arguments);

        params = params || {};
        if(params.text_title === undefined) params.text_title = "Scan QR Code";
        if(params.text_instructions === undefined) params.text_instructions = "Please point your camera at the QR code.";
        if(params.camera != "front") params.camera = "back";
        if (params.flash != "on" && params.flash != "off") params.flash = "auto";
        // (params.is_logged_in) 

        exec(success, failure, 'CsZBar', 'scan', [params]);
    },

    login: function (success) {
        exec(success, success, 'CsZBar', 'login', null);
    },

    myMagazine: function (success) {
        exec(success, success, 'CsZBar', 'myMagazine', null);
    },

    search: function (success, failure) {
        exec(success, failure, 'CsZBar', 'search', null);
    },

};

module.exports = new ZBar;
