"use strict";
const Constants = require ("../../../Constants");
const CrypticCommandBase = require("../setIMA/CrypticCommand");

class CrypticCommand extends CrypticCommandBase {
  constructor (game) {
    super(game, "Cryptic Command", "Magic Player Rewards 2009", "P09");
  }
}

module.exports = CrypticCommand;
