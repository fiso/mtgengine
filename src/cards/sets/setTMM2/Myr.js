"use strict";
const Constants = require ("../../../Constants");
const MyrBase = require("../setTC18/Myr");

class Myr extends MyrBase {
  constructor (game) {
    super(game, "Myr", "Modern Masters 2015 Tokens", "TMM2");
  }
}

module.exports = Myr;
