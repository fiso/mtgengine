"use strict";
const Constants = require ("../../../Constants");
const MysticGenesisBase = require("../setMM3/MysticGenesis");

class MysticGenesis extends MysticGenesisBase {
  constructor (game) {
    super(game, "Mystic Genesis", "Gatecrash", "GTC");
  }
}

module.exports = MysticGenesis;
