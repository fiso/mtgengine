"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Dandan extends UnimplementedCard {
  constructor (game) {
    super(game, "Dandân", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = Dandan;
