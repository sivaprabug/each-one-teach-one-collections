app.directive("validPassword", [function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attribute, ctrl) {
            console.log('ctrl', ctrl);
            ctrl.$parsers.push(function() {
                var noMatch = scope.profileForm.passwordReType.$viewValue === scope.profileForm.passwordVerify.$viewValue;

                console.log('noMatch', noMatch);

                scope.profileForm.passwordVerify.$setValidity('noMatch', noMatch);
                scope.profileForm.passwordReType.$setValidity('noMatch', noMatch);

                return noMatch ? noMatch : !noMatch;

            });
        }
    };
}]);
