
    angular.module('app')
        .directive('brandDetail', brandDetail);

    function brandDetail() {
        var directive = {
            restrict: 'E',
            replace: true,
            controller: 'BrandDetailController',
            controllerAs: 'brandDetail',
            templateUrl: 'app/directives/brand-detail/brand-detail.html'
        };
        return directive;
    }


