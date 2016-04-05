"use strict";
const Constants = require ("../../../Constants");
const NecrogenesisBase = require("../setCMD/Necrogenesis");

class Necrogenesis extends NecrogenesisBase {
  constructor(game) {
    super(game, "Necrogenesis", "Shards of Alara", "ALA");
  }
}

module.exports = Necrogenesis;
