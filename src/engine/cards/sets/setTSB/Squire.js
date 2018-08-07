"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Squire extends UnimplementedCard {
  constructor (game) {
    super(game, "Squire", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = Squire;
