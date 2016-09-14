import Car from "./car.js";

class Board {
  constructor(cars) {
    this.grid = new Array(6).fill(new Array(6));
    this.cars = cars;
    this.selectedCar;
  }

  setUpCars() {
    this.cars.forEach(car => {
      car.segments.forEach(square => {
        // $(`li[data-pos=[${square[0]}, ${square[1]}]`).addClass(car.color);
        let $square = $(`li`).eq(square[0] * this.grid.length + square[1]);
        $square.addClass(car.color);
        $square.addClass("car");
        $square.click(() => {
          $('.selected').removeClass("selected");
          // if ($(`.${car.color}`).hasClass("selected")) {
          //   $(`.${car.color}`).removeClass("selected");
          // } else {
          //   $(`.${car.color}`).addClass("selected");
          // }
          $(`.${car.color}`).addClass("selected");
          this.selectedCar = car;
        });
        // let $carBody = $("<div>");
        // $carBody.append($square);
        // $carBody.addClass("car-body");
      });
    });
  }


  isWon() {
    let $redCar = $(".red");
    // $redCar.each(square, () => {
    //   if square.data("pos")
    //   $(window).off("keydown");
    // })

  }
//check on top of other cars;


}

export default Board;
