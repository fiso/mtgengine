"use strict";
const Constants = require ("../../../Constants");
const PlagueRatsBase = require("../setCED/PlagueRats");

class PlagueRats extends PlagueRatsBase {
  constructor (game) {
    super(game, "Plague Rats", "International Collector's Edition", "CEI");
  }
}

module.exports = PlagueRats;
