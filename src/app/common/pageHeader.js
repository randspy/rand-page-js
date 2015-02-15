angular.module('rand-page-js')
.directive("pageHeader", function(){
    return {
      templateUrl: 'app/common/pageHeader.html',
      replace: true
    }
  });
