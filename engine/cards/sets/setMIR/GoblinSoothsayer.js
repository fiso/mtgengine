"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinSoothsayer extends Card {
  constructor(game) {
    super(game, "Goblin Soothsayer", "Mirage", "MIR");
  }
}

module.exports = GoblinSoothsayer;
