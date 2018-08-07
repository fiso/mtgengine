"use strict";
const Constants = require ("../../../Constants");
const MyrBase = require("../setTC18/Myr");

class Myr extends MyrBase {
  constructor (game) {
    super(game, "Myr", "Modern Event Deck 2014 Tokens", "TMD1");
  }
}

module.exports = Myr;
