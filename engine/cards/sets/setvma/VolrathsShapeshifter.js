"use strict";
const Constants = require ("../../../Constants");
const VolrathsShapeshifterBase = require("../setSTH/VolrathsShapeshifter");

class VolrathsShapeshifter extends VolrathsShapeshifterBase {
  constructor(game) {
    super(game, "Volrath's Shapeshifter", "Vintage Masters", "VMA");
  }
}

module.exports = VolrathsShapeshifter;
