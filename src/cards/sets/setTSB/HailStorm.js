"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HailStorm extends UnimplementedCard {
  constructor (game) {
    super(game, "Hail Storm", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = HailStorm;
