"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VolrathsShapeshifterBase = require("../setSTH/VolrathsShapeshifter.js");

class VolrathsShapeshifter extends VolrathsShapeshifterBase {
  constructor(game) {
    super(game, "Volrath's Shapeshifter", "Vintage Masters", "VMA");
  }
}

module.exports = VolrathsShapeshifter;
