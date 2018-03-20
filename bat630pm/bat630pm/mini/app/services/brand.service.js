
    angular.module('app')
        .factory('brandService', brandService);

    function brandService() {

        var service = {
            getAllBrands: _getAllBrands,
            getBrand: _getBrand
        };

        function _getAllBrands () {
            return [
                { Id: 1, Name: "Nokia" },
                { Id: 2, Name: "Dell" },
                { Id: 3, Name: "Sony" },
                { Id: 4, Name: "HP" },
                { Id: 5, Name: "Apple" }
            ];
        }
        function _getBrand (id) {
            if(id == 1)
                return { Id: 1, Name: "Nokia", Website: "http://www.nokia.com" };
            else if(id == 2)
                return { Id: 2, Name: "Dell", Website: "http://www.dell.com" };
            else if(id == 3)
                return { Id: 3, Name: "Sony", Website: "http://www.sony.com" };
            else if(id == 4)
                return { Id: 4, Name: "HP", Website: "http://www.hp.com" };
            else if(id == 5)
                return { Id: 5, Name: "Apple", Website: "http://www.apple.com" };
        }
        return service;
    }
