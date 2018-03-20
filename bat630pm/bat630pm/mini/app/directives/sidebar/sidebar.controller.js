
    angular.module('app')
        .controller('SidebarController', SidebarController);

//    SidebarController.$inject = ['$rootScope', 'brandService'];
    function SidebarController($rootScope, brandService) {

        var vm = this;
        vm.sidebarItems = null;
        vm.activate = _activate;
        vm.selectBrand = _selectBrand;

        _activate();

        function _activate()
        {

            vm.sidebarItems = brandService.getAllBrands();
//			console.log(vm.sidebarItems)
            $rootScope.selectedBrandId = vm.sidebarItems[0].Id;
        }

        function _selectBrand(brand)
        {
            $rootScope.selectedBrandId = brand.Id;
//			alert($rootScope.selectedBrandId)

        }
    }

