angular.module('testapp').controller('StudentCtrl',['$scope', 'students', 'student', function($scope, students, student){
	$scope.student = student;
}])