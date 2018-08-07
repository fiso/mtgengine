"use strict";
const Constants = require ("../../../Constants");
const NamelessInversionBase = require("../setMM2/NamelessInversion");

class NamelessInversion extends NamelessInversionBase {
  constructor (game) {
    super(game, "Nameless Inversion", "Magic Player Rewards 2009", "P09");
  }
}

module.exports = NamelessInversion;
