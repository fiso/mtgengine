"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KiraGreatGlassSpinnerBase = require("../setBOK/KiraGreatGlassSpinner.js");

class KiraGreatGlassSpinner extends KiraGreatGlassSpinnerBase {
  constructor(game) {
    super(game, "Kira, Great Glass-Spinner", "Modern Masters", "MMA");
  }
}

module.exports = KiraGreatGlassSpinner;
