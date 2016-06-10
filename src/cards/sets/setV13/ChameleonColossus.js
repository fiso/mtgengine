"use strict";
const Constants = require ("../../../Constants");
const ChameleonColossusBase = require("../setARC/ChameleonColossus");

class ChameleonColossus extends ChameleonColossusBase {
  constructor (game) {
    super(game, "Chameleon Colossus", "From the Vault: Twenty", "V13");
  }
}

module.exports = ChameleonColossus;
