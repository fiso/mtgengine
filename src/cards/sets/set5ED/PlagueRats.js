"use strict";
const Constants = require ("../../../Constants");
const PlagueRatsBase = require("../setCED/PlagueRats");

class PlagueRats extends PlagueRatsBase {
  constructor (game) {
    super(game, "Plague Rats", "Fifth Edition", "5ED");
  }
}

module.exports = PlagueRats;
