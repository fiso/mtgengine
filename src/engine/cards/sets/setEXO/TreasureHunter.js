"use strict";
const Constants = require ("../../../Constants");
const TreasureHunterBase = require("../set10E/TreasureHunter");

class TreasureHunter extends TreasureHunterBase {
  constructor (game) {
    super(game, "Treasure Hunter", "Exodus", "EXO");
  }
}

module.exports = TreasureHunter;
