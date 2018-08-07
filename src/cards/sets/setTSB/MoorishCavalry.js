"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoorishCavalry extends UnimplementedCard {
  constructor (game) {
    super(game, "Moorish Cavalry", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = MoorishCavalry;
