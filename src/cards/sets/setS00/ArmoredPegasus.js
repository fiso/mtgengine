"use strict";
const Constants = require ("../../../Constants");
const ArmoredPegasusBase = require("../setATH/ArmoredPegasus");

class ArmoredPegasus extends ArmoredPegasusBase {
  constructor (game) {
    super(game, "Armored Pegasus", "Starter 2000", "S00");
  }
}

module.exports = ArmoredPegasus;
