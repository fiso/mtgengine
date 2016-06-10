"use strict";
const Constants = require ("../../../Constants");
const SymbiosisBase = require("../setBRB/Symbiosis");

class Symbiosis extends SymbiosisBase {
  constructor (game) {
    super(game, "Symbiosis", "Urza's Saga", "USG");
  }
}

module.exports = Symbiosis;
