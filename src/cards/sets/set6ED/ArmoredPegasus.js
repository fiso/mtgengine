"use strict";
const Constants = require ("../../../Constants");
const ArmoredPegasusBase = require("../setTPR/ArmoredPegasus");

class ArmoredPegasus extends ArmoredPegasusBase {
  constructor (game) {
    super(game, "Armored Pegasus", "Classic Sixth Edition", "6ED");
  }
}

module.exports = ArmoredPegasus;
