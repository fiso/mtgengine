"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RazorvergeThicket extends Card {
  constructor(game) {
    super(game, "Razorverge Thicket", "Scars of Mirrodin", "SOM");
  }
}

module.exports = RazorvergeThicket;
