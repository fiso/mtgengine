"use strict";
const Constants = require ("../../../Constants");
const GildedLightBase = require("../setVMA/GildedLight");

class GildedLight extends GildedLightBase {
  constructor (game) {
    super(game, "Gilded Light", "Scourge", "SCG");
  }
}

module.exports = GildedLight;
