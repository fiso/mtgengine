"use strict";
const Constants = require ("../../../Constants");
const GildedLightBase = require("../setSCG/GildedLight");

class GildedLight extends GildedLightBase {
  constructor (game) {
    super(game, "Gilded Light", "Vintage Masters", "VMA");
  }
}

module.exports = GildedLight;
