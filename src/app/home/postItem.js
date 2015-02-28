angular.module('rand-page-js')
.directive("postItem", function(){
    return {
      templateUrl: 'app/home/postItem.html',
      replace: true
    }
  });
