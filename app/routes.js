angular.module("app").config(function($routeProvider){
    $routeProvider.when("/",{
        templateUrl: "app/templates/home.html"
    })
    .when("/comingsoon",{
        templateUrl: "app/templates/comingsoon.html"
    })
    .when("/contact",{
        templateUrl: "app/templates/contact.html"
    })
    .when("/portfolio",{
        templateUrl: "app/templates/portfolio.html"
    })
    .when("/privacy",{
        templateUrl: "app/templates/privacy.html"
    })
    .when("/service",{
        templateUrl: "app/templates/service.html"
    })
    .otherwise({
        templateUrl: "app/templates/error.html"
    });
});