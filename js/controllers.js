angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $ionicModal, $ionicPopup,$timeout) {



  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };


  $ionicModal.fromTemplateUrl('templates/pop.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.pop = modal;
  });

  // Triggered in the login modal to close it
  $scope.closePop = function() {
    $scope.pop.hide();
  };

  // Open the login modal
  $scope.openPop = function() {
    $scope.pop.show();
  };


  $scope.devList = [
    { text: "HTML5", checked: true },
    { text: "CSS3", checked: false },
    { text: "JavaScript", checked: false }
  ];


  // 一个提示对话框
   $scope.showAlert = function() {
     var alertPopup = $ionicPopup.alert({
       // template: '<input type="password" ng-model="data.wifi">',
       // title: 'Don\'t eat that!',
       template: '<div style="height:100px;">pop</div>'
     });
     alertPopup.then(function(res) {
       console.log('Thank you for not eating my delicious ice cream cone');
     });
   };


})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
