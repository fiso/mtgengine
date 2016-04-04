"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlindingSpray extends Card {
  constructor(game) {
    super(game, "Blinding Spray", "Khans of Tarkir", "KTK");
  }
}

module.exports = BlindingSpray;
