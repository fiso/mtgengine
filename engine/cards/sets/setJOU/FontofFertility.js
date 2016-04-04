"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FontofFertilityBase = require("../setCPK/FontofFertility.js");

class FontofFertility extends FontofFertilityBase {
  constructor(game) {
    super(game, "Font of Fertility", "Journey into Nyx", "JOU");
  }
}

module.exports = FontofFertility;
