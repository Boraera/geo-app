angular.module('conFusion.controllers', [])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout, $ionicPlatform) {

      // With the new view caching in Ionic, Controllers are only called
      // when they are recreated or on app start, instead of every page change.
      // To listen for when this page is active (for example, to refresh data),
      // listen for the $ionicView.enter event:
      //$scope.$on('$ionicView.enter', function(e) {
      //});
})

.controller('MusiciansController', ['$scope', 'musicians', 'musicianFactory', 'baseURL', function($scope, musicians,  musicianFactory, baseURL) {
            
        $scope.baseURL = baseURL;
        $scope.musicians = musicians;
 }])

.controller('EventsController', ['$scope', 'events', 'eventsFactory', 'baseURL', function($scope, events,  eventsFactory, baseURL) {
            
        $scope.baseURL = baseURL;
        $scope.events = events;
 }])

.controller('OurmusicController', ['$scope', 'ourmusic', 'ourmusicFactory', 'baseURL', function($scope, ourmusic,  ourmusicFactory, baseURL) {
            
        $scope.baseURL = baseURL;
        $scope.ourmusic = ourmusic;
 }])
;
