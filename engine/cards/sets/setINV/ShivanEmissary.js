"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShivanEmissary extends Card {
  constructor(game) {
    super(game, "Shivan Emissary", "Invasion", "INV");
  }
}

module.exports = ShivanEmissary;
