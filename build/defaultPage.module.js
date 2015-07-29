angular.module('defaultPage', ['ngRoute']);

angular
    .module('defaultPage')
    .config(function($routeProvider) {
            $routeProvider
                .when('/defaultPage', {
                    template: '<h1>Default Page</h1>',
                    controller: 'DefaultPageController'
                })
                // If the path can't be matched to any defined routes
                .otherwise({
                        redirectTo: '/defaultPage'
                    });
    });
    
angular
    .module('defaultPage')
    .controller('DefaultPageController', DefaultPageController);
    
function DefaultPageController() {}