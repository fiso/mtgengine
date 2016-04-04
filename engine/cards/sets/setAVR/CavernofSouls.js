"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CavernofSouls extends Card {
  constructor(game) {
    super(game, "Cavern of Souls", "Avacyn Restored", "AVR");
  }
}

module.exports = CavernofSouls;
