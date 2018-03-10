(function() {
    'use strict';

    angular
        .module('multilingualTesterApp')
        .controller('CountryMySuffixDetailController', CountryMySuffixDetailController);

    CountryMySuffixDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Country', 'Region'];

    function CountryMySuffixDetailController($scope, $rootScope, $stateParams, previousState, entity, Country, Region) {
        var vm = this;

        vm.country = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('multilingualTesterApp:countryUpdate', function(event, result) {
            vm.country = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
