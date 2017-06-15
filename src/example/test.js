import '../../dist/css/angularjs-backtop.css';

import angular from 'angular';
import '../../dist/js/angularjs-backtop.js';

const app = angular.module('app', ['AngularjsBackTop']);
app.controller('AppCtrl', [
  '$scope',
  function ($scope) {
    console.warn('test');

    const scope = $scope;

    const testList = [];
    for (let i = 1; i <= 20; i++) {
      testList.push(`Test content ${i}`);
    }

    scope.testList = testList;
  },
]);
