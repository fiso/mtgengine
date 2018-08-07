"use strict";
const Constants = require ("../../../Constants");
const MyrBase = require("../setTC18/Myr");

class Myr extends MyrBase {
  constructor (game) {
    super(game, "Myr", "Magic Player Rewards 2004", "P04");
  }
}

module.exports = Myr;
