"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MemoryCrystal extends Card {
  constructor(game) {
    super(game, "Memory Crystal", "Exodus", "EXO");
  }
}

module.exports = MemoryCrystal;
