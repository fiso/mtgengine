"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CoffinQueen extends Card {
  constructor(game) {
    super(game, "Coffin Queen", "Tempest", "TMP");
  }
}

module.exports = CoffinQueen;
