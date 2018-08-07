"use strict";
const Constants = require ("../../../Constants");
const MysticEnforcerBase = require("../setTSB/MysticEnforcer");

class MysticEnforcer extends MysticEnforcerBase {
  constructor (game) {
    super(game, "Mystic Enforcer", "Odyssey", "ODY");
  }
}

module.exports = MysticEnforcer;
