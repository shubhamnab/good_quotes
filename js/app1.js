  var myapp = angular.module('starter', ["ngClipboard"]);

  myapp.config(['ngClipProvider', function(ngClipProvider) {
    ngClipProvider.setPath("//cdnjs.cloudflare.com/ajax/libs/zeroclipboard/2.1.6/ZeroClipboard.swf");
  }]);

  myapp.controller('Touch1controller', function ($scope) {
    $scope.fallback = function(copy) {
      window.prompt('Press cmd+c to copy the text below.', copy);
    };

    $scope.showMessage = function() {
      console.log("clip-click works!");
    };
  });