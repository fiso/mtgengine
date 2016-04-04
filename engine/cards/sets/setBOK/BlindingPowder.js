"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlindingPowder extends Card {
  constructor(game) {
    super(game, "Blinding Powder", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = BlindingPowder;
