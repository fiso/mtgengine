"use strict";
const Constants = require ("../../../Constants");
const OpulentPalaceBase = require("../setCM2/OpulentPalace");

class OpulentPalace extends OpulentPalaceBase {
  constructor (game) {
    super(game, "Opulent Palace", "Khans of Tarkir", "KTK");
  }
}

module.exports = OpulentPalace;
