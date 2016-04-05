"use strict";
const Constants = require ("../../../Constants");
const TaintedWoodBase = require("../setC15/TaintedWood");

class TaintedWood extends TaintedWoodBase {
  constructor(game) {
    super(game, "Tainted Wood", "Torment", "TOR");
  }
}

module.exports = TaintedWood;
