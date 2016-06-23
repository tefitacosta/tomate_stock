(function () {
  var login = angular.module ('peopleManager.login')
  login.controller('loginController', ['$scope',
                                       '$state',
                                       '$stateParams',
                                       'toaster',
                                       '$sessionStorage',
                                       '$localStorage',
  function ($scope, $state, $stateParams, toaster,$sessionStorage, $localStorage) {

    $scope.user = {}
    $scope.login = function () {
     $scope.isEnrolled = false
     if ($scope.user && scope.user.email && scope.user.password) {
        $scope.isEnrolled = userIsEnrolled()
     }
     if ($scope.isEnrolled) {
       $sessionStorage.currentUser = $scope.user
       toaster.success ('Bienvenido')
       $state.go ('people') <!-- irse para ese estado -->
     } else {
       toaster.error ('El usuario no existe, revise e-mail y password')
     }
   };

   function userIsEnrolled() {
     var enrroled = false
     $scope.users = $localStorage.users
     for (var i = 0; i < $scope.users.length; i++) {
       if (($scope.users[i])) {
         . <!--voy aqui -->
       }
       $scope.users.i]
     }

   }
  }]);
})();
