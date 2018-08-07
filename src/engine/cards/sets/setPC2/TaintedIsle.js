"use strict";
const Constants = require ("../../../Constants");
const TaintedIsleBase = require("../setPCA/TaintedIsle");

class TaintedIsle extends TaintedIsleBase {
  constructor (game) {
    super(game, "Tainted Isle", "Planechase 2012", "PC2");
  }
}

module.exports = TaintedIsle;
