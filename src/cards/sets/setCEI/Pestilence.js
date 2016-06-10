"use strict";
const Constants = require ("../../../Constants");
const PestilenceBase = require("../setBRB/Pestilence");

class Pestilence extends PestilenceBase {
  constructor (game) {
    super(game, "Pestilence", "International Collector's Edition", "CEI");
  }
}

module.exports = Pestilence;
