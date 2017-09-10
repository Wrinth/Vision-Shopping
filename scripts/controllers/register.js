(function () {
    'use strict';

    angular
        .module('teamgrassesApp')
        .controller('RegisterCtrl', RegisterCtrl);

    RegisterCtrl.$inject = ['UserService', '$location', '$rootScope', 'FlashService'];
    function RegisterCtrl(UserService, $location, $rootScope, FlashService) {
        var controller = this;

        controller.register = register;

        function register() {
            controller.dataLoading = true;
            console.log(controller.user);
            UserService.Create(controller.user)
                .then(function (response) {
                    if (response != null) {
                        FlashService.Success('Registration successful', true);
                        $location.path('/login');
                    } else {
                        FlashService.Error("User's email already exist!");
                        controller.dataLoading = false;
                    }
                });
        }
    }

})();