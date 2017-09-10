(function () {
    'use strict';

    angular
        .module('teamgrassesApp')
        .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$location', 'AuthenticationService', 'FlashService'];
    function LoginCtrl($location, AuthenticationService, FlashService) {
        var controller = this;

        controller.login = login;

        (function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();
        })();

        function login() {
            controller.dataLoading = true;
            AuthenticationService.Login(controller.email, controller.password, function (response) {
                if(response.data.user[0] == null) {
                    FlashService.Error("User information error");
                    controller.dataLoading = false;
                } else if (!angular.equals({}, response.data.user[0])) {
                    AuthenticationService.SetCredentials(controller.email, controller.password);
                    $location.path('/');
                } else {
                    FlashService.Error("User doesn't exist");
                    controller.dataLoading = false;
                }
            });
        }
    }

})();