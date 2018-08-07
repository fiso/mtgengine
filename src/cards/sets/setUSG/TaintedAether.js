"use strict";
const Constants = require ("../../../Constants");
const TaintedAetherBase = require("../set7ED/TaintedAether");

class TaintedAether extends TaintedAetherBase {
  constructor (game) {
    super(game, "Tainted Aether", "Urza's Saga", "USG");
  }
}

module.exports = TaintedAether;
