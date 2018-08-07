"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MysticEnforcer extends UnimplementedCard {
  constructor (game) {
    super(game, "Mystic Enforcer", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = MysticEnforcer;
