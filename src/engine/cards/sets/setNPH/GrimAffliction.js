"use strict";
const Constants = require ("../../../Constants");
const GrimAfflictionBase = require("../setMM2/GrimAffliction");

class GrimAffliction extends GrimAfflictionBase {
  constructor (game) {
    super(game, "Grim Affliction", "New Phyrexia", "NPH");
  }
}

module.exports = GrimAffliction;
