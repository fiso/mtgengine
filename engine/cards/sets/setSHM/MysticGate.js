"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MysticGate extends Card {
  constructor(game) {
    super(game, "Mystic Gate", "Shadowmoor", "SHM");
  }
}

module.exports = MysticGate;
