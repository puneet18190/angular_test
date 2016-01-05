// angular.module('testapp').controller('MainCtrl', ['$scope', 'students', function($scope, students){
// 	$scope.data = "hello world";

// 	$scope.students = students.students;
// 	$scope.create_student = function(){
// 		students.create({
// 			name: $scope.name,
// 			phone: $scope.phone,
// 			address: $scope.address
// 		});
// 		$scope.name = '';
// 		$scope.phone = '';
// 		$scope.address = '';
// 	}

// 	$scope.delete_student = function(student){
// 		students.delete(student)
// 		var index = -1;		
// 		var comArr = eval( $scope.students );
// 		for( var i = 0; i < comArr.length; i++ ) {
// 			if( comArr[i].name === student.name ) {
// 				index = i;
// 				break;
// 			}
// 		}
// 		if( index === -1 ) {
// 			alert( "Something gone wrong" );
// 		}
// 		$scope.students.splice( index, 1 );
// 	}

// }])