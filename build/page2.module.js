// Second sub-module for a navigable page
angular.module('page2', ['ngRoute']);

// Route Config
angular
    .module('page2')
    .config(function($routeProvider) {
        $routeProvider
            .when('/page2', {
                templateUrl: 'page2.view.html',
                controller: 'Page2Controller'
                }
            );
    });
    
angular
    .module('page2')
    .controller('Page2Controller', Page2Controller);
    
function Page2Controller() {
    console.log('Page2Controller Loaded');
}