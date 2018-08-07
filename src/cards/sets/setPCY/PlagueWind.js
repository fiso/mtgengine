"use strict";
const Constants = require ("../../../Constants");
const PlagueWindBase = require("../setA25/PlagueWind");

class PlagueWind extends PlagueWindBase {
  constructor (game) {
    super(game, "Plague Wind", "Prophecy", "PCY");
  }
}

module.exports = PlagueWind;
