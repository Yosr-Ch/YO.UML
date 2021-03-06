(function() {
    'use strict';
    angular
        .module('demoApp')
        .factory('Diagram', Diagram);

    Diagram.$inject = ['$resource'];


    function Diagram ($resource) {
        var resourceUrl =  'api/diagrams/:diagId';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                params: '{diagId: @diagId}',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
