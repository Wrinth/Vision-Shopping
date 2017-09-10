(function () {
  'use strict';

  angular
    .module('teamgrassesApp')
    .factory('ProductService', ProductService);

  ProductService.$inject = ['$http'];
  function ProductService($http) {
    var service = {};

    service.GetById = GetById;
    service.GetByKeyword = GetByKeyword;

    return service;

    function GetById(id) {
      return $http.get('./vision-shopping-api/get_products.php?id=' + id).then(handleSuccess, handleError('Error getting product by id'));
    }

    function GetByKeyword(keyword) {
      return $http.get('./vision-shopping-api/get_products.php?keyword='+keyword).then(handleSuccess, handleError('Error getting product by keyword'));
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
