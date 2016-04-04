"use strict";
const Constants = require ("../../../Constants");
const SirensCallBase = require("../setCED/SirensCall");

class SirensCall extends SirensCallBase {
  constructor(game) {
    super(game, "Siren's Call", "Unlimited Edition", "2ED");
  }
}

module.exports = SirensCall;
