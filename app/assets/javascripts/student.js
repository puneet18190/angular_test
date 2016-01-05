angular.module('testapp').factory('students', ['$http', function($http){
	var o = {
		students: []
	};

	o.getAll = function(){
		return $http.get('/students.json').success(function(data){
			angular.copy(data, o.students);
		})
	}

	o.create = function(student){
		return $http.post('/students.json', student).success(function(data){
			o.students.push(data);
		})
	}

	o.get = function(id){
		return $http.get('/students/'+id+'.json').then(function(res){
			return res.data;
		})
	}

	o.delete = function(student){
		return $http.delete('/students/'+student.id+'.json').success(function(data){
			
		})
	}

	return o;
}])