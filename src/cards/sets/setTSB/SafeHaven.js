"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SafeHaven extends UnimplementedCard {
  constructor (game) {
    super(game, "Safe Haven", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = SafeHaven;
