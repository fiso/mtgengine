"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlindingMage extends Card {
  constructor(game) {
    super(game, "Blinding Mage", "Magic 2010", "M10");
  }
}

module.exports = BlindingMage;
