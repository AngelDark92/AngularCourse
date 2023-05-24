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
    $scope.check = "Please enter data first";

    $scope.checkIfPresent = function () {
      var check = checkArray($scope.input);
      $scope.check = check;
    };


    function checkArray(string) {
      var arrayStrings = string.split(";");
      var count = 0;
      arrayStrings.filter(item => item.trim() != "").forEach(item =>
        {
          count++;
        });
      if (!(count > 0)) {
        return "Please enter data first";
      }
      else if (count <= 3) {
        return "Enjoy!";
      }
      else {
        return "Too much!";
      }
    }

  };


})();
