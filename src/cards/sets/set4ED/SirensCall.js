"use strict";
const Constants = require ("../../../Constants");
const SirensCallBase = require("../setCED/SirensCall");

class SirensCall extends SirensCallBase {
  constructor (game) {
    super(game, "Siren's Call", "Fourth Edition", "4ED");
  }
}

module.exports = SirensCall;
