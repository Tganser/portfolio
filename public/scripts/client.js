console.log("js sourced");

// var myApp = angular.module('myApp');
// var vm = this;

// myApp.controller('MyController', ['GithubAPI', function(GithubAPI) {
//   var vm = this;
//
//   console.log("myController running");
//   var profileObject = GithubAPI.githubProfile().then(function(data){
//       console.log(data);
//       vm.profile = data;
//       vm.login = data.login;
//       vm.name = data.name;
//       vm.bio = data.bio;
//       vm.location = data.location;
//       vm.image = data.avatar_url;
//       vm.html_url=data.html_url;
//   });
//   // vm.profile = profileObject.login;
//   // vm.bio = GithubAPI.githubProfile().bio;
//
// }]);


// myApp.controller('WelcomeController', function() {
//   console.log('WelcomeController loaded');
// });

//
// myApp.controller('CodeController', ['GithubAPI', function(GithubAPI) {
//   console.log('CodeController loaded');
//   var vm = this;
//
//   GithubAPI.githubRepos();
//
//   vm.repos=[];
//
//   var profileObject = GithubAPI.githubProfile().then(function(data){
//       // console.log(data);
//       vm.profile = data;
//       vm.login = data.login;
//       vm.html_url = data.html_url;
//   });
//
//   vm.repos = GithubAPI.githubRepos().then(function(data){
//       console.log(data);
//       vm.repos = data;
//       console.log(vm.repos[1]);
//   });

// });
