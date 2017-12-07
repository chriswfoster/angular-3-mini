angular.module("fourWheels").component("footer", {
  templateUrl: "app/footer/footer.template.html",
  controllerAs: "footerCtrl", // then you reference this Ctrl name with a ng-model OR ng-click in the .html file. You can pick the function names or this.whatever part with footerCtrl.email, for example
  controller: function() {
    this.name = ""
    this.email = ""
    this.contacted = false

    this.contact = function() {
      this.contacted = true
      this.name = ""
      this.email = ""
    }
  }
})
