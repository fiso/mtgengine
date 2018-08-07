"use strict";
const Constants = require ("../../../Constants");
const MyrBase = require("../setTC18/Myr");

class Myr extends MyrBase {
  constructor (game) {
    super(game, "Myr", "Battlebond Tokens", "TBBD");
  }
}

module.exports = Myr;
