"use strict";
const Constants = require ("../../../Constants");
const ArmoredPegasusBase = require("../setTPR/ArmoredPegasus");

class ArmoredPegasus extends ArmoredPegasusBase {
  constructor (game) {
    super(game, "Armored Pegasus", "Portal Demo Game", "PPOD");
  }
}

module.exports = ArmoredPegasus;
