"use strict";
const Constants = require ("../../../Constants");
const CarapaceBase = require("../set5ED/Carapace");

class Carapace extends CarapaceBase {
  constructor(game) {
    super(game, "Carapace", "Homelands", "HML");
  }
}

module.exports = Carapace;
