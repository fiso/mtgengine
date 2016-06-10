"use strict";
const Constants = require ("../../../Constants");
const MysticGateBase = require("../setSHM/MysticGate");

class MysticGate extends MysticGateBase {
  constructor (game) {
    super(game, "Mystic Gate", "Zendikar Expedition", "EXP");
  }
}

module.exports = MysticGate;
