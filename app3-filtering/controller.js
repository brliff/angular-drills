angular.module('app3').controller('arrayController', function($scope, arrayService) {

    $scope.employees = arrayService.getData();


});