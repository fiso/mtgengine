"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TreasureMage extends Card {
  constructor(game) {
    super(game, "Treasure Mage", "Magic Game Day", "pMGD");
  }
}

module.exports = TreasureMage;
