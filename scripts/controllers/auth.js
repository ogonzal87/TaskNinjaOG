'use strict';

app.controller('AuthController', function($scope, $location, Auth) {

  $scope.register = function(user) {
    Auth.register(user).then(function() {
      console.log("Register Succesfully");
      $location.path('/');
    }, function(err) {
      console.log('Error...');
    });
  };

  $scope.login = function(user) {
    Auth.login(user).then(function() {
        console.log("Logged in Successfully");
        $location.path('/');
    }, function(err) {
        console.log("Error...");
    });
  };

  $scope.changePassword = function(user) {

    Auth.changePassword(user).then(function() {

        //Reset form
        $scope.user.email = '';
        $scope.user.oldPass = '';
        $scope.user.newPass = '';

        console.log("Password chnaged successfully");
    }, function(err) {
        console.log("Error...");
    });
  };

});
