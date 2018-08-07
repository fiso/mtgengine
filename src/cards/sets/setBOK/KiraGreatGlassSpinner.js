"use strict";
const Constants = require ("../../../Constants");
const KiraGreatGlassSpinnerBase = require("../setMMA/KiraGreatGlassSpinner");

class KiraGreatGlassSpinner extends KiraGreatGlassSpinnerBase {
  constructor (game) {
    super(game, "Kira, Great Glass-Spinner", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = KiraGreatGlassSpinner;
