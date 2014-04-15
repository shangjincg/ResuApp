'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('TechSkillController', ['$scope', '$http', function($scope, $http) {

	$http.get('techSkills/techSkills.json').success(function(data1) {
	  $scope.techSkills = data1;
	});

	$http.get('techSkills/techTypes.json').success(function(data) {
	  $scope.techTypes = data;
	  $scope.skillquery = "";
	});
	
	$scope.setSkillQuery = function(query) {
      $scope.skillquery = query;
    }

  }])

  .controller('ProjectExperienceController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {

	$http.get('projectExperiences/' + $routeParams.pid + '.json').success(function(data2) {  
	  $scope.projects = data2;	  
	});

	$http.get('projectExperiences/projectList.json').success(function(data2) {  
	  $scope.projectList = data2;	  
	});
  }])















  .controller('MyCtrl2', [function() {

  }]);


