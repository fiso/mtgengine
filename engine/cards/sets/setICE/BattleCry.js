"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BattleCry extends Card {
  constructor(game) {
    super(game, "Battle Cry", "Ice Age", "ICE");
  }
}

module.exports = BattleCry;
