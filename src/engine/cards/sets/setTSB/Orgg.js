"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Orgg extends UnimplementedCard {
  constructor (game) {
    super(game, "Orgg", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = Orgg;
