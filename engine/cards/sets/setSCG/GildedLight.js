"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GildedLight extends Card {
  constructor(game) {
    super(game, "Gilded Light", "Scourge", "SCG");
  }
}

module.exports = GildedLight;
