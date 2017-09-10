(function  (angular) {
	'use strict';
	//独立的模块
	var controllers = /**
	* app.controllers.main Module
	*
	* Description
	*/
	angular.module('app.controllers.main', ['app.services.main']);
	controllers.controller('MainController', [
		'$scope',
		'$routeParams',
		'$route',
		'MainService', 
		function($scope,$routeParams,$route,MainService){
			//文本框需要一个模型,为了拿到文本输入的值
			$scope.text = '';
			//任务列表也需要一个
			//每一个任务的结构 { id: 1, text: '学习', completed: true }
			$scope.todos = MainService.get();
			//添加todo

		
		}
	])
})