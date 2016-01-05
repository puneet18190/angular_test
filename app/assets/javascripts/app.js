angular.module('testapp', ['ui.router']).config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			resolve: {
  		  postPromise: ['students', function(students){
  			 return students.getAll();
  		  }]
      },
			url: '/home',
			templateUrl: '/templates/home.html',
			controller: 'MainCtrl'
		})

		.state('students', {
			resolve: {
  		  student: ['$stateParams', 'students', function($stateParams, students){
  			 return students.get($stateParams.id);
  		  }]
      },
			url: '/students/{id}',
			templateUrl: '/templates/students.html',
			controller: 'StudentCtrl'
		})

	$urlRouterProvider.otherwise('home');
}])
