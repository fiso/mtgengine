"use strict";
const Constants = require ("../../../Constants");
const ArmoredPegasusBase = require("../setATH/ArmoredPegasus");

class ArmoredPegasus extends ArmoredPegasusBase {
  constructor (game) {
    super(game, "Armored Pegasus", "Tempest Remastered", "TPR");
  }
}

module.exports = ArmoredPegasus;
