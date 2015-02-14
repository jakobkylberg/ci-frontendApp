angular.module('myApp')
    .controller('PersonController', PersonController);

function PersonController(PersonService) {
    this.country = "";
    var that = this;
    PersonService.query().$promise.then(function (response) {
       that.persons = response;
    });
}

PersonController.prototype.onChangeCountry = function() {
    console.log("on change");
};
