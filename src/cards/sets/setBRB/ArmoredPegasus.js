"use strict";
const Constants = require ("../../../Constants");
const ArmoredPegasusBase = require("../setATH/ArmoredPegasus");

class ArmoredPegasus extends ArmoredPegasusBase {
  constructor (game) {
    super(game, "Armored Pegasus", "Battle Royale Box Set", "BRB");
  }
}

module.exports = ArmoredPegasus;
