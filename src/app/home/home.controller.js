'use strict';

angular.module('rand-page-js')
  .controller('HomeCtrl', function ($scope) {

    $scope.checked = false;
    $scope.elemInView = function ($inview, $inviewpart, $event) {

      var isElementFullyPresentOnScreen = function (value) {
        return value === "both";
      };

      if (isElementFullyPresentOnScreen($inviewpart)) {
        $scope.checked = false;
      }
      else {
        $scope.checked = true;
      }
    };

  });
