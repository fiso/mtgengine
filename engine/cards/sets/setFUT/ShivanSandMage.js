"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShivanSandMage extends Card {
  constructor(game) {
    super(game, "Shivan Sand-Mage", "Future Sight", "FUT");
  }
}

module.exports = ShivanSandMage;
