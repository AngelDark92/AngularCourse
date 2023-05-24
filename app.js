(function () {
  // to use only locally declared variables
'use strict';

// create the angular module
angular.module('TavernettaLogin', [])
// and its controller
.controller("Login", Login);

// inject the scope to the controller
Login.$inject = ["$scope"];
// Define the function with one nested function for checking the username
function Login($scope) {
  $scope.name = "";
  $scope.present = " empty";

  $scope.checkIfPresent = function () {
    var present = fill($scope.name);
    $scope.present = present;
  };


function fill(string) {
    if(string.trim().toUpperCase() === "AngeloDark92".toUpperCase())
    {
      return " present";
    }
    if (string == null || string.trim() === '')
    {
      return " empty";
    }
    return " not present";
  }

};


})();
