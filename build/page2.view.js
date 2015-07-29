(function(module) {
try {
  module = angular.module('main');
} catch (e) {
  module = angular.module('main', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('page2.view.html',
    '<h1>Page 2</h1>');
}]);
})();
