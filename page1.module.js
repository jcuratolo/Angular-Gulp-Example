// module declaration for module 
// named 'page1' with a 
// dependency of 'ngRoute'
angular.module('page1', ['ngRoute']);

// Route definitions belonging to this
// module
angular
    .module('page1')
    .config(function($routeProvider) {
        $routeProvider
            .when('/page1', {
                templateUrl: 'page1.view.html',
                controller: 'Page1Controller'
            });
    });

// Create a controller called 'Page1Controller'
// within the module called 'page1'
angular
    .module('page1')
    .controller('Page1Controller', Page1Controller);
    
    function Page1Controller() {
        console.log('Page1Controller Loaded')
    }