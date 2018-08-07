"use strict";
const Constants = require ("../../../Constants");
const TaintedIsleBase = require("../setPCA/TaintedIsle");

class TaintedIsle extends TaintedIsleBase {
  constructor (game) {
    super(game, "Tainted Isle", "Torment", "TOR");
  }
}

module.exports = TaintedIsle;
