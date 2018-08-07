"use strict";
const Constants = require ("../../../Constants");
const CrypticCommandBase = require("../setIMA/CrypticCommand");

class CrypticCommand extends CrypticCommandBase {
  constructor (game) {
    super(game, "Cryptic Command", "Modern Masters", "MMA");
  }
}

module.exports = CrypticCommand;
