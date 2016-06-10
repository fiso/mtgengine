"use strict";
const Constants = require ("../../../Constants");
const TreasureHunterBase = require("../setEXO/TreasureHunter");

class TreasureHunter extends TreasureHunterBase {
  constructor (game) {
    super(game, "Treasure Hunter", "Tenth Edition", "10E");
  }
}

module.exports = TreasureHunter;
