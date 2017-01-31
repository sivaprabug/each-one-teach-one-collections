# ng-repeat

- Iterate every object in the Array.
- Creating an controller

			app.controller('indexController', ['$scope', function($scope) {
		    $scope.countryDetails = [{
		        "Name": "Alfreds Futterkiste",
		        "City": "Berlin",
		        "Country": "Germany"
		    }, {
		        "Name": "Ana Trujillo Emparedados y helados",
		        "City": "Mexico D.F.",
		        "Country": "Mexico"
		    }, {
		        "Name": "Antonio Moreno Taqueria",
		        "City": "Mexico D.F.",
		        "Country": "Mexico"
		    }]
		}]);

 - Then use ng-repeat display the object properties

    <tr ng-repeat="countryDetail in countryDetails">
        <td>{{ countryDetail.Name }}</td>
        <td>{{ countryDetail.City }}</td>
        <td>{{ countryDetail.Country }}</td>
    </tr>