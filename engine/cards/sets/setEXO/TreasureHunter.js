"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TreasureHunter extends Card {
  constructor(game) {
    super(game, "Treasure Hunter", "Exodus", "EXO");
  }
}

module.exports = TreasureHunter;
