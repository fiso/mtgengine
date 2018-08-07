"use strict";
const Constants = require ("../../../Constants");
const TaintedWoodBase = require("../setCMA/TaintedWood");

class TaintedWood extends TaintedWoodBase {
  constructor (game) {
    super(game, "Tainted Wood", "Commander 2015", "C15");
  }
}

module.exports = TaintedWood;
