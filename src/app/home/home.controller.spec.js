'use strict';

describe('controllers', function(){
  var scope;

  beforeEach(module('rand-page-js'));

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

});
