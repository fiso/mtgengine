"use strict";
const Constants = require ("../../../Constants");
const VolrathsShapeshifterBase = require("../setVMA/VolrathsShapeshifter");

class VolrathsShapeshifter extends VolrathsShapeshifterBase {
  constructor (game) {
    super(game, "Volrath's Shapeshifter", "Stronghold", "STH");
  }
}

module.exports = VolrathsShapeshifter;
