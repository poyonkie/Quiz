'use strict';

/**
 * @ngdoc overview
 * @name pollApp
 * @description
 * # pollApp
 *
 * Main module of the application.
 */
var encuestaApp = angular
  .module('pollApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'localStorageModule'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/encuesta', {
        templateUrl: 'views/encuesta.html',
        controller: 'EncuestaCtrl',
        controllerAs: 'encuesta'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
