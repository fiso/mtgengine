"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FireWhip extends UnimplementedCard {
  constructor(game) {
    super(game, "Fire Whip", "Time Spiral \"Timeshifted\"", "TSB");
  }
}

module.exports = FireWhip;
