"use strict";
const Constants = require ("../../../Constants");
const PlagueWindBase = require("../set8ED/PlagueWind");

class PlagueWind extends PlagueWindBase {
  constructor (game) {
    super(game, "Plague Wind", "Ninth Edition", "9ED");
  }
}

module.exports = PlagueWind;
