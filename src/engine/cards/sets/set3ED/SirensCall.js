"use strict";
const Constants = require ("../../../Constants");
const SirensCallBase = require("../set4ED/SirensCall");

class SirensCall extends SirensCallBase {
  constructor (game) {
    super(game, "Siren's Call", "Revised Edition", "3ED");
  }
}

module.exports = SirensCall;
