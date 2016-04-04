"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GildedLightBase = require("../setSCG/GildedLight.js");

class GildedLight extends GildedLightBase {
  constructor(game) {
    super(game, "Gilded Light", "Vintage Masters", "VMA");
  }
}

module.exports = GildedLight;
