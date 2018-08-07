"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WindShear extends UnimplementedCard {
  constructor (game) {
    super(game, "Wind Shear", "Visions", "VIS");
  }
}

module.exports = WindShear;
