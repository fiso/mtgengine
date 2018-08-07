"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WindSail extends UnimplementedCard {
  constructor (game) {
    super(game, "Wind Sail", "Starter 1999", "S99");
  }
}

module.exports = WindSail;
