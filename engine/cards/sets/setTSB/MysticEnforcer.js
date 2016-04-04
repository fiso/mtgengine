"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MysticEnforcerBase = require("../setODY/MysticEnforcer.js");

class MysticEnforcer extends MysticEnforcerBase {
  constructor(game) {
    super(game, "Mystic Enforcer", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = MysticEnforcer;
