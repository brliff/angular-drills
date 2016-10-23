angular.module('apiApp').service('apiSrvc', function($http) {

    this.getData = function(type) {
        return $http({
            method: 'GET',
            url: 'http://swapi.co/api/' + type + '/?format=json'
        });
    };


});