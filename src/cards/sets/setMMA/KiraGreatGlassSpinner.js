"use strict";
const Constants = require ("../../../Constants");
const KiraGreatGlassSpinnerBase = require("../setBOK/KiraGreatGlassSpinner");

class KiraGreatGlassSpinner extends KiraGreatGlassSpinnerBase {
  constructor (game) {
    super(game, "Kira, Great Glass-Spinner", "Modern Masters", "MMA");
  }
}

module.exports = KiraGreatGlassSpinner;
