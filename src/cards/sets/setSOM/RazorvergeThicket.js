"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RazorvergeThicket extends UnimplementedCard {
  constructor(game) {
    super(game, "Razorverge Thicket", "Scars of Mirrodin", "SOM");
  }
}

module.exports = RazorvergeThicket;
