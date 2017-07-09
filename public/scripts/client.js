console.log("js sourced");

var myApp = angular.module('myApp', ['ngRoute']);
// var vm = this;

myApp.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    template: '',
    controller: 'WelcomeController as wc'
  }).when('/me', {
    templateUrl: 'views/me.html',
    controller: 'MyController as mc'
  }).when('/code', {
    templateUrl: 'views/code.html',
    controller: 'CodeController as cc'
  }).otherwise('/');

  $locationProvider.html5Mode(true);
});

myApp.controller('MyController', ['GithubAPI', function(GithubAPI) {
  var vm = this;

  console.log("myController running");
  var profileObject = GithubAPI.githubProfile().then(function(data){
      console.log(data);
      vm.profile = data;
      vm.login = data.login;
      vm.name = data.name;
      vm.bio = data.bio;
      vm.location = data.location;
      vm.image = data.avatar_url;
      vm.html_url=data.html_url;
  });
  // vm.profile = profileObject.login;
  // vm.bio = GithubAPI.githubProfile().bio;

}]);


myApp.controller('WelcomeController', function() {
  console.log('WelcomeController loaded');
});


myApp.controller('CodeController', ['GithubAPI', function(GithubAPI) {
  console.log('CodeController loaded');
  var vm = this;

  GithubAPI.githubRepos();

  vm.repos=[];

  var profileObject = GithubAPI.githubProfile().then(function(data){
      // console.log(data);
      vm.profile = data;
      vm.login = data.login;
      vm.html_url = data.html_url;
  });

  vm.repos = GithubAPI.githubRepos().then(function(data){
      console.log(data);
      vm.repos = data;
      console.log(vm.repos[1]);
  });

}]);
