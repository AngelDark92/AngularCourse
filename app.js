(function () {
  // to use only locally declared variables
  'use strict';

  // create the angular module
  angular.module('InputBox', [])
    // and its controller
    .controller("InputBoxController", InputBoxController);

  // inject the scope to the controller
  InputBoxController.$inject = ["$scope"];
  function InputBoxController($scope) {
    $scope.input = "";
    $scope.check = "";
    $scope.colour = "black";

    $scope.checkIfPresent = function () {
      var arrayStrings = $scope.input.split(";");
      var count = 0;
      arrayStrings.filter(item => item.trim() != "").forEach(item =>
        {
          count++;
        });
      if (!(count > 0)) {
        $scope.check = "Please enter data first";
        $scope.colour = "red";
      }
      else if (count <= 3) {
        $scope.check = "Enjoy!";
        $scope.colour = "green";
      }
      else {
        $scope.check = "Too much!";
        $scope.colour = "green";
      }
    }

    };
})();
