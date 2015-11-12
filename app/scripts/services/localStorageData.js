var localStorageModule;

/*
 * Clousure Init & Config
 */
(function () {
  'use strict';
  angular
    .module('localStorageModule', []);
    
  localStorageModule = angular.module('localStorageModule');
})();

/*
 * Clousure Factory/Service
 */
(function (app) {
  'use strict';
  /**
   * @ngdoc service
   * @name localStorageModule.sessionStorageService
   * @description
   * # sessionStorageService
   * Service in the localStorageModule.
   */
  app
    .service('sessionStorageService', ['$rootScope', sessionStorageService]);
    //
    function sessionStorageService ($rootScope) {
    	var theService = this;
    	//
    	theService.saveState = function (key, value) {
    		sessionStorage[key] = angular.toJson(value);
    		//sessionStorage[key] = value;
    	}
    	theService.restoreState = function (key) {
            return angular.fromJson(sessionStorage[key]);
            //return sessionStorage[key];
        }
        theService.deleteState = function (key) {
            sessionStorage[key] = null;
        }
        //
        $rootScope.$on("savestate", theService.saveState);
        $rootScope.$on("restorestate", theService.restoreState);

    }

})(localStorageModule);