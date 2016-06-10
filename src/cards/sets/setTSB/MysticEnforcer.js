"use strict";
const Constants = require ("../../../Constants");
const MysticEnforcerBase = require("../setODY/MysticEnforcer");

class MysticEnforcer extends MysticEnforcerBase {
  constructor (game) {
    super(game, "Mystic Enforcer", "Time Spiral \"Timeshifted\"", "TSB");
  }
}

module.exports = MysticEnforcer;
