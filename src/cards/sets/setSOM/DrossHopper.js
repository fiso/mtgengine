"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DrossHopper extends UnimplementedCard {
  constructor (game) {
    super(game, "Dross Hopper", "Scars of Mirrodin", "SOM");
  }
}

module.exports = DrossHopper;
