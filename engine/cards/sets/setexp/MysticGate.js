"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MysticGateBase = require("../setSHM/MysticGate.js");

class MysticGate extends MysticGateBase {
  constructor(game) {
    super(game, "Mystic Gate", "Zendikar Expedition", "EXP");
  }
}

module.exports = MysticGate;
