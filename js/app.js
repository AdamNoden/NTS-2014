var app = angular.module('app', []);



// DIRECTIVES
//------------------------------------------------------------------------


app.directive("section1", function() {
    return {
        restrict: "E",
        templateUrl: "partials/section1.html"
    };
});

app.directive("section2", function() {
    return {
        restrict: "E",
        templateUrl: "partials/section2.html"
    };
});