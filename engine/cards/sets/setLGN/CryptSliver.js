"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CryptSliver extends Card {
  constructor(game) {
    super(game, "Crypt Sliver", "Legions", "LGN");
  }
}

module.exports = CryptSliver;
