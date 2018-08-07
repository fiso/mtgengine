"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Conspiracy extends UnimplementedCard {
  constructor (game) {
    super(game, "Conspiracy", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = Conspiracy;
