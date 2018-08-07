"use strict";
const Constants = require ("../../../Constants");
const MikaeustheLunarchBase = require("../setISD/MikaeustheLunarch");

class MikaeustheLunarch extends MikaeustheLunarchBase {
  constructor (game) {
    super(game, "Mikaeus, the Lunarch", "From the Vault: Legends", "V11");
  }
}

module.exports = MikaeustheLunarch;
