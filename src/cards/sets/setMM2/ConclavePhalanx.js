"use strict";
const Constants = require ("../../../Constants");
const ConclavePhalanxBase = require("../setDDF/ConclavePhalanx");

class ConclavePhalanx extends ConclavePhalanxBase {
  constructor (game) {
    super(game, "Conclave Phalanx", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = ConclavePhalanx;
