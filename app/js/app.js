'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/techSkills', {templateUrl: 'partials/techSkills.html', controller: 'TechSkillController'});
  $routeProvider.when('/projectExperiences/:pid', {templateUrl: 'partials/projectExperiences.html', controller: 'ProjectExperienceController'});
  $routeProvider.otherwise({redirectTo: '/projectExperiences/winwin'});
}]);


