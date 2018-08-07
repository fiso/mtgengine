"use strict";
const Constants = require ("../../../Constants");
const MysticGateBase = require("../setEXP/MysticGate");

class MysticGate extends MysticGateBase {
  constructor (game) {
    super(game, "Mystic Gate", "Shadowmoor", "SHM");
  }
}

module.exports = MysticGate;
