"use strict";
const Constants = require ("../../../Constants");
const PestilenceBase = require("../setBRB/Pestilence");

class Pestilence extends PestilenceBase {
  constructor (game) {
    super(game, "Pestilence", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = Pestilence;
