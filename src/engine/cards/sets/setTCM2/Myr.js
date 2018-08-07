"use strict";
const Constants = require ("../../../Constants");
const MyrBase = require("../setTC18/Myr");

class Myr extends MyrBase {
  constructor (game) {
    super(game, "Myr", "Commander Anthology Volume II Tokens", "TCM2");
  }
}

module.exports = Myr;
