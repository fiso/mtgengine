"use strict";
const Constants = require ("../../../Constants");
const SpreadtheSicknessBase = require("../setMM2/SpreadtheSickness");

class SpreadtheSickness extends SpreadtheSicknessBase {
  constructor (game) {
    super(game, "Spread the Sickness", "Mirrodin Besieged", "MBS");
  }
}

module.exports = SpreadtheSickness;
