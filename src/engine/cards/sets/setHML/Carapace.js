"use strict";
const Constants = require ("../../../Constants");
const CarapaceBase = require("../setME2/Carapace");

class Carapace extends CarapaceBase {
  constructor (game) {
    super(game, "Carapace", "Homelands", "HML");
  }
}

module.exports = Carapace;
