"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StormscapeFamiliar extends UnimplementedCard {
  constructor (game) {
    super(game, "Stormscape Familiar", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = StormscapeFamiliar;
