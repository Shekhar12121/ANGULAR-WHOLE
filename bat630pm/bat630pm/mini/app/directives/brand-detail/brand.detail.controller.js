    angular.module('app')
        .controller('BrandDetailController', BrandDetailController);
    function BrandDetailController($rootScope, brandService) {
        var vm = this;
        vm.brand = null;
        vm.activate = _activate;
        _activate();
        function _activate()
        {
            $rootScope.$watch("selectedBrandId", _loadBrand);
        }
        function _loadBrand()
        {
			alert("hi")
            vm.brand = brandService.getBrand($rootScope.selectedBrandId);
        }
    }

