angular.module('fourWheels').component('header', {
    templateUrl: 'app/header/header.template.html',
    controllerAs: 'headerCtrl',
    bindings: {
        title: '@' // @ denotes the binding of a string that doesn't change
    }
})