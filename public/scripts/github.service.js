// myApp.service('GithubAPI', function($http) {
//   //Enter your token and username here:
//   var oauthToken = '6d3d75a5f00b6927841efdd881d7bc832abd5633';
//   var username = 'Tganser';
//
//   //Call to Github API to fetch user's profile info
//   this.githubProfile = function(){
//
//     return $http({
//       method: 'GET',
//       url: 'https://api.github.com/users/' + username,
//       headers: {
//         'Authorization': 'token '+ oauthToken}
//       }
//     ).then(function(response) {
//       console.log(response.data);
//       return response.data;
//     });
//   };
//
//   //Call to Github API to fetch list of user's repos
//   this.githubRepos = function(){
//
//     return $http({
//       method: 'GET',
//       url: 'https://api.github.com/users/' + username + '/repos',
//       headers: {
//         'Authorization': 'token '+ oauthToken}
//       }
//     ).then(function(response) {
//       console.log(response.data);
//       return response.data;
//     });
//   };
// });
