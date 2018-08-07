"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvoidFate extends UnimplementedCard {
  constructor (game) {
    super(game, "Avoid Fate", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = AvoidFate;
