"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DefiantVanguard extends UnimplementedCard {
  constructor (game) {
    super(game, "Defiant Vanguard", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = DefiantVanguard;
