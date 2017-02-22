'use strict';

angular.module('templateApp')

.controller('mainCtrl', function($scope, $location, dataService) {
  var app = this;
  app.listVisible = false;

  app.show = function() {
    app.listVisible = !app.listVisible;
  }

  app.mockListData = [
      {
        'name': 'EuroPanel'
      },
      {
        'name': 'Module V1'
      },
      {
        'name': 'Super Long Module V2'
      }
    ]

});
