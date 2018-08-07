"use strict";
const Constants = require ("../../../Constants");
const FontofFertilityBase = require("../setCP1/FontofFertility");

class FontofFertility extends FontofFertilityBase {
  constructor (game) {
    super(game, "Font of Fertility", "Journey into Nyx", "JOU");
  }
}

module.exports = FontofFertility;
