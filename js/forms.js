var formsApp = angular.module('formsApp', []);

formsApp.controller('FormsCtrl', function($scope) {
    $scope.tags = TAGS;
    $scope.tagNames = Object.keys($scope.tags);
    $scope.editingTitle = false;
    $scope.eventTitle = "Click here to input a title";
    $scope.selectedTags = [];

    $scope.editTitle = function(){
    	$scope.editingTitle = true;
    };

    $scope.finishTitle = function(event){
    	$scope.editingTitle = event.which == 13 ? false : true;
    };

    $scope.showOptions = function(event){
    	var e = angular.element(event.currentTarget);
    	e.data().$scope.st.showOptions = true;
    	e.addClass("move-left");
    };

    $scope.hideOptions = function(event){
    	var e = angular.element(event.currentTarget);
    	e.removeClass("move-left");
    	e.data().$scope.st.showOptions = false;
    };

    $scope.deleteTag = function(event){
    	var e = angular.element(event.currentTarget);
    	var parent = angular.element(e.parent().parent());
    	var st = parent.data().$scope.st;
    	$scope.selectedTags = removeFromArray(st, $scope.selectedTags);
    	parent.remove();
    };
});

formsApp.directive('ngDraggable', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {

            angular.element(element).attr("draggable", true);

            element.bind("dragstart", function(event) {
                event.dataTransfer.setData("tagName", element.text());
            });

            element.bind("dragend", function(event) {});
        }
    }
});

formsApp.directive('ngDropable', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {

            element.bind("dragenter", function(event) {
                element.addClass("drag-enter");
            });

            element.bind("dragover", function(event) {
                event.preventDefault();
                element.addClass("drag-enter");
            });

            element.bind("dragleave", function(event) {
                element.removeClass("drag-enter");
            });

            element.bind("drop", function(event) {
                event.preventDefault();
                element.removeClass("drag-enter");
                var tagName = event.dataTransfer.getData("tagName").trim();
                var tag = angular.copy(scope.tags[tagName]);
                scope.$apply(function(){
                	scope.selectedTags.push(tag);
                });
            });

        }
    }
});
