angular.module('rand-page-js')
.directive("pageFooter", function(){
    return {
      templateUrl: 'app/common/pageFooter.html',
      replace: true
    }
  });
