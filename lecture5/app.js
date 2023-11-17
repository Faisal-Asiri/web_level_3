(function(){
    'user strict';
   
  angular.module('myFirstApp',[])
    .controller('MyfirstController', function ($scope){
        $scope.name="Faisal";
        $scope.sayHello =function(){
          return"hello world";

        };
    });
})();