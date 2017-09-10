(function () {
    'use strict';

    angular
        .module('teamgrassesApp')
        .factory('UserService', UserService);

    UserService.$inject = ['$http'];
    function UserService($http) {
        var service = {};

        service.GetAll = GetAll;
        service.GetById = GetById;
        service.GetByEmail = GetByEmail;
        service.Create = Create;
        service.Update = Update;
        service.Delete = Delete;

        return service;

        function GetAll() {
            return $http.get('./vision-shopping-api/api.php/user?transform=1').then(handleSuccess, handleError('Error getting all users'));
        }

        function GetById(id) {
            return $http.get('./vision-shopping-api/api.php/user/' + id + '?transform=1').then(handleSuccess, handleError('Error getting user by id'));
        }

        function GetByEmail(email) {
            return $http.get('./vision-shopping-api/api.php/user?filter[]=email,eq,' + email + '&transform=1').then(handleSuccess, handleError('Error getting user by email'));
        }

        function Create(user) {
            return $http.post('./vision-shopping-api/api.php/user/', user).then(handleSuccess, handleError('Error creating user'));
        }

        function Update(user) {
            return $http.put('./vision-shopping-api/api.php/user/' + user.user_id, user).then(handleSuccess, handleError('Error updating user'));
        }

        function Delete(id) {
            return $http.delete('./vision-shopping-api/api.php/user/' + id).then(handleSuccess, handleError('Error deleting user'));
        }

        // private functions

        function handleSuccess(res) {
            return res.data;
        }

        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }
    }

})();
