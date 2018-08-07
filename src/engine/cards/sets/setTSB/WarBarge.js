"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WarBarge extends UnimplementedCard {
  constructor (game) {
    super(game, "War Barge", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = WarBarge;
