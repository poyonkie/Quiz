'use strict';
(function (app) {

	/**
	 * @ngdoc function
	 * @name pollApp.controller:AboutCtrl
	 * @description
	 * # AboutCtrl
	 * Controller of the pollApp
	 */
	app.controller('EncuestaCtrl', ['$scope', 'sessionStorageService', EncuestaCtrl]);

	function EncuestaCtrl ($scope, sSs) {
		var poll = sSs.restoreState('encuesta') && sSs.restoreState('encuesta') || {}; 
		var index = sSs.restoreState('encuesta') && objSize(poll) || 0;
		$scope.encuesta = {};
		//
		$scope.enabledSubmit = function () {
			sSs.saveState('item_encuesta', $scope.encuesta);
			var bool = true;
			if(objSize($scope.encuesta) === 3) {
				bool = false;
			}
			return bool;
		}
		$scope.submitPoll = function () {
			poll[index] = $scope.encuesta;
			sSs.saveState('encuesta', angular.fromJson(poll));
			$scope.encuesta = {};
			index ++;
			//
			console.log('encuesta store', sSs.restoreState('encuesta'));
		}
	}

	function objSize (obj) {
		    var size = 0, key;
		    for (key in obj) {
		        if (obj.hasOwnProperty(key)) size++;
		    }
		    return size;
	};

})(encuestaApp);


/*

Save to file as soon submit 'fileSysten API'.
route '/view-records' to view file saved.
login php and integration sessionStorage ('token').
routing main if no login
offline mode

*/