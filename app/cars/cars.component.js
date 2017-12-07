angular.module("fourWheels").component("cars", {
  templateUrl: "app/cars/cars.template.html",
  controllerAs: "carsCtrl",
  controller: function(carsSrvc) {
    this.cars = carsSrvc.cars

    this.buyCar = function(id) {
      carsSrvc.buyCar(id)
      this.cars = carsSrvc.cars
    }
  },
  // this is not used in the mini, it's just an example of bindings...
  // data binding is the directional flow of data. < is 1 way data binding, and = is 2 way data binding (meaning parent and child can manipulate data)
  bindings: {
    buttonLabel: "@", // the @ symbol makes it a literal string value
    submit: "&", // & is a function that is invoked.
    inputValue: "=" // and is getting some sort of 2 way data binding from the parent.
  }
})

// in the html file, button-label will be done with dashes, whatever that case convention is called ... lol
// button-label="Submit Todo" submit="tdv.addTodo()" *invokes the todoaddon*
