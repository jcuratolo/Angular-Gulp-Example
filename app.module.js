// Declare module named 'main' with 3 sub-module dependencies
angular
    .module('main', ['page1','page2','defaultPage']);

// Declare controller called 'MainController' on 'main' module
angular
    .module('main')
    .controller('MainController', MainController);


// Get $scope and $location from dependency injector
MainController.$inject = ['$scope','$location','$rootScope'];

// Pass them into controller in the same order
function MainController($scope, $location, $rootScope) {
    // Listening for the event Angular broadcasts when
    // successfully changing routes and invoking
    // a handler in response
    $rootScope.$on('$routeChangeSuccess', function(){
        $scope.ourLocation = $location.absUrl();
    });
}

