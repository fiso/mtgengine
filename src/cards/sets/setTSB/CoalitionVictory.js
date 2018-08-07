"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CoalitionVictory extends UnimplementedCard {
  constructor (game) {
    super(game, "Coalition Victory", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = CoalitionVictory;
