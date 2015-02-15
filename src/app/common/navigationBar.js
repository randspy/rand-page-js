angular.module('rand-page-js')
.directive("navigationBar", function(){
    return {
      templateUrl: 'app/common/navigationBar.html',
      replace: true,
      scope: {
        class: "@"
      }
    }
  });
