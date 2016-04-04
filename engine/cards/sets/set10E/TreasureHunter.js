"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TreasureHunterBase = require("../setEXO/TreasureHunter.js");

class TreasureHunter extends TreasureHunterBase {
  constructor(game) {
    super(game, "Treasure Hunter", "Tenth Edition", "10E");
  }
}

module.exports = TreasureHunter;
