angular.module('apiApp').controller('apiCtrl', function($scope, apiSrvc) {

    $scope.getData = function(type){
        apiSrvc.getData(type)
            .then(function(response){
                $scope.warsData = response.data;
                console.log($scope.warsData);
            });
    };
});