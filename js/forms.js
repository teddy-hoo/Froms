var formsApp = angular.module('formsApp', ['ngSanitize']);

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
                // scope.$apply(function(){
                // 	scope.selectedTags.push(scope.tags[tagName]);
                // });

                element.append(scope.tags[tagName]);
            });

        }
    }
});
