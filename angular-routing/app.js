var app = angular.module("app",['ngRoute']);

app.config(['$routeProvider',function ($routeProvider,$locationProvider) {

    $routeProvider.when('/', {
            templateUrl : 'index.html'
        });
    $routeProvider.when('/firstpage',{
            templateUrl:'firstpage.html'
        });
    $routeProvider.when('/secondpage',{
            templateUrl:'secondpage.html'
        })
        .when("/courses",{
            templateUrl:"courses.html"
        })
    
}]);