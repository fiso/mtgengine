"use strict";
const Constants = require ("../../../Constants");
const SirensCallBase = require("../set4ED/SirensCall");

class SirensCall extends SirensCallBase {
  constructor (game) {
    super(game, "Siren's Call", "Limited Edition Alpha", "LEA");
  }
}

module.exports = SirensCall;
