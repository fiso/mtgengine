"use strict";
const Constants = require ("../../../Constants");
const NamelessInversionBase = require("../setLRW/NamelessInversion");

class NamelessInversion extends NamelessInversionBase {
  constructor(game) {
    super(game, "Nameless Inversion", "Magic Player Rewards", "pMPR");
  }
}

module.exports = NamelessInversion;
