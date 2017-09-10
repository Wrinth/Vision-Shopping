'use strict';

/**
 * @ngdoc overview
 * @name teamgrassesApp
 * @description
 * # teamgrassesApp
 *
 * Main module of the application.
 */
angular
  .module('teamgrassesApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngRoute',
    'ngFileUpload'
  ])
  .config(config)
  .run(run);

config.$inject = ['$routeProvider', '$locationProvider'];
function config($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            controllerAs: 'main'
        })
        .when('/shoppingcart', {
            templateUrl: 'views/shoppingcart.html',
            controller: 'ShoppingCartCtrl',
            controllerAs: 'shoppingcart'
        })
        .when('/login', {
            controller: 'LoginCtrl',
            templateUrl: 'views/login.html',
            controllerAs: 'login'
        })
        .when('/register', {
            controller: 'RegisterCtrl',
            templateUrl: 'views/register.html',
            controllerAs: 'register'
        })
        .when('/user', {
          controller: 'UserCtrl',
          templateUrl: 'views/user.html',
          controllerAs: 'user'
        })
        .when('/nofound', {
            templateUrl: '404.html'
        })
        .otherwise({
            redirectTo: '/nofound'
        });
    $locationProvider.hashPrefix('');
}
run.$inject = ['$rootScope', '$location', '$cookies', '$http'];
function run($rootScope, $location, $cookies, $http) {
    // keep user logged in after page refresh
    $rootScope.globals = $cookies.getObject('globals') || {};
    if ($rootScope.globals.currentUser) {
        $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
    }

    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        // redirect to login page if not logged in and trying to access a restricted page
        var restrictedPage = $.inArray($location.path(), ['/user']) === 1;
        //$.inArray($location.path(), ['/', '/login', '/register', '/contactus']) === -1;
        var loggedIn = $rootScope.globals.currentUser;
        if (restrictedPage && !loggedIn) {
            $location.path('/login');
        }
    });

}
