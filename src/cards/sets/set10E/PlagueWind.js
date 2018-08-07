"use strict";
const Constants = require ("../../../Constants");
const PlagueWindBase = require("../setA25/PlagueWind");

class PlagueWind extends PlagueWindBase {
  constructor (game) {
    super(game, "Plague Wind", "Tenth Edition", "10E");
  }
}

module.exports = PlagueWind;
