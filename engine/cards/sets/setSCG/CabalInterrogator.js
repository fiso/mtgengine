"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CabalInterrogator extends Card {
  constructor(game) {
    super(game, "Cabal Interrogator", "Scourge", "SCG");
  }
}

module.exports = CabalInterrogator;
