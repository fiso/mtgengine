"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlightedFen extends Card {
  constructor(game) {
    super(game, "Blighted Fen", "Battle for Zendikar", "BFZ");
  }
}

module.exports = BlightedFen;
