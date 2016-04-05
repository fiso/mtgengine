"use strict";
const Constants = require ("../../../Constants");
const CrypticCommandBase = require("../setLRW/CrypticCommand");

class CrypticCommand extends CrypticCommandBase {
  constructor(game) {
    super(game, "Cryptic Command", "Magic Player Rewards", "pMPR");
  }
}

module.exports = CrypticCommand;
